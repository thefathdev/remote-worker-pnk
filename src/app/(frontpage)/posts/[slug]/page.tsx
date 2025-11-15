import { SINGLE_POST_QUERY } from "@/sanity/lib/queries";
import { client } from "@/sanity/lib/client";
import { PortableText } from "@portabletext/react";
import { notFound } from "next/navigation";
import Image from "next/image";

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;

  const post = await client.fetch(SINGLE_POST_QUERY, { slug });

  if (!post) return notFound();

  return (
    <section className="relative space-y-10 max-sm:space-y-8">
      <div className="relative aspect-video w-full rounded-[2.5rem] max-sm:rounded-[2rem] overflow-hidden">
        <Image
          src={post.mainImage ?? ""}
          alt={post.title ?? ""}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-7 relative prose text-black max-sm:scroll-mt-10 w-full max-w-none border border-[#F3F3F3] bg-[#FBFBFB] rounded-[2.5rem] max-sm:rounded-[2rem] max-sm:p-4 ">
        <h1 className="font-satoshi font-bold text-[2rem] leading-[1.2] text-[#1C1C1C] max-sm:text-[1.75rem]">
          {post.title}
        </h1>
        {post.body && <PortableText value={post.body} />}
      </div>
    </section>
  );
}
