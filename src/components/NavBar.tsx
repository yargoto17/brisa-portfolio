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

  return (
    <header className="relative h-20 w-full overflow-visible border-b-2 border-black bg-cream-nav">
      <div className="relative mx-auto flex h-full max-w-360 items-center px-28">
        <Link
          to="/"
          className="flex items-center gap-4"
          aria-label="Brisa Goto — Home"
        >
          <img src={sparkleLogo} alt="" className="h-13.75 w-14.25" />
          <span className="font-display text-[40px] leading-none text-black">
            Brisa Goto
          </span>
        </Link>

        <nav className="ml-auto flex items-center" aria-label="Primary">
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
      </div>

      <img
        src={navDividerLine}
        alt=""
        className="absolute bottom-0 left-0 h-0 w-full object-cover"
      />
    </header>
  );
}
