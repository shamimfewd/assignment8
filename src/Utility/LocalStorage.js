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
    toast("Book Already Exist");
  } else {
    storedData.push(bookId);
    localStorage.setItem("read-books", JSON.stringify(storedData));
    toast.success("Added The Book On Book List");
  }
};

export { getDataFromLocalStorage, setDataInLocalStorage };
