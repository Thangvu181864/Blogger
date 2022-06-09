import React from "react";
import { Link } from "react-router-dom";

function SliderBar() {
  return (
    <div className="my-4 ">
      <ul className="w-[240px]">
        <li className="px-4 py-2 rounded-md hover:bg-[#e2e3f3] hover:underline hover:text-[#2f3ab2]">
          <Link to="/">
            <span className="flex">
              <svg
                className="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 44 44"
              >
                <path
                  fill="#A0041E"
                  d="M13.344 18.702h-2a.5.5 0 01-.5-.5v-7a.5.5 0 01.5-.5h2a.5.5 0 01.5.5v7a.5.5 0 01-.5.5z"
                ></path>
                <path fill="#FFE8B6" d="M9 20L22 7l13 13v17H9z"></path>
                <path fill="#FFCC4D" d="M22 20h1v16h-1z"></path>
                <path
                  fill="#66757F"
                  d="M35 21a.997.997 0 01-.707-.293L22 8.414 9.707 20.707a1 1 0 11-1.414-1.414l13-13a.999.999 0 011.414 0l13 13A.999.999 0 0135 21z"
                ></path>
                <path
                  fill="#66757F"
                  d="M22 21a.999.999 0 01-.707-1.707l6.5-6.5a1 1 0 111.414 1.414l-6.5 6.5A.997.997 0 0122 21z"
                ></path>
                <path fill="#C1694F" d="M14 30h4v6h-4z"></path>
                <path
                  fill="#55ACEE"
                  d="M14 21h4v4h-4zm12.5 0h4v4h-4zm0 9h4v4h-4z"
                ></path>
                <path
                  fill="#5C913B"
                  d="M37.5 37.5A1.5 1.5 0 0136 39H8a1.5 1.5 0 010-3h28a1.5 1.5 0 011.5 1.5z"
                ></path>
              </svg>
              Home
            </span>
          </Link>
        </li>
        <li className="px-4 py-2 rounded-md hover:bg-[#e2e3f3] hover:underline hover:text-[#2f3ab2]">
          <Link to="/tags">
            <span className="flex">
              <svg
                className="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 44 44"
              >
                <path
                  fill="#FFD983"
                  d="M36.017 24.181L21.345 9.746C20.687 9.087 19.823 9 18.96 9H8.883C7.029 9 6 10.029 6 11.883v10.082c0 .861.089 1.723.746 2.38L21.3 39.017a3.287 3.287 0 004.688 0l10.059-10.088c1.31-1.312 1.28-3.438-.03-4.748zm-23.596-8.76a1.497 1.497 0 11-2.118-2.117 1.497 1.497 0 012.118 2.117z"
                ></path>
                <path
                  fill="#D99E82"
                  d="M13.952 11.772a3.66 3.66 0 00-5.179 0 3.663 3.663 0 105.18 5.18 3.664 3.664 0 00-.001-5.18zm-1.53 3.65a1.499 1.499 0 11-2.119-2.12 1.499 1.499 0 012.119 2.12z"
                ></path>
                <path
                  fill="#C1694F"
                  d="M12.507 14.501a1 1 0 11-1.415-1.414l8.485-8.485a1 1 0 111.415 1.414l-8.485 8.485z"
                ></path>
              </svg>
              Tags
            </span>
          </Link>
        </li>
        <li className="px-4 py-2 rounded-md hover:bg-[#e2e3f3] hover:underline hover:text-[#2f3ab2]">
          <Link to="/faq">
            <span className="flex">
              <svg
                className="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 44 44"
              >
                <path
                  fill="#FFD983"
                  d="M33 15.06c0 6.439-5 7.439-5 13.44 0 3.098-3.123 3.359-5.5 3.359-2.053 0-6.586-.779-6.586-3.361C15.914 22.5 11 21.5 11 15.06c0-6.031 5.285-10.92 11.083-10.92C27.883 4.14 33 9.029 33 15.06z"
                ></path>
                <path
                  fill="#CCD6DD"
                  d="M26.167 36.5c0 .828-2.234 2.5-4.167 2.5-1.933 0-4.167-1.672-4.167-2.5 0-.828 2.233-.5 4.167-.5 1.933 0 4.167-.328 4.167.5z"
                ></path>
                <path
                  fill="#FFCC4D"
                  d="M26.707 14.293a.999.999 0 00-1.414 0L22 17.586l-3.293-3.293a1 1 0 10-1.414 1.414L21 19.414V30a1 1 0 102 0V19.414l3.707-3.707a.999.999 0 000-1.414z"
                ></path>
                <path
                  fill="#99AAB5"
                  d="M28 35a2 2 0 01-2 2h-8a2 2 0 01-2-2v-6h12v6z"
                ></path>
                <path
                  fill="#CCD6DD"
                  d="M15.999 36a1 1 0 01-.163-1.986l12-2a.994.994 0 011.15.822.999.999 0 01-.822 1.15l-12 2a.927.927 0 01-.165.014zm0-4a1 1 0 01-.163-1.986l12-2a.995.995 0 011.15.822.999.999 0 01-.822 1.15l-12 2a.927.927 0 01-.165.014z"
                ></path>
              </svg>
              FAQ
            </span>
          </Link>
        </li>
        <li className="px-4 py-2 rounded-md hover:bg-[#e2e3f3] hover:underline hover:text-[#2f3ab2]">
          <Link to="/about">
            <span className="flex">
              <svg
                className="w-6 h-6"
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 448 512"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M120.12 208.29c-3.88-2.9-7.77-4.35-11.65-4.35H91.03v104.47h17.45c3.88 0 7.77-1.45 11.65-4.35 3.88-2.9 5.82-7.25 5.82-13.06v-69.65c-.01-5.8-1.96-10.16-5.83-13.06zM404.1 32H43.9C19.7 32 .06 51.59 0 75.8v360.4C.06 460.41 19.7 480 43.9 480h360.2c24.21 0 43.84-19.59 43.9-43.8V75.8c-.06-24.21-19.7-43.8-43.9-43.8zM154.2 291.19c0 18.81-11.61 47.31-48.36 47.25h-46.4V172.98h47.38c35.44 0 47.36 28.46 47.37 47.28l.01 70.93zm100.68-88.66H201.6v38.42h32.57v29.57H201.6v38.41h53.29v29.57h-62.18c-11.16.29-20.44-8.53-20.72-19.69V193.7c-.27-11.15 8.56-20.41 19.71-20.69h63.19l-.01 29.52zm103.64 115.29c-13.2 30.75-36.85 24.63-47.44 0l-38.53-144.8h32.57l29.71 113.72 29.57-113.72h32.58l-38.46 144.8z"></path>
              </svg>
              About
            </span>
          </Link>
        </li>
        <li className="px-4 py-2 rounded-md hover:bg-[#e2e3f3] hover:underline hover:text-[#2f3ab2]">
          <Link to="/contact">
            <span className="flex">
              <svg
                className="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 44 44"
              >
                <path
                  fill="#FFAC33"
                  d="M38.724 33.656c-1.239-.01-1.241 1.205-1.241 1.205H22.5c-5.246 0-9.5-4.254-9.5-9.5s4.254-9.5 9.5-9.5 9.5 4.254 9.5 9.5c0 3.062-1.6 5.897-3.852 7.633h5.434C35.022 30.849 36 28.139 36 25.361c0-7.456-6.045-13.5-13.5-13.5-7.456 0-13.5 6.044-13.5 13.5 0 7.455 6.044 13.5 13.5 13.5h14.982s-.003 1.127 1.241 1.139c1.238.012 1.228-1.245 1.228-1.245l.014-3.821s.001-1.267-1.241-1.278zM9 18.26a16.047 16.047 0 014-4.739V13c0-5 5-7 5-8s-1-1-1-1H5C4 4 4 5 4 5c0 1 5 3.333 5 7.69v5.57z"
                ></path>
                <path
                  fill="#BE1931"
                  d="M17.091 33.166a9.487 9.487 0 01-4.045-8.72l-3.977-.461c-.046.452-.069.911-.069 1.376 0 4.573 2.28 8.608 5.76 11.051l2.331-3.246z"
                ></path>
                <path
                  fill="#BE1931"
                  d="M10 29.924s-5.188-.812-5 1 5-1 5-1zm0 .312s-4.125 2.688-2.938 3.75S10 30.236 10 30.236z"
                ></path>
              </svg>
              Contact
            </span>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default SliderBar;
