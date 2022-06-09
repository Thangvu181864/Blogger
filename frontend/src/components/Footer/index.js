import React from "react";

function Footer() {
  return (
    <footer className="h-32 bg-[#E5E5E5] flex flex-shrink-0 items-center justify-center">
      <p className="text-center">
        DEV.from is a clone of&nbsp;
        <a href="https://dev.to/" className="text-[#2f3ab2] hover:underline">
          DEV.to
        </a>
        &nbsp; (A constructive and inclusive social network for software
        developers)
        <br />
        Made with love and&nbsp;
        <a
          href="https://github.com/Thangvu181864"
          className="text-[#2f3ab2] hover:underline"
        >
          React
        </a>
        .
      </p>
    </footer>
  );
}

export default Footer;
