import { BrowserWidth } from "../../pages";
import { useState, useEffect } from "react";
import classnames from "classnames";

import { Logo } from "./Logo";
import { MobileMenuBtn } from "./MobileMenuBtn";
import { Nav } from "./Nav";
import { MobileNav } from "./MobileNav";

export const Header = ({ isMobile, innerWidth }: BrowserWidth) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [navBarScrolled, setNavBarScrolled] = useState<boolean>(false);

  const toggleMenuHandler = (): void => {
    setIsOpen((current) => !current);
  };
  const closeMenu = (): void => {
    setIsOpen(false);
  };

  const changeBackground = () => {
    if (window.scrollY >= 66) {
      setNavBarScrolled(true);
    } else {
      setNavBarScrolled(false);
    }
  };

  useEffect(() => {
    changeBackground();
    window.addEventListener("scroll", changeBackground);

    return () => {
      window.removeEventListener("scroll", changeBackground);
    };
  }, []);

  let headerClass;

  if (navBarScrolled) {
    headerClass = classnames(
      "transition-colors duration-1000 fixed top-0 z-50 flex items-center justify-between w-screen bg-header px-6"
    );
  } else {
    headerClass = classnames(
      "transition-colors duration-1000 fixed top-0 z-50 flex justify-between items-center w-screen px-6"
    );
  }

  if (isMobile) {
    return (
      <header className={headerClass}>
        <Logo />
        <MobileMenuBtn toggleMenu={toggleMenuHandler} isOpen={isOpen} />
        <MobileNav isOpen={isOpen} closeMenu={closeMenu} />
      </header>
    );
  } else {
    return (
      <header className={headerClass}>
        <Logo />
        <Nav />
      </header>
    );
  }
};
