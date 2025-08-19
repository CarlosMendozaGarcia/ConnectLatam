import React from "react";
import "./style.css";
import { NavBar } from "../../components/NavBar/navBar.jsx";
import { Banner } from "../../components/Banner/banner.jsx";
import { Card } from "../../components/Card/card.jsx";

export const Tutorials = () => {
  const generalTutorials = [
    {
      title: "Duckad",
      link: "https://drive.google.com/file/d/1aNLgrHxGl3zRf5p74wwAceyUE7ORY-Wv/view?usp=sharing",
      img: "src/assets/imgs/Enhypen.png",
    },
    {
      title: "Duckad",
      link: "https://drive.google.com/file/d/1aNLgrHxGl3zRf5p74wwAceyUE7ORY-Wv/view?usp=sharing",
      img: "src/assets/imgs/Enhypen.png",
    },
    {
      title: "Duckad",
      link: "https://drive.google.com/file/d/1aNLgrHxGl3zRf5p74wwAceyUE7ORY-Wv/view?usp=sharing",
      img: "src/assets/imgs/Enhypen.png",
    },
    {
      title: "Duckad",
      link: "https://drive.google.com/file/d/1aNLgrHxGl3zRf5p74wwAceyUE7ORY-Wv/view?usp=sharing",
      img: "src/assets/imgs/Enhypen.png",
    },
    {
      title: "Duckad",
      link: "https://drive.google.com/file/d/1aNLgrHxGl3zRf5p74wwAceyUE7ORY-Wv/view?usp=sharing",
      img: "src/assets/imgs/Enhypen.png",
    },
    {
      title: "Duckad",
      link: "https://drive.google.com/file/d/1aNLgrHxGl3zRf5p74wwAceyUE7ORY-Wv/view?usp=sharing",
      img: "src/assets/imgs/Enhypen.png",
    },
  ];

  const streamingTutorials = [
    {
      title: "Duckad",
      link: "https://drive.google.com/file/d/1aNLgrHxGl3zRf5p74wwAceyUE7ORY-Wv/view?usp=sharing",
      img: "src/assets/imgs/Enhypen.png",
    },
    {
      title: "Duckad",
      link: "https://drive.google.com/file/d/1aNLgrHxGl3zRf5p74wwAceyUE7ORY-Wv/view?usp=sharing",
      img: "src/assets/imgs/Enhypen.png",
    },
    {
      title: "Duckad",
      link: "https://drive.google.com/file/d/1aNLgrHxGl3zRf5p74wwAceyUE7ORY-Wv/view?usp=sharing",
      img: "src/assets/imgs/Enhypen.png",
    },
    {
      title: "Duckad",
      link: "https://drive.google.com/file/d/1aNLgrHxGl3zRf5p74wwAceyUE7ORY-Wv/view?usp=sharing",
      img: "src/assets/imgs/Enhypen.png",
    },
    {
      title: "Duckad",
      link: "https://drive.google.com/file/d/1aNLgrHxGl3zRf5p74wwAceyUE7ORY-Wv/view?usp=sharing",
      img: "src/assets/imgs/Enhypen.png",
    },
    {
      title: "Duckad",
      link: "https://drive.google.com/file/d/1aNLgrHxGl3zRf5p74wwAceyUE7ORY-Wv/view?usp=sharing",
      img: "src/assets/imgs/Enhypen.png",
    },
  ];
  const comebackTutorials = [
    {
      title: "Duckad",
      link: "https://drive.google.com/file/d/1aNLgrHxGl3zRf5p74wwAceyUE7ORY-Wv/view?usp=sharing",
      img: "src/assets/imgs/Enhypen.png",
    },
    {
      title: "Duckad",
      link: "https://drive.google.com/file/d/1aNLgrHxGl3zRf5p74wwAceyUE7ORY-Wv/view?usp=sharing",
      img: "src/assets/imgs/Enhypen.png",
    },
    {
      title: "Duckad",
      link: "https://drive.google.com/file/d/1aNLgrHxGl3zRf5p74wwAceyUE7ORY-Wv/view?usp=sharing",
      img: "src/assets/imgs/Enhypen.png",
    },
    {
      title: "Duckad",
      link: "https://drive.google.com/file/d/1aNLgrHxGl3zRf5p74wwAceyUE7ORY-Wv/view?usp=sharing",
      img: "src/assets/imgs/Enhypen.png",
    },
    {
      title: "Duckad",
      link: "https://drive.google.com/file/d/1aNLgrHxGl3zRf5p74wwAceyUE7ORY-Wv/view?usp=sharing",
      img: "src/assets/imgs/Enhypen.png",
    },
    {
      title: "Duckad",
      link: "https://drive.google.com/file/d/1aNLgrHxGl3zRf5p74wwAceyUE7ORY-Wv/view?usp=sharing",
      img: "src/assets/imgs/Enhypen.png",
    },
  ];

  return (
    <div className="Tutorials">
      <Card>
        <h2>Tutoriales</h2>
        <div className="infoTutorial">
          <div className="General">
            <h3>General</h3>
            <div className="viewList">
              {generalTutorials.map((tutorial, i) => (
                <a
                  key={i}
                  href={tutorial.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={tutorial.img} alt={tutorial.title} />
                </a>
              ))}
            </div>
          </div>
          <div className="Streaming">
            <h3>Streaming</h3>
            <div className="viewList">
              {streamingTutorials.map((tutorial, i) => (
                <a
                  key={i}
                  href={tutorial.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={tutorial.img} alt={tutorial.title} />
                </a>
              ))}
            </div>
          </div>
          <div className="Comeback">
            <h3>Comeback</h3>
            <div className="viewList">
              {comebackTutorials.map((tutorial, i) => (
                <a
                  key={i}
                  href={tutorial.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={tutorial.img} alt={tutorial.title} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};
