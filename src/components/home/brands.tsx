import { urlFor } from "@/sanity/lib/image";
import { Marquee } from "../animated-ui/marquee";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";

type Brand = {
  _id: string;
  name?: string | null;
  url?: string | null;
  logo?: unknown;
};

export function Brands({ brands }: { brands: Brand[] }) {
  if (!brands || brands.length === 0) return null;

  // Split brands into chunks so each marquee row has items
  const row1 = brands.slice(0, 8);
  const row2 = brands.slice(8, 16);
  const row3 = brands.slice(16, 24);
  const row4 = brands.slice(24);

  return (
    <section
      id="brands"
      className="py-7 max-sm:scroll-mt-10 flex flex-col gap-10 border border-[#F3F3F3] bg-[#FBFBFB] rounded-[2.5rem] max-w-[calc(100vw-450px)] max-sm:max-w-[calc(100vw-32px)] max-sm:rounded-[2rem] max-sm:py-4"
    >
      <div className="px-7 max-sm:px-4">
        <h2 className="font-satoshi font-bold text-[2rem] leading-[1.2] text-[#1C1C1C] max-sm:text-[1.75rem]">
          Brands Collaboration
        </h2>
      </div>

      <div className="flex flex-col overflow-hidden gap-5 max-w-full relative">
        {row1.length > 0 && (
          <Marquee className="p-0 [--duration:8s]">
            {row1.map((brand) => (
              <BrandCard key={brand._id} brand={brand} />
            ))}
          </Marquee>
        )}

        {row2.length > 0 && (
          <Marquee reverse className="p-0 [--duration:45s]">
            {row2.map((brand) => (
              <BrandCard key={brand._id} brand={brand} />
            ))}
          </Marquee>
        )}

        {row3.length > 0 && (
          <Marquee className="p-0 [--duration:30s]">
            {row3.map((brand) => (
              <BrandCard key={brand._id} brand={brand} />
            ))}
          </Marquee>
        )}

        {row4.length > 0 && (
          <Marquee reverse className="p-0 [--duration:20s]">
            {row4.map((brand) => (
              <BrandCard key={brand._id} brand={brand} />
            ))}
          </Marquee>
        )}

        <div className="absolute inset-y-0 left-0 bg-gradient-to-r from-white/70 to-white/0 w-[5.5rem] max-sm:w-10" />
        <div className="absolute inset-y-0 right-0 bg-gradient-to-r to-white/70 from-white/0 w-[5.5rem] max-sm:w-10" />
      </div>
    </section>
  );
}

const BrandCard = ({ brand }: { brand: Brand }) => {
  const imageUrl =
    brand.logo && typeof brand.logo !== "string"
      ? // builder expects a SanityImageSource (asset ref/object). Guard to call urlFor only when we have something.
        // urlFor will throw at runtime if passed an invalid value; the member implementation assumes photo exists.
        // Here we optimistically call urlFor and fallback to empty string if not usable.
        urlFor(brand.logo as SanityImageSource)
          .size(200, 200)
          .url()
      : "";

  const CardInner = (
    <div className="p-3 rounded-[1.25rem] overflow-hidden flex items-center justify-center h-[150px] w-[200px] relative bg-white border border-[#F3F3F3]">
      {imageUrl ? (
        <img
          src={imageUrl}
          alt={brand.name || "brand logo"}
          className="object-contain w-full h-full"
          loading="lazy"
          decoding="async"
        />
      ) : (
        <div className="text-sm text-[#8E9194]">{brand.name || "Brand"}</div>
      )}
    </div>
  );

  return brand.url ? (
    <a
      href={brand.url}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block"
      aria-label={brand.name || "Open brand site"}
    >
      {CardInner}
    </a>
  ) : (
    <div className="inline-block">{CardInner}</div>
  );
};
