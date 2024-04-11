import React from "react";
import Link from "next/link"

const NavbarComponent = () => {
  return (
    <div className="navbar text-white w-[95%] z-30 fixed left-0 top-0">
      <div className="flex-1">
        <Link className="btn btn-ghost text-xl"  href="/">
          <img src="https://www.legend.com.kh/_ipx/s_117x44/legend-cinema-logo.png"></img>
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>Popular</a>
          </li>
          <li>
            <a>Romance</a>
          </li>
          <li>
            <a>Anime</a>
          </li>
        </ul>
      </div>
      <div className="form-control">
        <input
          type="text"
          placeholder="Type to search"
          className="input input-bordered"
        />
      </div>
    </div>
  );
};

export default NavbarComponent;
