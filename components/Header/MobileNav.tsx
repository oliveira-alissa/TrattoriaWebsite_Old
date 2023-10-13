import React from "react";
import { MouseEventHandler } from "react";
import { motion, AnimatePresence } from "framer-motion";

import classNames from "classnames";
import { NavItem } from "./NavItem";
import { FacebookSVG } from "../UI/FacebookSVG";
import { InstagramSVG } from "../UI/InstagramSVG";
import { YelpSVG } from "../UI/YelpSVG";
import { UberEatsSVG } from "../UI/UberEatsSVG";

type MobileNavProps = {
  isOpen: boolean;
  closeMenu: MouseEventHandler<HTMLLIElement> | undefined;
};

export const MobileNav = ({ isOpen, closeMenu }: MobileNavProps) => {
  let mobileMenuClass;

  if (isOpen) {
    mobileMenuClass = classNames(
      "block w-70vw px-2 absolute top-0 right-0 z-40"
    );
  } else {
    mobileMenuClass = classNames("hidden absolute");
  }

  const navBarVariants = {
    closed: { opacity: 0, x: 100 },
    open: { opacity: 1, x: 0 },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.nav
          aria-label="Site Navigation"
          role="navigation"
          className={mobileMenuClass}
          variants={navBarVariants}
          initial="closed"
          animate="open"
          transition={{ type: "spring", stiffness: 100 }}
          exit={{ opacity: 0, x: "100%" }}
        >
          <ul className="flex flex-col items-center py-2 rounded-lg px-14 justify-evenly bg-slate-300">
            <NavItem content="About" mobile closeMenu={closeMenu} />
            <NavItem content="Menus" mobile closeMenu={closeMenu} />
            {/* <NavItem content="PrivateEvents" mobile closeMenu={closeMenu} /> */}
            <NavItem content="Contact" mobile closeMenu={closeMenu} />
            <NavItem content="Gallery" mobile closeMenu={closeMenu} />
            <div className="flex">
              <FacebookSVG />
              <InstagramSVG />
              <YelpSVG />
              <UberEatsSVG />
            </div>
          </ul>
        </motion.nav>
      )}
    </AnimatePresence>
  );
};
