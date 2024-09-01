import React from "react";
import { CheckIcon } from "lucide-react";

export const Experience = () => {
  return (
    <section
      id="experience"
      className="container mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-24"
    >
      <div className="space-y-8">
        <div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
            Professional Experience
          </h2>
          <p className="mt-2 text-muted-foreground">
            Highlights of my professional journey.
          </p>
        </div>
        <div className="relative pl-6 after:absolute after:inset-y-0 after:w-px after:bg-muted-foreground/20 space-y-6">
          <div className="grid gap-4 md:grid-cols-[1fr_2fr]">
            <div className="flex flex-col items-start gap-1">
              <div className="rounded-md bg-muted px-3 py-1 text-sm font-medium">
                2021 - Present
              </div>
              <h3 className="text-lg font-semibold">Full-Stack Developer</h3>
              <p className="text-muted-foreground">Acme Inc.</p>
            </div>
            <div>
              <p>
                As a full-stack developer at Acme Inc., I have been responsible
                for building and maintaining complex web applications using the
                MERN stack and NestJS. I have played a key role in designing and
                implementing scalable and efficient architectures, as well as
                integrating cutting-edge technologies to enhance the user
                experience.
              </p>
              <ul className="mt-4 space-y-2 text-muted-foreground">
                <li>
                  <CheckIcon className="mr-2 h-4 w-4 inline-block" />
                  Developed and optimized RESTful APIs using NestJS and MongoDB
                </li>
                <li>
                  <CheckIcon className="mr-2 h-4 w-4 inline-block" />
                  Lorem ipsum
                </li>
                <li>
                  <CheckIcon className="mr-2 h-4 w-4 inline-block" />
                  Collaborated with cross-functional teams to gather
                  requirements, design solutions, and deliver high-quality
                  software
                </li>
                <li>
                  <CheckIcon className="mr-2 h-4 w-4 inline-block" />
                  Participated in code reviews, pair programming, and continuous
                  integration/deployment processes
                </li>
              </ul>
            </div>
          </div>
          <div className="grid gap-4 md:grid-cols-[1fr_2fr]">
            <div className="flex flex-col items-start gap-1">
              <div className="rounded-md bg-muted px-3 py-1 text-sm font-medium">
                2019 - 2021
              </div>
              <h3 className="text-lg font-semibold">
                Junior Full-Stack Developer
              </h3>
              <p className="text-muted-foreground">Acme Inc.</p>
            </div>
            <div>
              <p>
                As a junior full-stack developer at Acme Inc., I gained valuable
                experience in building and maintaining web applications using
                the MERN stack. I worked closely with senior developers to learn
                best practices and improve my skills in various aspects of web
                development.
              </p>
              <ul className="mt-4 space-y-2 text-muted-foreground">
                <li>
                  <CheckIcon className="mr-2 h-4 w-4 inline-block" />
                  Developed and tested RESTful APIs using Node.js and Express
                </li>
                <li>
                  <CheckIcon className="mr-2 h-4 w-4 inline-block" />
                  Lorem ipsum
                </li>
                <li>
                  <CheckIcon className="mr-2 h-4 w-4 inline-block" />
                  Participated in agile development processes, including sprint
                  planning, daily standups, and retrospectives
                </li>
                <li>
                  <CheckIcon className="mr-2 h-4 w-4 inline-block" />
                  Gained experience in version control using Git and
                  collaborating with team members
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
