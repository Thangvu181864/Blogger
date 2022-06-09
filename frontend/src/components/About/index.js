import React from "react";
import { Link } from "react-router-dom";

function About() {
  return (
    <div className="w-[240px] h-[320px] p-4 rounded-lg shadow-[0_0_0_1px_rgba(23,23,23,0.1)] bg-[#fafafa]">
      <p className="text-xl font-bold">
        <Link to="/" className="text-[#3B49DF]  hover:underline">
          DEV Community
        </Link>
        &nbsp; is a community of 743,999 amazing developers
      </p>
      <p className="text-sm">
        We're a place where coders share, stay up-to-date and grow their
        careers.
      </p>
      <div className="flex flex-col">
        <Link to="/signup">
          <span className="px-4 py-2 block mt-4 text-center rounded-md border-[1px] border-[#3B49DF] text-[#3B49DF] font-semibold hover:text-white hover:bg-[#3B49DF] hover:underline">
            Create account
          </span>
        </Link>
        <Link to="/signin">
          <span className="px-4 py-2 block mt-2 text-center rounded-md hover:text-[#2f3ab2] hover:bg-[#ebecfc] hover:underline">
            Login
          </span>
        </Link>
      </div>
    </div>
  );
}

export default About;
