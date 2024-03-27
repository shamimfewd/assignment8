import { toast } from "react-toastify";

const getWishlistDataFromLocalStorage = () => {
  const getData = localStorage.getItem("wishlist-books");
  if (getData) {
    return JSON.parse(getData);
  }
  return [];
};

const setWishlistDataInLocalStorage = (bookId) => {
  const storedData = getWishlistDataFromLocalStorage();
  const exist = storedData.find((dataId) => dataId === bookId);
  if (!exist) {
    toast("Already Exist");
  } else {
    storedData.push(bookId);
    localStorage.setItem("wishlist-books", JSON.stringify(storedData));
    toast.success("Added The Book On Wish List");
  }
};

export { getWishlistDataFromLocalStorage, setWishlistDataInLocalStorage };
