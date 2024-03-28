import { toast } from "react-toastify";

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
  if (exist) {
    toast("Book Already Exist on Book List");
  } else {
    storedData.push(bookId);
    localStorage.setItem("read-books", JSON.stringify(storedData));
    toast.success("Book Added To Book List");
  }
};

export { getDataFromLocalStorage, setDataInLocalStorage };
