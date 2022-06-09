import React, { useState } from "react";
import { Link } from "react-router-dom";

function SignUp() {
  const [file, setFile] = useState(null);
  const handleUploadFile = (e) => {
    setFile({
      name: e.target.files[0].name,
      path: URL.createObjectURL(e.target.files[0]),
    });
  };
  return (
    <div className="mx-[70px] p-4 flex justify-center">
      <div className="w-[640px] p-12 inline-block  shadow-[0_0_0_1px_rgba(23,23,23,0.1)] rounded-md bg-white">
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
            Create a New Account
          </p>
        </div>
        <div>
          <div className="grid grid-cols-2 gap-3">
            <label className="block mt-4">
              <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                Fullname
              </span>
              <input
                type="text"
                name="fullname"
                className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-[#3B49DF] focus:ring-[#3B49DF] block w-full rounded-md sm:text-sm focus:ring-1"
                placeholder="you@example.com"
              />
            </label>
            <label className="block mt-4">
              <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                Username
              </span>
              <input
                type="text"
                name="username"
                className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-[#3B49DF] focus:ring-[#3B49DF] block w-full rounded-md sm:text-sm focus:ring-1"
                placeholder="you@example.com"
              />
            </label>
          </div>
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
          <div className="mt-5 flex flex-col items-center">
            <input
              type="file"
              accept=".jpg,.png,.jpeg"
              className="hidden"
              id="inputFile"
              onChange={handleUploadFile}
            />
            <label
              className="w-32 h-32 mb-2 border-[1px] flex items-center"
              htmlFor="inputFile"
            >
              {file ? (
                <img
                  className="w-full h-full object-cover"
                  src={file.path}
                  alt={file.name}
                />
              ) : (
                <p className="p-1 text-center font-medium">
                  Please choose an avatar
                </p>
              )}
            </label>
          </div>
          <button className="w-full px-4 py-2 mt-4 rounded-md text-white text-center bg-[#3B49DF] font-semibold">
            Create account
          </button>
          <Link
            to="/signin"
            className="block px-4 py-2 mt-2 rounded-md text-[#3B49DF] text-center font-semibold"
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
