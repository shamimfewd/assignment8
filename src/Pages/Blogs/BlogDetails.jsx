import { Link, useLoaderData, useParams } from "react-router-dom";

const BlogDetails = () => {
  const blogs = useLoaderData();
  const { id } = useParams();
  const perIn = parseInt(id);
  const currentBlog = blogs.find((blog) => blog.id === perIn);
  const {
    name,
    image,
    location,

    year_established,
    collection_size,
    special_collections,
    description,
  } = currentBlog;
  return (
    <div className="max-w-7xl mx-auto my-10 px-4 sm:px-6 lg:px-8">
      <div className="card  bg-[#F2F2F2] shadow-xl">
        <figure>
          <img
            className="object-cover h-[30rem] w-full"
            src={image}
            alt="image"
          />
        </figure>
        <div className="card-body text-[#000000d7]">
          <h2 className="card-title">{name}</h2>
          <div className="space-y-2 border-b">
            <p>Location: <span className="font-bold">{location}</span> </p>
            <p>Year of Established: <span className="font-bold">{year_established}</span></p>
            <p>Collection Size: <span className="font-bold">{collection_size}</span></p>
          </div>
          <p className="mt-4 leading-6">{description}</p>

          <Link to={"/blogs"}>
            <button className="btn btn-primary">Go Back</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
