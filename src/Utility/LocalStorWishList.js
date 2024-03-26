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
    storedData.push(bookId);
    localStorage.setItem("wishlist-books", JSON.stringify(storedData));
  }
};

export { getWishlistDataFromLocalStorage, setWishlistDataInLocalStorage };
