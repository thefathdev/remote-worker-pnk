import { defineField, defineType } from "sanity";
import { PiCardholder, PiImage, PiLaptop, PiUserBold } from "react-icons/pi";

export const memberType = defineType({
  name: "members",
  title: "Members",
  type: "document",
  icon: PiUserBold,
  fields: [
    defineField({
      name: "name",
      type: "string",
      validation: (rule) => rule.required(),
      title: "Member Name",
      icon: PiCardholder,
    }),
    defineField({
      name: "title",
      type: "string",
      validation: (rule) => rule.required(),
      title: "Member Title",
      icon: PiLaptop,
    }),
    defineField({
      name: "photo",
      type: "image",
      title: "Member Photo",
      icon: PiImage,
    }),
    defineField({
      name: "slug",
      type: "slug",
      options: { source: "name" },
      validation: (rule) => rule.required(),
    }),
  ],

  preview: {
    select: {
      title: "name",
      subtitle: "title",
      media: "photo",
    },
  },
});
