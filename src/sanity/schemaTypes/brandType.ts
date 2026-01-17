import { defineField, defineType } from "sanity";
import { PiImage } from "react-icons/pi";

export const brandType = defineType({
  name: "brands",
  title: "Brands",
  type: "document",
  icon: PiImage,
  fields: [
    defineField({
      name: "logo",
      type: "image",
      title: "Logo",
      description: "Brand logo/image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "name",
      type: "string",
      title: "Name (optional)",
    }),
    defineField({
      name: "url",
      type: "url",
      title: "URL (optional)",
      description:
        "Website link for the brand (will open in a new tab on the site)",
    }),
  ],

  preview: {
    select: {
      title: "name",
      media: "logo",
      subtitle: "url",
    },
    prepare(selection) {
      const { title, subtitle, media } = selection;
      return {
        title: title || "Unnamed brand",
        subtitle: subtitle || "",
        media,
      };
    },
  },
});
