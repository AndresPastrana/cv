import Link from "next/link";
import { GithubIcon, LinkIcon } from "lucide-react";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "../ui/card";
import { projects } from "@/lib/const";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="container mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-24"
    >
      <div className="space-y-8">
        <div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
            Featured Projects
          </h2>
          <p className="mt-2 text-muted-foreground">
            A selection of my most notable projects.
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map(({ title, subtitle, desc, github, liveDemo }) => {
            return (
              <Card
                key={title.toLocaleLowerCase()}
                className="group relative overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              >
                <CardHeader>
                  <CardTitle>{title}</CardTitle>
                  <CardDescription>{subtitle}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{desc}</p>
                </CardContent>
                <CardFooter className="flex gap-4">
                  <Link
                    target="_blank"
                    href={github}
                    className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                    prefetch={false}
                  >
                    <GithubIcon className="mr-2 h-4 w-4" />
                    View Project
                  </Link>
                  <Link
                    target="_blank"
                    href={liveDemo}
                    className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                    prefetch={false}
                  >
                    <LinkIcon className="mr-2 h-4 w-4" />
                    Live Demo
                  </Link>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
