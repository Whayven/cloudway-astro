export const GradientTitle = ({ title }: { title: string }) => {
  return (
    <span className="bg-gradient-to-r from-accent to-accent-dark dark:to-accent-light bg-clip-text text-transparent dark:bg-gradient-to-l">
      {title}
    </span>
  );
};
