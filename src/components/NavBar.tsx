import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import navTabHome from "../assets/images/nav-tab-home.png";
import navTabWork from "../assets/images/nav-tab-work.png";
import navTabAbout from "../assets/images/nav-tab-about.png";
import navTabContact from "../assets/images/nav-tab-contact.png";
import navDividerLine from "../assets/images/nav-divider-line.png";
import sparkleLogo from "../assets/images/nav-home-fun-button.png";
import navTabHomeActive from "../assets/images/nav-home-on.png";
import navTabWorkActive from "../assets/images/nav-work-on.png";
import navTabAboutActive from "../assets/images/nav-about-on.png";
import navTabContactActive from "../assets/images/nav-contact-on.png";

type NavItem = {
  label: string;
  path: string;
  tabImage: string;
  tabImageActive: string;
};

const NAV_ITEMS: NavItem[] = [
  {
    label: "Home",
    path: "/",
    tabImage: navTabHome,
    tabImageActive: navTabHomeActive,
  },
  {
    label: "Work",
    path: "/work",
    tabImage: navTabWork,
    tabImageActive: navTabWorkActive,
  },
  {
    label: "About",
    path: "/about",
    tabImage: navTabAbout,
    tabImageActive: navTabAboutActive,
  },
  {
    label: "Contact",
    path: "/contact",
    tabImage: navTabContact,
    tabImageActive: navTabContactActive,
  },
];

export default function NavBar() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="fixed md:relative top-0 left-0 right-0 z-50 h-20 w-full overflow-visible border-b-2 border-black bg-cream-nav">
        {" "}
        <div className="relative mx-auto flex h-full max-w-360 items-center px-6 md:px-28">
          <Link
            to="/"
            className="flex items-center gap-4"
            aria-label="Brisa Goto — Home"
          >
            <img src={sparkleLogo} alt="" className="h-13.75 w-14.25" />
            <span className="font-display text-[28px] md:text-[40px] leading-none text-black">
              Brisa Goto
            </span>
          </Link>

          {/* Desktop nav */}
          <nav
            className="ml-auto hidden md:flex items-center"
            aria-label="Primary"
          >
            {NAV_ITEMS.map((item, index) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  aria-current={isActive ? "page" : undefined}
                  className="relative flex h-17.5 w-45 items-center justify-center -ml-10 translate-y-1.5 first:ml-0"
                  style={{ zIndex: isActive ? 10 : NAV_ITEMS.length - index }}
                >
                  <img
                    src={isActive ? item.tabImageActive : item.tabImage}
                    alt=""
                    className="absolute inset-0 h-full w-full object-fill"
                  />
                  <span
                    className={`relative w-full text-center font-display text-[24px] leading-none ${
                      isActive ? "text-black" : "text-white"
                    }`}
                  >
                    {item.label}
                  </span>
                </Link>
              );
            })}
          </nav>

          {/* Hamburger button */}
          <button
            className="ml-auto flex md:hidden flex-col gap-1.5 p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span
              className={`block h-0.5 w-6 bg-black transition-all duration-300 ${
                menuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-black transition-all duration-300 ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-black transition-all duration-300 ${
                menuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </div>
        <img
          src={navDividerLine}
          alt=""
          className="absolute bottom-0 left-0 h-0 w-full object-cover"
        />
      </header>

      {/* Mobile dropdown*/}
      <div
        className={`md:hidden fixed top-20 left-0 w-full bg-cream border-b-2 border-black z-50 transition-all duration-300 ${
          menuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <nav className="flex flex-col">
          {NAV_ITEMS.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setMenuOpen(false)}
                className={`px-6 py-4 font-display text-[28px] border-b border-black/10 text-black transition-colors ${
                  isActive ? "bg-blue text-white" : "bg-transparent"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </>
  );
}
