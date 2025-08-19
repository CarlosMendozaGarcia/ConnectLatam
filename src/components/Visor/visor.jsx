import React from "react";
import "./style.css";

export const Visor = (Objs) => {
  //recibe el obj y establece el modelo // Ajusta el tamaño de la letra según el ancho de la ventana

  return (
    <div className="visor">
      <div className="buttonBack">boton</div>
      <div className="projector">
        <img src="src\assets\imgs\Enhypen.png" alt="Enhypen BoyBand" />
        <div className="gradient-visor-overlay">
          <h3>Enhypen</h3>
          <p /* style={{ fontSize: Sizeletter }} */>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            porta eros a facilisis rutrum. Morbi ac pulvinar arcu. Curabitur et
            fringilla neque, ut pulvinar lacus. Donec elementum arcu quis enim
            auctor dapibus. Aenean dolor metus, vulputate quis leo id, efficitur
            dictum mauris. Quisque ornare arcu vitae tincidunt sagittis. Proin a
            vehicula ante, sed feugiat dui. Quisque ut leo viverra, blandit
            lacus sit amet, blandit purus. Proin ac odio nec purus auctor
            maximus quis ac elit. Duis dignissim dolor a mauris cursus, a
            interdum ex feugiat. Nulla pellentesque condimentum erat, bibendum
            posuere turpis vehicula at.
          </p>
        </div>
      </div>
      <div className="buttonNext">boton</div>
    </div>
  );
};
