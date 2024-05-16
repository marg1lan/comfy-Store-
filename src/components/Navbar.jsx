import React from "react";
import "./Navbar.css";
import avatar from "../images/image-avatar.png";
import kich4 from "../images/kich2.jpg";


function Navbar() {
  return (
    <div className="align-content">
      <div className="navbar border-b pb-8 bg-base-100">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl font-bold">sneakers</a>
        </div>
        <div className="links flex-1 mr-9 text-slate-500 pr-9">
          <a className="btn btn-ghost text-1xl">Collections</a>
          <a className="btn btn-ghost text-1xl">Men</a>
          <a className="btn btn-ghost text-1xl">Women</a>
          <a className="btn btn-ghost text-1xl">About</a>
          <a className="btn btn-ghost text-1xl">Contact</a>
        </div>
        <div className="flex-none">
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
              <div className="indicator">
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
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                <span className="bg-orange-500  text-slate-200 badge badge-sm indicator-item">1</span>
              </div>
            </div>
            <div
              tabIndex={0}
              className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow"
            >
              <div className="card-body">
                <span className="font-bold text-lg border-b pb-3">Cart</span>
                <span className="text-info">
                  <div className="cart">
                    <img width={50} height={50} src={kich4} alt="" />
                    <h5>Fall Limited Edition Sneakers.</h5>
                  </div>
                  <span className=" cursor-pointer text-red-500">Delete</span>
                </span>
                <div className="card-actions">
                  <button className="btn  hover:bg-orange-400 text-slate-200 bg-orange-600 hover:text-slate-950 btn-block">
                    Chekout
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img alt="Tailwind CSS Navbar component" src={avatar} />
              </div>
            </div>
            <div className="dropdown">
              <div
                tabIndex={0}
                className="dropdown-content z-[1] card card-compact w-64 p-2 shadow bg-primary text-primary-content"
              >
                <div className="card-body">
                  <h3 className=" pb-5 border-b card-title">Cart</h3>
                  <p>You Cart is empty...</p>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
