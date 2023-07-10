import { GetStaticProps } from "next";

import Head from "next/head";
import styles from "./styles.module.scss";

import { getPrismicClient } from "../../services/prismic";
import Prismic from "@prismicio/client";
import { RichText } from "prismic-dom";
import { FaYoutube, FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'

type content = {
  title: string;
  description: string;
  banner: string;
  facebook: string;
  youtube: string;
  instagram: string;
  linkedin: string;
};
interface ContentProps {
  content: content;
}
export default function Sobre({ content }: ContentProps) {
  return (
    <>
      <Head>
        <title>Quem somos? | Sujeito Programador</title>
      </Head>
      <main className={styles.container}>
        <div className={styles.containerHeader}>
            <section className={styles.ctaText}>
                <h1>{content.title}</h1>
                <p>{content.description}</p>
                
                <a href={content.youtube}>
                    <FaYoutube size={40} />
                </a>
                <a href={content.facebook}>
                    <FaFacebook size={40} />
                </a>
                <a href={content.instagram}>
                    <FaInstagram size={40} />
                </a>
                <a href={content.linkedin}>
                    <FaLinkedin size={40} />
                </a>

                <img src={content.banner} alt="Sobre Sujeito Programador" />
            </section>
        </div>
      </main>

    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient();

  const response = await prismic.query([
    Prismic.predicates.at("document.type", "about"),
  ]);

  const { title, description, banner, facebook, youtube, instagram, linkedin } =
    response.results[0].data;

  const content = {
    title: RichText.asText(title),
    description: RichText.asHtml(description),
    banner: banner.url,
    facebook: facebook.url,
    youtube: youtube.url,
    instagram: instagram.url,
    linkedin: linkedin.url,
  };

  return {
    props: {
      content,
    },
  };
};
