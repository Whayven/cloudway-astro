interface BlogPostProps {
  title: string;
  url: string;
}

const BlogPost = ({ title, url }: BlogPostProps) => {
  return (
    <li>
      <a
        href={url}
        className="text-blue-600 hover:text-blue-800 hover:underline transition duration-200"
      >
        {title}
      </a>
    </li>
  );
};

export default BlogPost;
