
import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import ReadBooks from "./ReadBooks/ReadBooks";
import { getDataFromLocalStorage } from "../../Utility/LocalStorage";
import WishList from "./WishList/WishList";
import { getWishlistDataFromLocalStorage } from "../../Utility/LocalStorWishList";
import { IoIosArrowDown } from "react-icons/io";

const ListedBooks = () => {
  const books = useLoaderData();
  const [displayBooks, setDisplayBooks] = useState([]);
  const [wishListBooks, setWishListBooks] = useState([]);
  

  // read books---------
  useEffect(() => {
    const storedBook = getDataFromLocalStorage();
    if (books.length > 0) {
      const display = [];
      for (const bookId of storedBook) {
        const book = books.find((book) => book.bookId === bookId);
        if (book) {
          display.push(book);
        }
      }
      setDisplayBooks(display);
    }
  }, [books]);

  // Wishlist books--------------
  useEffect(() => {
    const storedBook = getWishlistDataFromLocalStorage();
    if (books.length > 0) {
      const display = [];
      for (const bookId of storedBook) {
        const book = books.find((book) => book.bookId === bookId);
        if (book) {
          display.push(book);
        }
      }
      setWishListBooks(display);
    }
  }, [books]);

  // ==============================================================================
  const handleRating = () => {
    let data = [...displayBooks];
    if (data.length > 0) {
      let result = data.sort((a, b) => b.rating - a.rating);
      setDisplayBooks([...result]);
    }
    handleWishListRating();
  };

  const handleWishListRating = () => {
    let wishBook = [...wishListBooks];
    if (wishBook.length > 0) {
      let result = wishBook.sort((a, b) => b.rating - a.rating);
      setWishListBooks([...result]);
    }
  };

  // ==============================================================
  const handlePages = () => {
    let pagesData = [...displayBooks];
    if (pagesData.length > 0) {
      let result = pagesData.sort((a, b) => b.totalPages - a.totalPages);
      setDisplayBooks([...result]);
    }
    handleWishListPages();
  };

  const handleWishListPages = () => {
    let wishBook = [...wishListBooks];
    if (wishBook.length > 0) {
      let result = wishBook.sort((a, b) => b.totalPages - a.totalPages);
      setWishListBooks([...result]);
    }
  };

  const handleYear = () => {
    let pagesData = [...displayBooks];
    if (pagesData.length > 0) {
      let result = pagesData.sort(
        (a, b) => b.yearOfPublishing - a.yearOfPublishing
      );
      setDisplayBooks([...result]);
    }
    handleWishListYear();
  };

  const handleWishListYear = () => {
    let wishBook = [...wishListBooks];
    if (wishBook.length > 0) {
      let result = wishBook.sort((a, b) => b.totalPages - a.totalPages);
      setWishListBooks([...result]);
    }
  };
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center bg-[#F3F3F3] rounded-2xl">
        <h2 className="font-bold text-4xl p-6">Books</h2>
      </div>

      {/* sort button ------------------------*/}
      <div className="text-center mt-4">
        <details className={`dropdown `}>
          <summary className="m-1 btn text-white bg-[#23BE0A]">
            Sort By
            <IoIosArrowDown />
          </summary>
          <ul className="p-2 text-white shadow menu dropdown-content z-[1] bg-[#23BE0A]  rounded-box w-52">
            {/* -------------------------------------- */}

            <li onClick={handleRating}>
              <a>Rating</a>
            </li>

            {/* -------------------------------------- */}

            <li onClick={handlePages}>
              <a>Number of Pages</a>
            </li>
            <li onClick={handleYear}>
              <a>Publisher Year</a>
            </li>
          </ul>
        </details>
      </div>

      {/* tab list */}
      <div role="tablist" className="tabs tabs-lifted mt-10">
        <input
          type="radio"
          name="my_tabs_2"
          role="tab"
          className="tab"
          aria-label="Read Books"
          checked
        />

        <div
          role="tabpanel"
          className="tab-content bg-base-100 border-base-300 rounded-box p-6"
        >
          <div>
            <ReadBooks displayBooks={displayBooks} />
          </div>
        </div>

        <input
          type="radio"
          name="my_tabs_2"
          role="tab"
          className="tab"
          aria-label="Wishlist Books"
        />

        <div
          role="tabpanel"
          className="tab-content bg-base-100 border-base-300 rounded-box p-6"
        >
          <div>
            <WishList wishListBooks={wishListBooks} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListedBooks;
