import { GithubIcon, LinkedinIcon } from "lucide-react";
import Link from "next/link";

export const WhoAmI = () => {
  return (
    <section
      id="about"
      className="container mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-24"
    >
      <div className="grid gap-8 md:grid-cols-2 md:gap-16">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
            Andres Pastrana
          </h1>
          <p className="text-lg text-muted-foreground">
            Full-Stack Developer | MERN & NestJS Expert
          </p>
          <p>
            I am a highly skilled full-stack developer with a passion for
            building innovative and scalable web applications. With expertise in
            the MERN stack and NestJS, I have a proven track record of
            delivering high-quality, user-centric solutions.
          </p>
          <div className="flex gap-4">
            <Link
              target="_blank"
              href="https://github.com/AndresPastrana"
              className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
              prefetch={false}
            >
              <GithubIcon className="mr-2 h-4 w-4" />
              GitHub
            </Link>
            <Link
              target="_blank"
              href="https://www.linkedin.com/in/andrese-pastrana/"
              className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
              prefetch={false}
            >
              <LinkedinIcon className="mr-2 h-4 w-4" />
              LinkedIn
            </Link>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <img
            src="/placeholder.svg"
            width={400}
            height={400}
            alt="Andres Pastrana"
            className="rounded-full"
            style={{ aspectRatio: "400/400", objectFit: "cover" }}
          />
        </div>
      </div>
    </section>
  );
};
