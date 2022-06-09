import React from "react";
import { Link } from "react-router-dom";

function SignUp() {
  return (
    <div className="h-full mx-[70px] p-4 flex justify-center items-center">
      <div className="w-[640px] p-12 inline-block shadow-[0_0_0_1px_rgba(23,23,23,0.1)] rounded-md bg-white">
        <div className="mb-4">
          <h2 className="font-bold text-3xl text-center">
            Welcome to DEV Community
          </h2>
          <p className="text-center">
            <Link className="text-[#2f3ab2] hover:underline" to="/">
              DEV Community
            </Link>
            &nbsp;is a community of 843,956 amazing developers
          </p>
          <p className="mt-2 text-center font-bold text-2xl">
            Log in using an Existing Account
          </p>
        </div>
        <div>
          <label className="block mt-4">
            <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
              Email
            </span>
            <input
              type="email"
              name="email"
              className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-[#3B49DF] focus:ring-[#3B49DF] block w-full rounded-md sm:text-sm focus:ring-1"
              placeholder="you@example.com"
            />
          </label>
          <label className="block mt-4">
            <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
              Password
            </span>
            <input
              type="password"
              name="password"
              className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-[#3B49DF] focus:ring-[#3B49DF] block w-full rounded-md sm:text-sm focus:ring-1"
              placeholder="you@example.com"
            />
          </label>

          <button className="w-full px-4 py-2 mt-4 rounded-md text-white text-center bg-[#3B49DF] font-semibold">
            Login
          </button>
          <Link
            to="/signup"
            className="block px-4 py-2 mt-2 rounded-md text-[#3B49DF] text-center font-semibold"
          >
            Create account
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
