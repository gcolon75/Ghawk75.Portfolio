import type { Metadata } from "next";
import { Section } from "@/components/Section";
import { Card } from "@/components/Card";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects",
  description: "Browse my portfolio of projects across design and development.",
};

export default function ProjectsPage() {
  return (
    <Section>
      <h1 className="text-4xl font-bold mb-8">Projects</h1>
      <p className="text-xl text-gray mb-12 max-w-3xl">
        A collection of my work in game design, UX design, and development. Each
        project represents a unique challenge and learning opportunity.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <Card
            key={project.slug}
            title={project.title}
            description={project.summary}
            href={`/projects/${project.slug}`}
            tags={project.skills.slice(0, 3)}
          />
        ))}
      </div>
    </Section>
  );
}
