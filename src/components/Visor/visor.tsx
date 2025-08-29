import React from "react";
import "./style.css";
import {Noticia} from "../../types/noticia"
export const Visor: React.FC<Noticia> = ({
  img,
  title = "Enhypen",
  resume = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent porta eros a facilisis rutrum. Morbi ac pulvinar arcu. Curabitur et fringilla neque, ut pulvinar lacus. Donec elementum arcu quis enim auctor dapibus. Aenean dolor metus, vulputate quis leo id, efficitur dictum mauris.",
}) => {
  const defaultImg = "src/assets/imgs/Enhypen.png";
  return (
    <div className="visor-desktop">
      <img className="visor-desktop-img" src={img || defaultImg} />
      <div className="gradient-visor-overlay">
        <div className="info">
          <h3>{title}</h3>
          <p>{resume}</p>
        </div>
      </div>
    </div>
  );
};

export default Visor;
