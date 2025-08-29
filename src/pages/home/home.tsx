import React from "react";
import "./style.css";
import { Card } from "../../components/Card/card";

export const Home: React.FC = () => {
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

export default Home;