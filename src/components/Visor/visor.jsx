import React from "react";
import "./style.css";

export const Visor = (Objs) => {
  //recibe el obj y establece el modelo // Ajusta el tamaño de la letra según el ancho de la ventana

  return (
    <div className="visor-desktop">
      <img src="src\assets\imgs\Enhypen.png" alt="Enhypen BoyBand" />
      <div className="gradient-visor-overlay">
        <h3>Enhypen</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
          porta eros a facilisis rutrum. Morbi ac pulvinar arcu. Curabitur et
          fringilla neque, ut pulvinar lacus. Donec elementum arcu quis enim
          auctor dapibus. Aenean dolor metus, vulputate quis leo id, efficitur
          dictum mauris.
        </p>
      </div>
    </div>
  );
};
