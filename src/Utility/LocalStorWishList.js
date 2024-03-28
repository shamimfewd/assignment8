

import { toast } from "react-toastify";
import { getDataFromLocalStorage } from "./LocalStorage";


// get data for wishlist
const getWishlistDataFromLocalStorage = () => {
  const getData = localStorage.getItem("wishlist-books");
  if (getData) {
    return JSON.parse(getData);
  }
  return [];
};


// set data for wishlist
const setWishlistDataInLocalStorage = (bookId) => {
  const readData = getDataFromLocalStorage();
  const readDataExist = readData.find((dataId) => dataId === bookId);
  if (readDataExist) {
    toast("You have Already Read the Book");
  } else {
    const storedData = getWishlistDataFromLocalStorage();
    const exist = storedData.find((dataId) => dataId === bookId);
    if (exist) {
      toast("Already Exist on Wish List");
    } else {
      storedData.push(bookId);
      localStorage.setItem("wishlist-books", JSON.stringify(storedData));
      toast.success("Added The Book To Wish List");
    }
  }
};

export { getWishlistDataFromLocalStorage, setWishlistDataInLocalStorage };
