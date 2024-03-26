import { useEffect, useState } from "react";
import Book from "../Book/Book";

const FeaturedBooks = () => {
  const [featuredBooks, setFeaturedBooks] = useState([]);
  useEffect(() => {
    fetch("booksData.json")
      .then((res) => res.json())
      .then((data) => setFeaturedBooks(data));
  }, []);
  return (
    <>
      <div className="text-center">
        <h2 className="font-bold text-4xl my-24">Books</h2>
      </div>
      <div className="grid lg:grid-cols-3 gap-6">
        {featuredBooks.map((book) => (
          <Book key={book.id} book={book} />
        ))}
      </div>
    </>
  );
};

export default FeaturedBooks;
