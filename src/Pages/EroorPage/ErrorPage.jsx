import { Link } from "react-router-dom";
import { HiArrowLongLeft } from "react-icons/hi2";

const ErrorPage = () => {
  return (
    <div className="flex justify-center items-center h-[100vh]">
      <div>
        <h1 className="font-bold text-4xl mb-4">Page Not Found</h1>
        <Link to={"/"} className="flex justify-center">
          <button className="btn bg-[#59C6D2] font-bold text-white ">
            <HiArrowLongLeft className="text-2xl"/> Go Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
