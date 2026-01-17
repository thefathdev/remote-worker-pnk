import { defineQuery } from "next-sanity";

export const MEMBERS_QUERY = defineQuery(
  `*[_type == "members"] | order(_createdAt asc)`,
);

export const BRANDS_QUERY = defineQuery(
  `*[_type == "brands"] | order(_createdAt asc)`,
);

export const POSTS_QUERY =
  defineQuery(`*[_type == "post"] | order(_createdAt desc){
    title,
    slug,
    "mainImage": mainImage.asset->url,
    publishedAt,
    author->{
      name,
      "image": image.asset->url
    },
    categories[]->{
      title
    }
  }`);

export const SINGLE_POST_QUERY =
  defineQuery(`*[_type == "post" && slug.current == $slug][0]{
    ...,
    "mainImage": mainImage.asset->url,
    author->{
      name,
      "image": image.asset->url
    },
    categories[]->{
      title
    }
  }`);
