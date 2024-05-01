import { GradientTitle } from "./ui/GradientTitle";

export const AboutSection = () => {
  return (
    <section className="py-20">
      <div className="container max-w-6xl mx-auto">
        <div className="flex flex-col items-center justify-center gap-8">
          <h2 className="text-4xl font-semibold text-center text-gray-900 dark:text-gray-100">
            <GradientTitle title="About Us" />
          </h2>
          <p className="max-w-3xl text-lg text-center text-gray-700 dark:text-gray-300">
            We are a team of developers who are passionate about creating
            beautiful, modern, and accessible websites and web applications.
          </p>
        </div>
        <div className="flex flex-col gap-8 mt-16">
          {items.map((item, index) => (
            <SectionItem key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

const items = [
  {
    title: "Your Vision, Crafted with Passion.",
    description:
      "We pour heart and expertise into building beautiful, modern web experiences that resonate with your users.",
  },
  {
    title: "Innovation First.",
    description:
      "We harness cutting-edge tools and techniques to ensure your web presence stays ahead of the curve.",
  },
  {
    title: "Effortless Experiences for All.",
    description:
      "Intuitive interfaces and seamless navigation make your website a joy to use, regardless of a visitor's abilities.",
  },
];

const SectionItem = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <div className="flex items-center gap-4">
      <div>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
          <GradientTitle title={title} />
        </h3>
        <p className="text-gray-700 dark:text-gray-300">{description}</p>
      </div>
    </div>
  );
};
