import { GradientTitle } from "./ui/GradientTitle";
import {
  ComputerDesktopIcon,
  PencilIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/16/solid";

export const ServiceSection = () => {
  return (
    <section className="py-20 ">
      <div className="container max-w-6xl mx-auto">
        <div className="flex flex-col items-center justify-center gap-8">
          <h2 className="text-4xl font-semibold text-center text-gray-900 dark:text-gray-100">
            <GradientTitle title="Our Services" />
          </h2>
          <p className="max-w-3xl text-lg text-center text-gray-700 dark:text-gray-300">
            We offer a variety of services to help you build and grow your
            online presence.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 mt-16 lg:grid-cols-3">
          {items.map((service, index) => (
            <SectionItem key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

type SectionItemProps = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

const items = [
  {
    title: "Design",
    description:
      "We design websites and web applications that are modern, accessible, and user-friendly.",
    icon: <PencilIcon />,
  },
  {
    title: "Development",
    description:
      "We develop websites and web applications using modern technologies and best practices.",
    icon: <ComputerDesktopIcon />,
  },
  {
    title: "SEO",
    description:
      "We optimize websites and web applications for search engines to improve visibility and ranking.",
    icon: <MagnifyingGlassIcon />,
  },
];

const SectionItem = ({ title, description, icon }: SectionItemProps) => {
  return (
    <div className="flex items-center gap-4">
      <div className="flex flex-col gap-2">
        <div className="flex gap-4 items-center">
          <div className="h-10 w-10 border-2 rounded-full p-2">{icon}</div>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
            <GradientTitle title={title} />
          </h3>
        </div>
        <p className="text-gray-700 dark:text-gray-300">{description}</p>
      </div>
    </div>
  );
};
