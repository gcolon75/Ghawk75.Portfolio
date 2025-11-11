import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import { Section } from "@/components/Section";
import { MetaPanel } from "@/components/MetaPanel";
import { projects } from "@/data/projects";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: project.title,
    description: project.summary,
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <Section>
      <article>
        <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
        {project.role && (
          <p className="text-lg text-gray mb-8">{project.role}</p>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="prose prose-lg max-w-none">
              <p className="text-xl leading-relaxed">{project.summary}</p>

              {project.images && project.images.length > 0 && (
                <div className="my-8 relative aspect-video">
                  <Image
                    src={project.images[0]}
                    alt={project.title}
                    fill
                    className="object-cover rounded-lg shadow-lg"
                  />
                </div>
              )}

              {project.links && (
                <div className="mt-8 flex gap-4">
                  {project.links.repo && (
                    <a
                      href={project.links.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-teal hover:text-teal-dark underline"
                    >
                      View Repository
                    </a>
                  )}
                  {project.links.demo && (
                    <a
                      href={project.links.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-teal hover:text-teal-dark underline"
                    >
                      View Demo
                    </a>
                  )}
                </div>
              )}
            </div>
          </div>

          <div className="lg:col-span-1">
            <MetaPanel
              skills={project.skills}
              concepts={project.concepts}
              tools={project.tools}
              role={project.role}
            />
          </div>
        </div>
      </article>
    </Section>
  );
}
