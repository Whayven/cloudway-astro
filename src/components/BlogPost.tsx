const BlogPost = ({ title, url }: { title: string; url: string }) => {
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
