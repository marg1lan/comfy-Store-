import React from "react";
import { useNavigate } from "react-router-dom";
import img from "../../../public/user.webp";

function Register() {
  const navigate = useNavigate();
  function handleNavigate() {
    navigate("/");
  }
  return (
    <div className="flex h-auto w-full items-center justify-center bg-gray-900 bg-cover bg-no-repeat">
      <div className="rounded-xl bg-gray-800 bg-opacity-50 px-16 py-10 shadow-lg backdrop-blur-md max-sm:px-8">
        <div className="text-white">
          <div className="mb-8 flex flex-col items-center">
            <img className="mb-9" src={img} width="150" alt="" srcset="" />
            <h1 className="mb-2 text-2xl">Audiophile Register</h1>
            <span className="text-gray-300">Enter Register Details</span>
          </div>
          <form action="#">
            <div className="mb-4 text-lg">
              <h3 className=" text-sm pl-4 mb-3">Enter your user name:</h3>
              <input
                className="rounded-3xl border-none bg-yellow-400 bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none  backdrop-blur-30"
                type="text"
                name="name"
                placeholder="Enter your user name"
                required
              />
            </div>
            <div className="mb-4 text-lg">
              <h3 className=" text-sm pl-4 mb-3">Enter your email:</h3>
              <input
                className="rounded-3xl border-none bg-yellow-400 bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md"
                type="email"
                name="name"
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="mb-4 text-lg">
              <h3 className=" text-sm pl-4 mb-3">Enter your password:</h3>
              <input
                className="rounded-3xl border-none bg-yellow-400 bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md"
                type="Password"
                name="name"
                placeholder="**************"
                required
              />
            </div>
            <div className="mb-4 text-lg">
              <h3 className=" text-sm pl-4 mb-3">
                Enter your Repeat password:
              </h3>
              <input
                className="rounded-3xl border-none bg-yellow-400 bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md"
                type="Password"
                name="name"
                placeholder="**************"
                required
              />
            </div>
            <div className="mt-8 flex justify-center text-lg text-black">
              <button
                onClick={handleNavigate}
                type="submit"
                className="rounded-3xl btn bg-yellow-400 bg-opacity-50 px-10 py-2 text-white shadow-xl backdrop-blur-md transition-colors duration-300 hover:bg-yellow-600"
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
