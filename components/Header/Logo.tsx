import LogoImg from "../../public/trattoria-assets/Artboard 6.png";
import Image from "next/image";

export const Logo = () => {
  return <Image src={LogoImg} alt="Logo" width={60} height={60} priority />;
};
