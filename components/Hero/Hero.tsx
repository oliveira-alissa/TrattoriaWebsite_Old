import classNames from "classnames";

import Image from "next/image";

import { BrowserWidth } from "../../pages";
import { FacebookSVG } from "../UI/FacebookSVG";
import { InstagramSVG } from "../UI/InstagramSVG";
import { YelpSVG } from "../UI/YelpSVG";
import { UberEatsSVG } from "../UI/UberEatsSVG";
import Title from "../../public/trattoria-assets/Artboard 5.png";

export const Hero = ({ isMobile, innerWidth }: BrowserWidth) => {
  const backgroundOne = classNames(
    "animate-slide bg-hero-pattern-1 relative flex flex-col items-center text-white bg-no-repeat bg-cover bg-center-top-y h-30rem lg:h-screen"
  );

  return (
    <section className={backgroundOne}>
      <div className="absolute top-0 left-0 flex flex-col items-center justify-center w-screen h-full bg-overLay">
        <div className="self-center text-center drop-shadow-xl ">
          <Image src={Title} alt="Trattoria Il Cafone" priority />
          <p className="text-xl tracking-wider md:text-3xl">
            Rustic Italian Cusine
          </p>
        </div>
        <div className="absolute bottom-0 self-end justify-between hidden pb-4 mr-8 w-96 md:flex">
          <FacebookSVG />
          <InstagramSVG />
          <YelpSVG />
          <UberEatsSVG />
        </div>
      </div>
    </section>
  );
};
