import { GetStaticProps } from "next";

import { useState } from "react";

import Head from "next/head";
import styles from "./style.module.scss";
import Link from "next/link";
import Image from "next/image";
import thumb from "../../../public/images/thumb.png";
import {
  FiChevronLeft,
  FiChevronsLeft,
  FiChevronRight,
  FiChevronsRight,
} from "react-icons/fi";

import { getPrismicClient } from "../../services/prismic";
import Prismic from "@prismicio/client";
import { RichText } from "prismic-dom";

type Post = {
  slug: string;
  title: string;
  cover: string;
  description: string;
  updateAt: string;
};

interface PostProps {
  posts: Post[];
  page:string;
  totalPage: string;
}

export default function Posts({ posts: postsBlog, page, totalPage }: PostProps) {
  
  const[currentPage, setCurrentPage] = useState(Number(page))
  
  const [posts, setPosts] = useState(postsBlog || []);

  return (
    <div>
      <Head>
        <title>Blog | Sujeito Programador</title>
      </Head>
      <main className={styles.container}>
        <div className={styles.posts}>
          {posts.map((post) => (
            <Link legacyBehavior href={`/posts/${post.slug}`} key={post.slug}>
              <a key={post.slug}>
                <Image
                  src={post.cover}
                  alt={post.title}
                  width={720}
                  height={410}
                  quality={100}
                  placeholder="blur"
                  blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mMUNU2sBwACPgEsF/drhQAAAABJRU5ErkJggg=="
                />
                <strong> {post.title} </strong>
                <time>{post.updateAt}</time>
                <p>{post.description}</p>
              </a>
            </Link>
          ))}
          <div className={styles.buttonNavigate}>
            <div>
              <button>
                <FiChevronsLeft size={25} color="#fff" />
              </button>
              <button>
                <FiChevronLeft size={25} color="#fff" />
              </button>
            </div>
            <div>
              <button>
                <FiChevronRight size={25} color="#fff" />
              </button>
              <button>
                <FiChevronsRight size={25} color="#fff" />
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient();

  const response = await prismic.query(
    [Prismic.Predicates.at("document.type", "post")],
    {
      orderings: "[document.last_publication_date desc]", //ordenar pela data mais rescente
      fetch: ["post.title", "post.description", "post.cover"],
      pageSize: 3,
    }
  );

  const posts = response.results.map((post) => {
    return {
      slug: post.uid,
      title: RichText.asText(post.data.title),
      descripition: Array.isArray(post.data.description)
        ? post.data.description.find(
            (content: { type: string }) => content.type === "paragraph"
          )?.text ?? ""
        : "",
      cover: post.data.cover.url,
      updateAt:
        post.last_publication_date &&
        new Date(post.last_publication_date).toLocaleDateString("pt-BR", {
          day: "2-digit",
          month: "long",
          year: "numeric",
        }),
    };
  });

  return {
    props: {
      posts,
      page: response.page,
      totalPage: response.total_pages,
    },
    revalidate: 60 * 30, //Atualiza a cada 30 minutos
  };
};
