import { Link, useLoaderData, useParams } from "react-router-dom";

import { setDataInLocalStorage } from "../../Utility/LocalStorage";
import { setWishlistDataInLocalStorage } from "../../Utility/LocalStorWishList";

const BookDetails = () => {
  const books = useLoaderData();
  const { bookId } = useParams();

  const parIn = parseInt(bookId);
  const currentBook = books.find((book) => book.bookId == parIn);

  const {
    bookName,
    author,
    image,
    review,
    category,
    totalPages,
    publisher,
    rating,
    tags,
    yearOfPublishing,
  } = currentBook;

  const handleReadBookBtn = () => {
    setDataInLocalStorage(parIn);
  };

  const handleWishListBtn = () => {
    setWishlistDataInLocalStorage(parIn);
  };
  return (
    <div className="max-w-7xl mx-auto my-10 px-4 sm:px-6 lg:px-8">
      <div className="card p-8 lg:card-side bg-base-100 shadow-xl">
        <figure>
          <img
            src={image}
            alt="image"
            className="h-[35rem] w-full bg-[#F2F2F2] p-16 rounded-2xl"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-3xl">{bookName}</h2>
          <p className="font-bold text-[#131313b1]">By: {author}</p>
          <div className="border-t border-b">
            <p className="font-bold text-[#131313b1] py-4">{category}</p>
          </div>
          <div>
            <p>
              <span className="font-bold">Review</span>:{review}
            </p>
          </div>
          <div className="flex items-center border-b">
            <span className="text-xl font-bold">Tags:</span>
            {tags.map((tag, index) => (
              <div
                key={index}
                className="font-bold p-2 rounded-full m-1 text-[#23BE0A] bg-[#F4FCF3]"
              >
                #{tag}
              </div>
            ))}
          </div>
          <div className="space-y-4 mt-6">
            <div className="text-[#131313b1] flex">
              <h4 className="mr-44 font-bold"> Number of Pages:</h4>

              <span className="font-bold text-[#131313ed]">{totalPages}</span>
            </div>
            <div className="text-[#131313b1] flex">
              <h4 className="mr-60 font-bold"> Publisher:</h4>
              <span className="font-bold text-[#131313ed]">{publisher}</span>
            </div>
            <div className="text-[#131313b1] flex">
              <h4 className="mr-44 font-bold">Year of Publishing:</h4>
              <span className="font-bold text-[#131313ed]">
                {yearOfPublishing}
              </span>
            </div>
            <div className="text-[#131313b1] flex">
              <h4 className="mr-[16.5rem] font-bold"> Rating:</h4>
              <span className="font-bold text-[#131313ed]"> {rating}</span>
            </div>
          </div>
          <div className="card-actions mt-24">
            <button
              onClick={handleReadBookBtn}
              className="btn bg-transparent border"
            >
              Read
            </button>
            <button
              onClick={handleWishListBtn}
              className="btn bg-[#50B1C9] text-white"
            >
              Wish List
            </button>
            <Link to={"/"}>
              <button className="btn btn-primary text-white">Go Back</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
