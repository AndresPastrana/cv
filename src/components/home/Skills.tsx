import {
  CodepenIcon,
  NetworkIcon,
  XIcon,
  DatabaseIcon,
  TypeIcon,
  HomeIcon,
  WindIcon,
  GitGraphIcon,
} from "lucide-react";

export const Skills = () => {
  return (
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
  );
};
