import Prismic from "@prismicio/client";

export function getPrismicClient(req = null) {
  const apiEndpoint = "https://blogsujpro.cdn.prismic.io/api/v2";
  const prismic = Prismic.client(apiEndpoint, { req });

  return prismic;
}
