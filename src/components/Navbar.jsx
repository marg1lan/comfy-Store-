import { BsCart3, BsMoonFill, BsSunFill } from "react-icons/bs";
import { FaBarsStaggered } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import Navlinks from "./Navlinks";

function Navbar() {
  return (
    <nav className="bg-base-200">
      <div className="navbar align-content">
        <div className="navbar-start">
          <NavLink
            to="/"
            className="hidden lg:flex btn btn-primary text-3xl items-center"
          >
            C
          </NavLink>
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <FaBarsStaggered className="h-6 w-6" />
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-200 rounded-box w-52 "
            >
              <Navlinks />
            </ul>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
            <ul className="menu-horizontal menu li">
              <li>
              <Navlinks></Navlinks>
              </li>
            </ul>
        </div>
        <div className="navbar-end">
          <NavLink to="/cart" className="btn btn-circle btn-md ml-4">
            <div className="indicator">
              <BsCart3 className="h-6 w-6"></BsCart3>
              <span className="badge badge-sm  badge-primary indicator-item">
                10
              </span>
            </div>
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
