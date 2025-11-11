import type { Metadata } from "next";
import { Section } from "@/components/Section";
import { Button } from "@/components/Button";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Home",
};

export default function Home() {
  return (
    <Section>
      <div className="text-center max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Welcome to Portfolio v2
        </h1>
        <p className="text-xl text-gray mb-8">
          A modern portfolio built with Next.js, TypeScript, and Tailwind CSS.
          Explore my projects, read my writing, and learn more about my work.
        </p>
        {/* TODO: Add orbit feature flag integration when available */}
        <div className="flex gap-4 justify-center flex-wrap">
          <Link href="/projects">
            <Button>View Projects</Button>
          </Link>
          <Link href="/writing">
            <Button variant="secondary">Read Writing</Button>
          </Link>
        </div>
      </div>
    </Section>
  );
}
