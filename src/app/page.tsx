"use client";
import { useState } from "react";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";

import {
  MountainIcon,
  SunIcon,
  MoonIcon,
  GithubIcon,
  LinkedinIcon,
  CodepenIcon,
  NetworkIcon,
  XIcon,
  DatabaseIcon,
  TypeIcon,
  HomeIcon,
  WindIcon,
  GitGraphIcon,
  CheckIcon,
  LinkIcon,
} from "lucide-react";
export default function Component() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  return (
    <div
      className={`flex flex-col min-h-[100dvh] bg-background text-foreground ${
        isDarkMode ? "dark" : ""
      }`}
    >
      <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md">
        <div className="container mx-auto flex h-16 max-w-6xl items-center justify-between px-4 md:px-6">
          <Link href="#" className="flex items-center gap-2" prefetch={false}>
            <MountainIcon className="h-6 w-6" />
            <span className="text-lg font-semibold">Andres Pastrana</span>
          </Link>
          <nav className="hidden items-center gap-4 md:flex">
            <Link
              href="#"
              className="text-sm font-medium hover:underline underline-offset-4"
              prefetch={false}
            >
              About
            </Link>
            <Link
              href="#"
              className="text-sm font-medium hover:underline underline-offset-4"
              prefetch={false}
            >
              Skills
            </Link>
            <Link
              href="#"
              className="text-sm font-medium hover:underline underline-offset-4"
              prefetch={false}
            >
              Experience
            </Link>
            <Link
              href="#"
              className="text-sm font-medium hover:underline underline-offset-4"
              prefetch={false}
            >
              Projects
            </Link>
            <Link
              href="#"
              className="text-sm font-medium hover:underline underline-offset-4"
              prefetch={false}
            >
              Education
            </Link>
            <Link
              href="#"
              className="text-sm font-medium hover:underline underline-offset-4"
              prefetch={false}
            >
              Certifications
            </Link>
            <Link
              href="#"
              className="text-sm font-medium hover:underline underline-offset-4"
              prefetch={false}
            >
              Services
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsDarkMode(!isDarkMode)}
            >
              {isDarkMode ? (
                <SunIcon className="h-6 w-6" />
              ) : (
                <MoonIcon className="h-6 w-6" />
              )}
              <span className="sr-only">Toggle dark mode</span>
            </Button>
            <Button>Download CV</Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
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
                building innovative and scalable web applications. With
                expertise in the MERN stack and NestJS, I have a proven track
                record of delivering high-quality, user-centric solutions.
              </p>
              <div className="flex gap-4">
                <Link
                  href="#"
                  className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                  prefetch={false}
                >
                  <GithubIcon className="mr-2 h-4 w-4" />
                  GitHub
                </Link>
                <Link
                  href="#"
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
        <section
          id="skills"
          className="container mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-24"
        >
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                Technical Skills
              </h2>
              <p className="mt-2 text-muted-foreground">
                Proficient in the following technologies:
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4">
              <div className="flex items-center gap-2 rounded-md bg-muted px-4 py-2">
                <CodepenIcon className="h-6 w-6" />
                <span>React</span>
              </div>
              <div className="flex items-center gap-2 rounded-md bg-muted px-4 py-2">
                <NetworkIcon className="h-6 w-6" />
                <span>Node.js</span>
              </div>
              <div className="flex items-center gap-2 rounded-md bg-muted px-4 py-2">
                <XIcon className="h-6 w-6" />
                <span>Express</span>
              </div>
              <div className="flex items-center gap-2 rounded-md bg-muted px-4 py-2">
                <DatabaseIcon className="h-6 w-6" />
                <span>MongoDB</span>
              </div>
              <div className="flex items-center gap-2 rounded-md bg-muted px-4 py-2">
                <TypeIcon className="h-6 w-6" />
                <span>TypeScript</span>
              </div>
              <div className="flex items-center gap-2 rounded-md bg-muted px-4 py-2">
                <HomeIcon className="h-6 w-6" />
                <span>NestJS</span>
              </div>
              <div className="flex items-center gap-2 rounded-md bg-muted px-4 py-2">
                <WindIcon className="h-6 w-6" />
                <span>Tailwind CSS</span>
              </div>
              <div className="flex items-center gap-2 rounded-md bg-muted px-4 py-2">
                <GitGraphIcon className="h-6 w-6" />
                <span>Git</span>
              </div>
            </div>
          </div>
        </section>
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
                  <h3 className="text-lg font-semibold">
                    Full-Stack Developer
                  </h3>
                  <p className="text-muted-foreground">Acme Inc.</p>
                </div>
                <div>
                  <p>
                    As a full-stack developer at Acme Inc., I have been
                    responsible for building and maintaining complex web
                    applications using the MERN stack and NestJS. I have played
                    a key role in designing and implementing scalable and
                    efficient architectures, as well as integrating cutting-edge
                    technologies to enhance the user experience.
                  </p>
                  <ul className="mt-4 space-y-2 text-muted-foreground">
                    <li>
                      <CheckIcon className="mr-2 h-4 w-4 inline-block" />
                      Developed and optimized RESTful APIs using NestJS and
                      MongoDB
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
                      Participated in code reviews, pair programming, and
                      continuous integration/deployment processes
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
                    As a junior full-stack developer at Acme Inc., I gained
                    valuable experience in building and maintaining web
                    applications using the MERN stack. I worked closely with
                    senior developers to learn best practices and improve my
                    skills in various aspects of web development.
                  </p>
                  <ul className="mt-4 space-y-2 text-muted-foreground">
                    <li>
                      <CheckIcon className="mr-2 h-4 w-4 inline-block" />
                      Developed and tested RESTful APIs using Node.js and
                      Express
                    </li>
                    <li>
                      <CheckIcon className="mr-2 h-4 w-4 inline-block" />
                      Lorem ipsum
                    </li>
                    <li>
                      <CheckIcon className="mr-2 h-4 w-4 inline-block" />
                      Participated in agile development processes, including
                      sprint planning, daily standups, and retrospectives
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
              <Card className="group relative overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                <CardHeader>
                  <CardTitle>E-commerce Platform</CardTitle>
                  <CardDescription>
                    A full-featured e-commerce platform built with the MERN
                    stack and NestJS.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Developed a scalable and secure e-commerce platform with
                    features like product management, shopping cart, checkout
                    process, and order management.
                  </p>
                </CardContent>
                <CardFooter className="flex gap-4">
                  <Link
                    href="#"
                    className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                    prefetch={false}
                  >
                    <GithubIcon className="mr-2 h-4 w-4" />
                    View Project
                  </Link>
                  <Link
                    href="#"
                    className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                    prefetch={false}
                  >
                    <LinkIcon className="mr-2 h-4 w-4" />
                    Live Demo
                  </Link>
                </CardFooter>
              </Card>
              <Card className="group relative overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                <CardHeader>
                  <CardTitle>Task Management App</CardTitle>
                  <CardDescription>
                    A task management application built with React, NestJS, and
                    MongoDB.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Developed a task management application with features like
                    task creation, assignment, prioritization, and
                    collaboration.
                  </p>
                </CardContent>
                <CardFooter className="flex gap-4">
                  <Link
                    href="#"
                    className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                    prefetch={false}
                  >
                    <GithubIcon className="mr-2 h-4 w-4" />
                    View Project
                  </Link>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
