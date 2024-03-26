import { CiStar } from "react-icons/ci";
import { Link } from "react-router-dom";

const Book = ({ book }) => {
  
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
  } = book;
  return (
    <div>
      <Link to={`/book/${bookId}`}>
        <div className="card h-[38rem]  bg-base-100 border shadow-xl">
          <figure className="px-10 pt-10 ">
            <img
              src={image}
              alt="book"
              className="rounded-xl h-[300px] w-full object-contain bg-[#F3F3F3] p-8"
            />
          </figure>
          <div className="card-body">
            <div className="flex">
              {tags.map((tag, index) => (
                <div
                  key={index}
                  className="font-bold p-2 rounded-full m-1 text-[#23BE0A] bg-[#F4FCF3]"
                >
                  {tag}
                </div>
              ))}
            </div>
            <h2 className="card-title text-3xl text-[#000000d6]">{bookName}</h2>
            <p className="font-bold text-[#131313b1]">By: {author}</p>
            <div className="flex justify-between items-center border-t-2 pt-6">
              <p className="font-bold text-[#131313b1]">{category}</p>
              <div className="flex font-bold text-[#131313b1]">
                <p className="">{rating}</p>
                <CiStar className="text-2xl" />
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Book;
