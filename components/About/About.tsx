import { AboutInfo } from "./AboutInfo";

export const About = () => {
  return (
    <section
      id="About"
      className="flex flex-col p-8 pt-20 leading-8 text-center text-slate-700 bg-lightGrayTwo md:m-8 md:rounded-2xl md:flex-row md:justify-between md:px-18 md:text-lg"
    >
      <AboutInfo />
    </section>
  );
};
