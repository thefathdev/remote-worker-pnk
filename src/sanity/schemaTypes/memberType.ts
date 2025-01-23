import { defineField, defineType } from "sanity";

export const memberType = defineType({
  name: "members",
  title: "Members",
  type: "document",
  fields: [
    defineField({
      name: "name",
      type: "string",
      validation: (rule) => rule.required(),
      title: "Member Name",
    }),
    defineField({
      name: "title",
      type: "string",
      validation: (rule) => rule.required(),
      title: "Member Title",
    }),
    defineField({
      name: "photo",
      type: "image",
      title: "Member Photo",
    }),
    defineField({
      name: "slug",
      type: "slug",
      options: { source: "name" },
      validation: (rule) => rule.required(),
    }),
  ],
});
