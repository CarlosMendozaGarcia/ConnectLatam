import React, { useState } from "react";
import "./style.css";
import { Banner } from "../Banner/banner";
import { NavBar } from "../NavBar/navBar";
import { AboutUs } from "../../pages/aboutUs/aboutUs";
import { News } from "../../pages/news/news";
import { Tutorials } from "../../pages/tutorials/tutorials";
import { Home } from "../../pages/home/home";

const pageComponents = {
  Home: <Home />,
  AboutUs: <AboutUs />,
  News: <News />,
  Tutorials: <Tutorials />,
};

export const Layout = () => {
  const [selectedPage, setSelectedPage] = useState("Home");

  return (
    <div className="layout-container">
      <NavBar onSelectPage={setSelectedPage} />
      <Banner>
        <main>{pageComponents[selectedPage] || <Home />}</main>
      </Banner>
    </div>
  );
};

