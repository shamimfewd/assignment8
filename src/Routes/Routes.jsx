import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Root from "../Root/Root";
import ListedBooks from "../Pages/ListedBooks/ListedBooks";
import BookDetails from "../Pages/BookDetails/BookDetails";
import PagesToRead from "../Pages/PagesToRead/PagesToRead";
import ErrorPage from "../Pages/EroorPage/ErrorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage />,
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/listedbook",
        element: <ListedBooks />,
        loader: () => fetch("/booksData.json"),
      },
      {
        path: "/pagetoread",
        element: <PagesToRead />,
        loader: () => fetch("/booksData.json"),
      },
      {
        path: "/book/:bookId",
        element: <BookDetails />,
        loader: () => fetch("/booksData.json"),
      },
    ],
  },
]);
