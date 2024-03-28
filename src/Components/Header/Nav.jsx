import { NavLink, Link } from "react-router-dom";
import "./Header.css";

const Nav = () => {
  const activeLink =
    "bg-transparent text-green-500  border border-2 hover:text-white hover:bg-green-500 border-green-500";
  const normalLink = "";
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <NavLink
                  to={"/"}
                  className={({ isActive }) =>
                    isActive ? activeLink : normalLink
                  }
                >
                  Home
                </NavLink>
              </li>

              <li>
                <NavLink
                  to={"/listedbook"}
                  className={({ isActive }) =>
                    isActive ? activeLink : normalLink
                  }
                >
                  Listed Books
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/pagetoread"}
                  className={({ isActive }) =>
                    isActive ? activeLink : normalLink
                  }
                >
                  Page to Read
                </NavLink>
              </li>

              <li>
                <NavLink
                  to={"/blogs"}
                  className={({ isActive }) =>
                    isActive ? activeLink : normalLink
                  }
                >
                  Blogs
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/bestseller"}
                  className={({ isActive }) =>
                    isActive ? activeLink : normalLink
                  }
                >
                  Best Seller
                </NavLink>
              </li>
            </ul>
          </div>
          <Link
            to={"/"}
            className="btn btn-ghost text-xl font-bold text-[#23BE0A]"
          >
            NovelNest
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <NavLink
                to={"/"}
                className={({ isActive }) =>
                  isActive ? activeLink : normalLink
                }
              >
                Home
              </NavLink>
            </li>

            <li>
              <NavLink
                to={"/listedbook"}
                className={({ isActive }) =>
                  isActive ? activeLink : normalLink
                }
              >
                Listed Books
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/pagetoread"}
                className={({ isActive }) =>
                  isActive ? activeLink : normalLink
                }
              >
                Page to Read
              </NavLink>
            </li>

            <li>
              <NavLink
                to={"/blogs"}
                className={({ isActive }) =>
                  isActive ? activeLink : normalLink
                }
              >
                Blogs
              </NavLink>
            </li>

            <li>
              <NavLink
                to={"/bestseller"}
                className={({ isActive }) =>
                  isActive ? activeLink : normalLink
                }
              >
                Best Seller
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn mr-2 bg-[#23BE0A] text-white">Sign In</a>
          <a className="btn bg-[#59C6D2] text-white">Sing Up</a>
        </div>
      </div>
    </div>
  );
};

export default Nav;
