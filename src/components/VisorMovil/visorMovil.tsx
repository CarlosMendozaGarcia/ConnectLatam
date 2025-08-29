import React from "react";
import "./style.css";
import { Noticia }  from "../../types/noticia"

export const VisorMovil: React.FC<Noticia> = ({
  img,
  title = "Enhypen",
  resume = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent porta eros a facilisis rutrum. Morbi ac pulvinar arcu. Curabitur et fringilla neque, ut pulvinar lacus. Donec elementum arcu quis enim auctor dapibus. Aenean dolor metus, vulputate quis leo id, efficitur dictum mauris.",
}) => {
  const defaultImg = "src/assets/imgs/Enhypen.png";
  return (
    <div className="visor-movil">
      <img className="visor-movil-img" src={img || defaultImg} alt={title} />
      <div className="visor-info">
        <h3>{title}</h3>
        <p>{resume}</p>
      </div>
    </div>
  );
};

export default VisorMovil;