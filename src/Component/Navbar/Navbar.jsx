import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";

const Navbar = () => {
  const { dark } = useContext(AuthContext);
  const links = (
    <>
      <NavLink
        to="/"
        className={({ isActive, isPending }) =>
          isPending ? "" : isActive ? "text-red-600" : ""
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/product"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "text-red-600" : ""
        }
      >
        Add Product
      </NavLink>
      <NavLink
        to="/cart"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "text-red-600" : ""
        }
      >
        My Cart
      </NavLink>
    </>
  );

  return (
    <div className={`${dark ? "bg-black text-white" : "bg-white text-black"}`}>
      <div className={`navbar px-5`}>
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
            </label>
            <ul
              tabIndex={0}
              className={`menu menu-sm dropdown-content space-y-3 mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 ${dark ? 'bg-black text-white' : 'bg-white text-black'}`}
            >
              {links}
            </ul>
          </div>
          <img
            className="h-16"
            src={dark ? "../assets/logo-1.png" : "../assets/logo.png"}
            alt=""
          />
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu space-x-3 text-lg font-semibold menu-horizontal px-1">
            {links}
          </ul>
        </div>
        <div className="navbar-end">
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className={`w-10 rounded-full border-4`}>
                <img src="/assets/user.jpg" />
              </div>
            </label>
            <ul
              tabIndex={0}
              className={`menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 ${dark ? 'text-white bg-black' : 'text-black bg-white'}`}
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
