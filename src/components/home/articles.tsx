import { ArticlesMobileCarousel } from "./articles-mobile-carousel";

export const ARTICLES = [
  {
    source: "Pontianak Post",
    title:
      "Melihat Eksistensi Komunitas Remote Worker Pontianak, Jadi Wadah Bagi Pekerja Jarak Jauh",
    description:
      "Komunitas Remote Worker Pontianak terus berkembang, menjadi tempat berkumpulnya talenta-talenta digital muda yang siap bersaing secara global...",
    image: "/articles/article-1.jpg",
    readMoreLink: "#",
  },
  {
    source: "Pontinesia",
    title:
      "Mengenal Komunitas Remote Worker Pontianak: Tempat Berkumpulnya Talenta Digital Lokal",
    description:
      "Sebagian orang harus berangkat kerja pagi-pagi sekali. Lebih awal lebih baik lagi, agar menghindari keramaian di beberapa titik tertentu. Khususnya bagi masyaraka...",
    image: "/articles/article-2.jpg",
    readMoreLink: "#",
  },
];

export function Articles() {
  return (
    <section
      id="articles"
      className="p-7 max-sm:scroll-mt-10 flex flex-col gap-8 border border-[#F3F3F3] bg-[#FBFBFB] rounded-[2.5rem] max-sm:rounded-[2rem] max-sm:p-4 "
    >
      <h2 className="font-satoshi font-bold text-[2rem] leading-[1.2] text-[#1C1C1C] max-sm:text-[1.75rem]">
        Our Latest News and Articles
      </h2>

      <div className="grid grid-cols-2 gap-5 max-sm:hidden">
        {ARTICLES.map((article) => (
          <ArticleCard key={article.title} {...article} />
        ))}
      </div>

      {/* Mobile carousel */}
      <div className="sm:hidden">
        <ArticlesMobileCarousel />
      </div>
    </section>
  );
}

type ArticleCardProps = {
  source: string;
  title: string;
  description: string;
  image: string;
  readMoreLink: string;
};

export const ArticleCard = ({
  source,
  title,
  description,
  image,
  readMoreLink,
}: ArticleCardProps) => (
  <div className="p-5 gap-5 flex flex-col bg-white rounded-[1.25rem]">
    <div className="rounded-[0.75rem] w-full aspect-video bg-[#F3F3F3] relative overflow-hidden max-sm:h-[230px] max-sm:aspect-auto">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={image}
        alt={title}
        className="object-cover w-full h-full "
        loading="lazy"
        decoding="async"
      />
    </div>

    <div className="flex flex-col gap-3">
      <span className="py-2 px-4 border rounded-full border-[#F3F3F3] w-fit font-medium text-[#1C1C1C]">
        {source}
      </span>

      <h3 className="font-satoshi font-bold text-xl leading-[1.2] text-[#1C1C1C]">
        {title}
      </h3>

      <p>{description}</p>
    </div>

    <a
      href={readMoreLink}
      className="font-satoshi font-bold underline text-[#1C1C1C] underline-offset-4"
    >
      Read More
    </a>
  </div>
);
