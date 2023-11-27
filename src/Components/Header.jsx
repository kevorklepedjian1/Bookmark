import React, { useState } from "react";
import Logo from "../images/logo-bookmark.svg";
import LogoLight from "../images/logo-bookmark.svg";
import MenuIcon from "../images/icon-hamburger.svg";
import CloseMenuIcon from "../images/icon-close.svg";
import FacebookIcon from "../images/icon-facebook.svg";
import TwitterIcon from "../images/icon-twitter.svg";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
  };

  const openMenu = () => {
    setIsOpen(true);
  };

  return (
    <>
      <header className="flex items-center justify-between p-8 max-w-7xl mx-auto">
        <div>
          <img src={Logo} alt="Bookmark"  className={`lg:block ${isOpen ? "hidden" : "open"}`}/>
        </div>

        <nav className={`lg:block ${isOpen ? "open" : "hidden"}`}>
          <div>
            <div className="flex items-center justify-between lg:hidden">
              <img src={LogoLight} alt="" />

              <button onClick={closeMenu}>
                <img src={CloseMenuIcon} alt="" />
              </button>
            </div>

            <ul className="flex flex-col text-center mt-10 lg:mt-0 lg:text-left lg:flex-row lg:items-center lg:gap-6 ">
              <NavItem text="Features" />
              <NavItem text="Pricing" />
              <NavItem text="Contact" />
              <li className="border-t border-slate-400 py-4 lg:border-transparent lg:py-0">
                <button className="lg:btn-red lg:bg-red-400 text-white py-2 px-4 rounded shadow-lg hover:opacity-75 lg:text-xs uppercase tracking-widest border-2 lg:border-red-400 lg:hover:bg-transparent lg:hover:text-black transition-all duration-200 w-full">
                  Login
                </button>
              </li>
            </ul>
          </div>

          <ul className="flex items-center justify-center gap-6 lg:hidden">
            <li>
              <img src={FacebookIcon} alt="" />
            </li>
            <li>
              <img src={TwitterIcon} alt="" />
            </li>
          </ul>
        </nav>

        <div className="lg:hidden">
          <button onClick={openMenu}>
            <img src={MenuIcon} alt="" />
          </button>
        </div>
      </header>
    </>
  );
}

// Extracted NavItem component for better readability
const NavItem = ({ text }) => {
  return (
    <li className="border-t border-slate-400 py-4 lg:border-transparent lg:py-0">
      <button className="uppercase lg:text-x text-white lg:text-black tracking-widest hover:text-red-400 ">
        {text}
      </button>
    </li>
  );
};
