import Link from "next/link";
import { POSTS_QUERYResult } from "../../../sanity.types";
import { ArticlesMobileCarousel } from "./articles-mobile-carousel";
import Image from "next/image";

type ArticlesProps = {
  data: POSTS_QUERYResult;
};

export function Articles({ data }: ArticlesProps) {
  if (!data) return null;

  return (
    <section
      id="articles"
      className="p-7 max-sm:scroll-mt-10 flex flex-col gap-8 border border-[#F3F3F3] bg-[#FBFBFB] rounded-[2.5rem] max-sm:rounded-[2rem] max-sm:p-4 "
    >
      <h2 className="font-satoshi font-bold text-[2rem] leading-[1.2] text-[#1C1C1C] max-sm:text-[1.75rem]">
        Our Latest News and Articles
      </h2>

      <div className="grid grid-cols-2 gap-5 max-sm:hidden">
        {data.map((article) => (
          <ArticleCard key={article.title} article={article} />
        ))}
      </div>

      {/* Mobile carousel */}
      <div className="sm:hidden">
        <ArticlesMobileCarousel data={data} />
      </div>
    </section>
  );
}

type ArticleCardProps = {
  article: NonNullable<POSTS_QUERYResult>[number];
};

export const ArticleCard = ({ article }: ArticleCardProps) => (
  <div className="p-5 gap-5 flex flex-col bg-white rounded-[1.25rem]">
    <div className="rounded-[0.75rem] w-full aspect-video bg-[#F3F3F3] relative overflow-hidden max-sm:h-[230px] max-sm:aspect-auto">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <Image
        src={article.mainImage ?? ""}
        alt={article.title ?? ""}
        fill
        className="object-cover w-full h-full "
        loading="lazy"
        decoding="async"
      />
    </div>

    <div className="flex flex-col gap-3">
      <div className="py-1 flex items-center gap-2 px-2 border text-xs rounded-full border-[#F3F3F3] w-fit font-medium text-[#1C1C1C]">
        {article.author?.image && (
          <Image
            src={article.author?.image ?? ""}
            alt={article.author?.name ?? ""}
            width={10}
            height={10}
            className="rounded-full"
          />
        )}
        {article.author?.name}
      </div>

      <h3 className="font-satoshi font-bold text-xl leading-[1.2] text-[#1C1C1C]">
        {article.title}
      </h3>
    </div>

    <Link
      href={`/posts/${article.slug?.current}`}
      className="font-satoshi font-bold underline text-[#1C1C1C] underline-offset-4"
    >
      Read More
    </Link>
  </div>
);
