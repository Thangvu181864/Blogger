import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="h-14 shadow fixed top-0 left-0 right-0 z-50 bg-white">
      <div className="h-full relative top-0 left-0 right-0 mx-[70px] px-4 flex justify-between">
        <div className="flex items-center">
          <Link to="/">
            <img
              className="w-[50px] h-[40px] object-cover"
              src="https://dev-to-uploads.s3.amazonaws.com/uploads/logos/resized_logo_UQww2soKuUsjaOGNB38o.png"
              alt="dev.to"
            />
          </Link>
          <div className="mx-4 h-10 w-[420px] flex border border-slate-300 rounded-md">
            <input
              className="w-full h-full py-2 pl-2 outline-none rounded-md"
              placeholder="Search..."
            />
            <button className="px-2 h-full hover:bg-[#ebecfc] rounded-md">
              <svg
                className="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                aria-hidden="true"
                focusable="false"
              >
                <path d="m18.031 16.617 4.283 4.282-1.415 1.415-4.282-4.283A8.96 8.96 0 0 1 11 20c-4.968 0-9-4.032-9-9s4.032-9 9-9 9 4.032 9 9a8.96 8.96 0 0 1-1.969 5.617zm-2.006-.742A6.977 6.977 0 0 0 18 11c0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7a6.977 6.977 0 0 0 4.875-1.975l.15-.15z"></path>
              </svg>
            </button>
          </div>
        </div>
        <div className="flex items-center justify-end">
          <Link to="/signin">
            <span className="px-4 py-2 mr-2 rounded-md hover:text-[#2f3ab2] hover:bg-[#ebecfc] hover:underline">
              Login
            </span>
          </Link>
          <Link to="/signup">
            <span className="px-4 py-2 mr-2 rounded-md border-[1px] border-[#3B49DF] text-[#3B49DF] font-semibold hover:text-white hover:bg-[#3B49DF] hover:underline">
              Create account
            </span>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
