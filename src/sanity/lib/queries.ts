import { defineQuery } from "next-sanity";

export const MEMBERS_QUERY = defineQuery(
  `*[_type == "members"] | order(_createdAt asc)`
);
