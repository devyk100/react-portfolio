import React from "react";

function NavBar() {
  return (
    <nav className="fixed w-[100vw] h-[8vh] flex flex-row items-center justify-center z-50 top-0 left-0">
      <ul className="w-[80vw] sm:w-[60vw] md:w-[50vw] lg:w-[35vw] xl:w-[22vw] gap-5 border-[0.5px] border-gray-600 flex flex-row items-center justify-center h-[5vh] rounded-full bg-transparent bg-blue-400  bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10 text-white text-sm font-bold">
        <li>Home</li>
        <li>Projects</li>
        <li>Experience</li>
        <li>About me</li>
      </ul>
    </nav>
  );
}

export default NavBar;
