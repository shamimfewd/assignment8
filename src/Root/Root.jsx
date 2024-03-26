import { Outlet } from "react-router-dom";
import Nav from "../Components/Header/Nav";

const Root = () => {
  return (
    <div className="w-7xl">
      <Nav />
      <Outlet />
    </div>
  );
};

export default Root;
