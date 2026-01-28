import { About } from "@/components/home/about";
import { Activity } from "@/components/home/activity";
import { Articles } from "@/components/home/articles";
import { CtaSection } from "@/components/home/cta-section";
import { Hero } from "@/components/home/hero";
import { Members } from "@/components/home/members";
import { WorkFields } from "@/components/home/work-fields";
import { Brands } from "@/components/home/brands";
import { client } from "@/sanity/lib/client";
import { sanityFetch } from "@/sanity/lib/live";
import { MEMBERS_QUERY, BRANDS_QUERY, POSTS_QUERY } from "@/sanity/lib/queries";

export const revalidate = 300; // Revalidate this page every 5 minutes

export default async function Home() {
  const { data: members } = await sanityFetch({
    query: MEMBERS_QUERY,
  });

  const { data: brands } = await sanityFetch({
    query: BRANDS_QUERY,
  });

  const posts = await client.fetch(POSTS_QUERY);

  return (
    <>
      <Hero />
      <Brands brands={brands} />
      <About />
      <Activity />
      <WorkFields />
      <Members members={members} />
      <Articles data={posts} />
      <CtaSection />
    </>
  );
}
