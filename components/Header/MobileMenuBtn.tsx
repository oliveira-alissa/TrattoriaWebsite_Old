import { MouseEventHandler } from "react";

type MobileMenuProps = {
  isOpen: boolean;
  toggleMenu: MouseEventHandler<SVGSVGElement> | undefined;
};

export const MobileMenuBtn = (props: MobileMenuProps) => {
  if (props.isOpen) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="17"
        onClick={props.toggleMenu}
        className="z-50 cursor-pointer"
      >
        <path
          fill="white"
          fillRule="evenodd"
          d="M15.01.368l2.122 2.122-6.01 6.01 6.01 6.01-2.122 2.122L9 10.622l-6.01 6.01L.868 14.51 6.88 8.5.87 2.49 2.988.368 9 6.38 15.01.37z"
        ></path>
      </svg>
    );
  } else {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="17"
        onClick={props.toggleMenu}
        className="z-50 cursor-pointer"
      >
        <path
          fill="white"
          fillRule="evenodd"
          d="M0 0h20v3H0zm0 7h20v3H0zm0 7h20v3H0z"
        ></path>
      </svg>
    );
  }
};
