import  { Home } from "../../pages/home/home";
import  { AboutUs } from "../../pages/aboutUs/aboutUs";
import  { News } from "../../pages/news/news";
import  { Tutorials } from "../../pages/tutorials/tutorials";
import React, { useState } from "react";
import { NavBar } from "../../components/NavBar/navBar";
import { Banner } from "../../components/Banner/banner";

type PageKey = "Home" | "AboutUs" | "News" | "Tutorials";

const pageComponents: Record<PageKey, JSX.Element> = {
  Home: <Home />,
  AboutUs: <AboutUs />,
  News: <News />,
  Tutorials: <Tutorials />,
};

export const Layout: React.FC = () => {
  const [selectedPage, setSelectedPage] = useState<PageKey>("Home");

  return (
    <div className="layout-container">
      <NavBar onSelectPage={setSelectedPage} />
      <Banner>
        <main>{pageComponents[selectedPage]}</main>
      </Banner>
    </div>
  );
};

export default Layout;