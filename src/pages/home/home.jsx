import React from "react";
import "./style.css";
import { NavBar } from "../../components/NavBar/navBar.jsx";
import { Banner } from "../../components/Banner/banner.jsx";
import { Card } from "../../components/Card/card.jsx";
export const Home = () => {
  return (
    <div className="home">
      <Card>
        <div className="title">
          <h1>Bienvenidos a</h1>
          <h1>Connect Latam VT</h1>
        </div>
        <h2>Con cada voto creamos un nuevo destino</h2>
      </Card>
    </div>
  );
};
