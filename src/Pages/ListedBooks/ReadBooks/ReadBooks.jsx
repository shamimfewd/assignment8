/* eslint-disable react/prop-types */

import Card from "../../../Components/Card";

const ReadBooks = ({ displayBooks }) => {
  return (
    <div>
      <h1 className="font-bold">read books: {displayBooks.length}</h1>
      {displayBooks.map((book, index) => (
        <Card key={index} book={book} />
      ))}
    </div>
  );
};

export default ReadBooks;
