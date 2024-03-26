import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Root from "../Root/Root";
import ListedBooks from "../Pages/ListedBooks/ListedBooks";
import PageToRead from "../Pages/PageToRead/PageToRead";
import BookDetails from "../Pages/BookDetails/BookDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <h1>error page</h1>,
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/listedbook",
        element: <ListedBooks />,
      },
      {
        path: "/pagetoread",
        element: <PageToRead />,
      },
      {
        path: "/book/:bookId",
        element: <BookDetails />,
        loader: ()=> fetch('booksData.json')
      },
    ],
  },
]);
