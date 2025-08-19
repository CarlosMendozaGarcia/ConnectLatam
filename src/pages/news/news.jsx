import React from "react";
import "./style.css";
import { NavBar } from "../../components/NavBar/navBar.jsx";
import { Banner } from "../../components/Banner/banner.jsx";
import { Card } from "../../components/Card/card.jsx";
import { Visor } from "../../components/Visor/visor.jsx";
export const News = () => {
  // useState que carge los objetos que muestren las noticias
  return (
    <div className="news">
      <Card>
        <h2> Noticias</h2>
        <Visor />
      </Card>
    </div>
  );
};
