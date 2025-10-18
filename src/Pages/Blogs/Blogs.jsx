import { useLoaderData } from "react-router";
import SectionHeader from "../../components/SectionHeader/SectionHeader";
import Blog from "../Blog/Blog";

const Blogs = () => {
  const blogs = useLoaderData();


  return (
    <div>
      <SectionHeader
        title={"Blog"}
        description={"In this article, we’ll explore the key trends, tools, and technologies shaping the future of frontend development. Whether you're a seasoned developer or just starting out, understanding where the industry is headed will help you stay ahead of the curve and build more modern, efficient, and user-friendly applications."}
      ></SectionHeader>
      <div className="flex flex-col gap-8">
        {
          blogs.map((blog, index) => (
            <Blog key={blog.id} blog={blog} index={index + 1}></Blog>
          ))
        }
      </div>
    </div>
  );
};

export default Blogs;