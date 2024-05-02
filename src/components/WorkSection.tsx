import { GradientTitle } from "./ui/GradientTitle";
import { projects } from "../data/projects";
export const WorkSection = () => {
  return (
    <section className="py-20">
      <div className="container max-w-6xl mx-auto">
        <div className="flex flex-col items-center justify-center gap-8">
          <h2 className="text-4xl font-semibold text-center text-gray-900 dark:text-gray-100">
            <GradientTitle title="Our Work" />
          </h2>
          <p className="max-w-3xl text-lg text-center text-gray-700 dark:text-gray-300">
            We have worked on a variety of projects, from small websites to
            large web applications.
          </p>
        </div>
        <div className="flex flex-col gap-8 mt-16">
          {projects.map((project, index) => (
            <WorkItem key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

type WorkItemProps = {
  title: string;
  description: string;
  imageUrl: ImageMetadata;
  projectUrl: string;
  skills: string[];
};

const WorkItem = ({
  title,
  description,
  imageUrl,
  projectUrl,
  skills,
}: WorkItemProps) => {
  return (
    <a
      className="flex flex-col md:flex-row gap-4 p-4 items-center rounded-lg transition ease-in-out duration-300 hover:bg-gray-950/50"
      href={projectUrl}
    >
      <img src={imageUrl.src} alt={title} className="md:w-52" />
      <div className="flex-1 shrink-0">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
          <GradientTitle title={title} />
        </h3>
        <p className="text-gray-700 dark:text-gray-300">{description}</p>
        {skills.map((skill) => (
          <span
            key={skill}
            className="inline-block px-2 py-1 mt-2 mr-2 text-sm font-semibold text-white bg-accent rounded-md"
          >
            {skill}
          </span>
        ))}
      </div>
    </a>
  );
};
