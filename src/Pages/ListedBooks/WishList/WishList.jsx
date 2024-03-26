import Card from "../../../Components/Card";

/* eslint-disable react/prop-types */
const WishList = ({ wishListBooks }) => {
  return (
    <div>
      <h1 className="font-bold">Wishlist Books: {wishListBooks.length}</h1>
      <div>
        {wishListBooks.map((book, index) => (
          <Card key={index} book={book} />
        ))}
      </div>
    </div>
  );
};

export default WishList;
