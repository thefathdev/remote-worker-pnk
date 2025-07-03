import { About } from "@/components/home/about";
import { Activity } from "@/components/home/activity";
import { Articles } from "@/components/home/articles";
import { CtaSection } from "@/components/home/cta-section";
import { Hero } from "@/components/home/hero";
import { Members } from "@/components/home/members";
import { WorkFields } from "@/components/home/work-fields";
import { client } from "@/sanity/lib/client";
import { sanityFetch } from "@/sanity/lib/live";
import { MEMBERS_QUERY, POSTS_QUERY } from "@/sanity/lib/queries";

export default async function Home() {
  const { data: members } = await sanityFetch({
    query: MEMBERS_QUERY,
  });

  const posts = await client.fetch(POSTS_QUERY);

  return (
    <>
      <Hero />
      <About />
      <Activity />
      <WorkFields />
      <Members members={members} />
      <Articles data={posts} />
      <CtaSection />
    </>
  );
}
