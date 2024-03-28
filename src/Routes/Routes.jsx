import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Root from "../Root/Root";
import ListedBooks from "../Pages/ListedBooks/ListedBooks";
import BookDetails from "../Pages/BookDetails/BookDetails";
import PagesToRead from "../Pages/PagesToRead/PagesToRead";
import ErrorPage from "../Pages/EroorPage/ErrorPage";
import Blogs from "../Pages/Blogs/Blogs";
import BlogDetails from "../Pages/Blogs/BlogDetails";
import BestSeller from "../Pages/BestSeller/BestSeller";

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
      {
        path: "/blogs",
        element: <Blogs />,
        loader: () => fetch("/blogsData.json"),
      },
      {
        path: "/blog/:id",
        element: <BlogDetails />,
        loader: () => fetch("/blogsData.json"),
      },
      {
        path: "/bestseller",
        element: <BestSeller />,
      },
    ],
  },
]);
