const getDataFromLocalStorage = () => {
  const getData = localStorage.getItem("read-books");
  if (getData) {
    return JSON.parse(getData);
  }
  return [];
};

const setDataInLocalStorage = (bookId) => {
  const storedData = getDataFromLocalStorage();
  const exist = storedData.find((dataId) => dataId === bookId);
  if (!exist) {
    storedData.push(bookId);
    localStorage.setItem("read-books", JSON.stringify(storedData));
  }
};

export { getDataFromLocalStorage, setDataInLocalStorage };
