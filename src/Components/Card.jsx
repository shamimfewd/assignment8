import { GrLocation } from "react-icons/gr";
import { LuUsers } from "react-icons/lu";
import { FaBook } from "react-icons/fa";
import { Link } from "react-router-dom";


const Card = ({ book }) => {
  const {
    bookId,
    bookName,
    author,
    image,
    review,
    category,
    publisher,
    rating,
    tags,
    yearOfPublishing,
    totalPages,
  } = book;
  return (
    <div>
      <div>
        <div className="card card-side bg-base-100 shadow-xl border p-4 mb-6">
          <figure>
            <img
              className="h-[15rem] bg-[#F3F3F3] p-6 rounded-2xl"
              src={image}
              alt="image"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-[#000000ed]">{bookName}</h2>
            <p className="font-bold text-[#131313cb]">By: {author}</p>
            <div className="flex items-center">
              <div className="flex items-center">
                <span className="font-bold text-[#131313cb]">Tags</span>
                {tags.map((tag, index) => (
                  <div
                    key={index}
                    className="font-bold p-2 rounded-full m-1 text-[#23BE0A] bg-[#F4FCF3]"
                  >
                    {tag}
                  </div>
                ))}
              </div>
              <p className="font-bold text-[#131313cb] flex items-center gap-x-2">
                <GrLocation />

                <span className="text-[#131313cb]">
                  Year of Publishing: {yearOfPublishing}
                </span>
              </p>
            </div>
            <div className="flex gap-4 font-bold text-[#131313cb]">
              <h4 className="flex gap-x-2 items-center">
                <LuUsers /> <span>Publisher: {publisher}</span>
              </h4>
              <p className="flex gap-x-2 items-center">
                <FaBook /> <span>Pages: {totalPages}</span>
              </p>
            </div>

            <div className="flex gap-x-4 border-t pt-2">
              <div className="flex  items-center gap-x-2">
                <div className="bg-[#E0EEFF] text-[#0D99FF] font-bold p-3 rounded-full">
                  Category: {category}
                </div>
                <h4 className="bg-[#FFF3E0] text-orange-500 font-bold p-3 rounded-full">
                  Rating: {rating}
                </h4>
              </div>
              <Link to={`/book/${bookId}`}>
                <button className="btn rounded-full bg-[#23BE0A] text-white">
                  View Details
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
