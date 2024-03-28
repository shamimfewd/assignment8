import { useEffect, useState } from "react";
import Blog from "./Blog";
// import { useLoaderData } from "react-router-dom";

const Blogs = () => {
  const [blogsData, setBlogsData] = useState([]);
  //   const blogs = useLoaderData();
  useEffect(() => {
    fetch("blogsData.json")
      .then((res) => res.json())
      .then((data) => setBlogsData(data));
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center bg-[#F3F3F3] rounded-2xl mb-10">
        <h2 className="font-bold text-4xl p-6">Largest Libraries in the world</h2>
      </div>
      <div className=" grid lg:grid-cols-2  gap-6">
        {blogsData.map((blog, index) => (
          <Blog key={index} blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default Blogs;
