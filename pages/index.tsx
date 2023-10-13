import type { NextPage } from "next";
import Head from "next/head";
import { useState, useEffect } from "react";

import { Header } from "../components/Header/Header";
import { Hero } from "../components/Hero/Hero";
import { About } from "../components/About/About";
import { Menus } from "../components/Menu/Menus";
import { ContactForm } from "../components/PrivateEvents/ContactForm";
import { Gallery } from "../components/Gallery/Gallery";
import { Footer } from "../components/Footer/Footer";

export interface BrowserWidth {
  innerWidth: number;
  isMobile: boolean;
}

const Home: NextPage = () => {
  const [innerWidth, setInnerWidth] = useState<number>(0);
  const isMobile = innerWidth < 767;

  const changeWidth = () => setInnerWidth(window.innerWidth);

  useEffect(() => {
    changeWidth();

    window.addEventListener("resize", changeWidth);
    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  }, []);

  return (
    <div className="overflow-hidden">
      <Head>
        <title>Trattoria Il Cafone</title>
      </Head>
      <Header isMobile={isMobile} innerWidth={innerWidth} />
      <Hero isMobile={isMobile} innerWidth={innerWidth} />
      <About />
      <Menus />
      <ContactForm />
      <Gallery />
      <Footer />
    </div>
  );
};

export default Home;
