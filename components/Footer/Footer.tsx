import Image from "next/image";
import LogoImg from "../../public/trattoria-assets/Artboard 4.png";
import { NavItem } from "../Header/NavItem";
import { FacebookSVG } from "../UI/FacebookSVG";

import { InstagramSVG } from "../UI/InstagramSVG";
import { UberEatsSVG } from "../UI/UberEatsSVG";
import { YelpSVG } from "../UI/YelpSVG";

export const Footer = () => {
  return (
    <footer className="flex flex-col bg-header">
      <div className="mx-auto">
        <Image
          src={LogoImg}
          width={350}
          height={175}
          className="self-center"
          alt="Logo"
          priority
        />
      </div>
      <nav className="self-center ">
        <ul className="flex flex-col mx-auto text-center sm:flex-row sm:justify-evenly">
          <NavItem content="About" mobile />
          <NavItem content="Menus" mobile />
          <NavItem content="Contact" mobile />
          <NavItem content="Gallery" mobile />
        </ul>
        <div className="flex items-center justify-between pt-4 w-72 sm:flex-row sm:w-50vw sm:justify-between sm:mx-auto">
          <FacebookSVG />
          <InstagramSVG />
          <YelpSVG />
          <UberEatsSVG />
        </div>
      </nav>
    </footer>
  );
};
