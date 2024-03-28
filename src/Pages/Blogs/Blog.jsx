import { Link } from "react-router-dom";
import PropTypes from "prop-types";
const Blog = ({ blog }) => {
  const {
    id,
    name,
    image,
    small_description,
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

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
};
export default Blog;
