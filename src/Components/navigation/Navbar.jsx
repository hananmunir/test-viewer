import React from "react";

export default function Navbar({ openNav, closeNav, setModel }) {
  return (
    <div id="content" className="relative z-50">
      <nav
        id="mySidenav"
        className="sidenav h-full w-0 fixed z-10 top-0 left-0 bg-[#111] overflow-x-hidden transition-all duration-500 pt-16"
      >
        <a
          href="javascript:void(0)"
          className="closebtn absolute top-0 right-6 text-3xl ml-12 text-white cursor-pointer"
          onClick={closeNav}
        >
          &times;
        </a>
        <a
          className="ar-object block py-2 pl-8 text-2xl text-gray-500 hover:text-white transition-all"
          id="1"
          href="#"
          onClick={() => setModel(1)}
        >
          Model 1
        </a>
        <a
          className="ar-object block py-2 pl-8 text-2xl text-gray-500 hover:text-white transition-all"
          id="2"
          href="#"
          onClick={() => setModel(2)}
        >
          Model 2
        </a>
        <a
          className="ar-object block py-2 pl-8 text-2xl text-gray-500 hover:text-white transition-all"
          id="3"
          href="#"
          onClick={() => setModel(3)}
        >
          Model 3
        </a>
      </nav>
      <span
        className="text-2xl cursor-pointer absolute"
        style={{ top: "15px", left: "10px" }}
        onClick={openNav}
      >
        &#9776; select models
      </span>
      <button
        type="button"
        id="place-button"
        className="absolute bottom-5 left-1/2 transform -translate-x-1/2 w-24 h-9 hidden bg-blue-500 text-white rounded"
      >
        PLACE
      </button>
    </div>
  );
}
