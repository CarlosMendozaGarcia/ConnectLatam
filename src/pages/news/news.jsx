import React from "react";
import "./style.css";
import { useState, useEffect } from "react";
import useWindowDimensions from "../../scripts/useWindowsSpecs";
import { NavBar } from "../../components/NavBar/navBar.jsx";
import { Banner } from "../../components/Banner/banner.jsx";
import { Card } from "../../components/Card/card.jsx";
import { Visor } from "../../components/Visor/visor.jsx";
import { VisorMovil } from "../../components/VisorMovil/visorMovil.jsx";

export const News = () => {
  // useState que carge los objetos que muestren las noticias
  const { height, width } = useWindowDimensions();
  
  function VisorNews ({width}){
    if (width > 800) {
      return (
          <Visor/>
      );
    } else {
      return (
          <VisorMovil />
      );
    }
  }

  return (
    <div className="news">
      <Card>
        <h2> Noticias</h2>
        <div className="visor-news">
          <div className="buttonBack">boton</div>
          <VisorNews width={width}/>
          <div className="buttonNext">boton</div>
        </div>
      </Card>
    </div>
  );
};
