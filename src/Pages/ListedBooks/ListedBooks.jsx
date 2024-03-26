import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import ReadBooks from "./ReadBooks/ReadBooks";
import { getDataFromLocalStorage } from "../../Utility/LocalStorage";
import WishList from "./WishList/WishList";
import { getWishlistDataFromLocalStorage } from "../../Utility/LocalStorWishList";

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

  return (
    <div className="max-w-7xl mx-auto">
      <div className="text-center bg-[#F3F3F3] rounded-2xl">
        <h2 className="font-bold text-4xl p-6">Books</h2>
      </div>
      {/* sort button */}
      <div className="text-center mt-4">
        <select className="select shadow-none border-none outline-none font-bold bg-[#23BE0A] text-white px-4 py-2 rounded-md">
          <option disabled selected>
            Select an option
          </option>
          <option value="han-solo">Han Solo</option>
          <option value="greedo">Greedo</option>
        </select>
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
