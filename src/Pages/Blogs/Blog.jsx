import { Link } from "react-router-dom";

const Blog = ({ blog }) => {
  const {
    id,
    name,
    image,
    location,
    small_description,
    year_established,
    collection_size,
    special_collections,
  } = blog;

  return (
    <div>
      <div className="card  bg-[#F2F2F2] shadow-xl">
        <figure>
          <img
            className="object-cover h-[20rem] w-full"
            src={image}
            alt="image"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{small_description}</p>

          <div className="card-actions justify-end">
            <Link to={`/blog/${id}`}>
              <button className="btn bg-[#23BE0A] text-white">Read More</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
