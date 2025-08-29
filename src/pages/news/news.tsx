import React, { useState, useEffect } from "react";
import "./style.css";
import useWindowDimensions from "../../scripts/useWindowsSpecs";
import { Card } from "../../components/Card/card";
import { Visor } from "../../components/Visor/visor";
import { VisorMovil } from "../../components/VisorMovil/visorMovil";
import { Noticia } from "../../types/noticia";
import { useNewsStore } from "../../hooks/useNewsStore";

interface VisorNewsProps {
  width: number;
  news: any[];
  currentIndex: number;
}

const VisorNews: React.FC<VisorNewsProps> = ({ width, news, currentIndex }) => {
  if (!news || news.length === 0) {
    return <div>No hay noticias disponibles</div>;
  }

  const current = news[currentIndex];

  if (width > 800) {
    return (
      <Visor
        _id={current._id}
        img={current.img}
        title={current.title}
        resume={current.resume}
      />
    );
  } else {
    return (
      <VisorMovil
        _id={current._id}
        img={current.img}
        title={current.title}
        resume={current.resume}
      />
    );
  }
};

export const News: React.FC = () => {
  const { width } = useWindowDimensions();
  const [currentIndex, setCurrentIndex] = useState(0);

  const { news, setNews, hasFetched, setHasFetched } = useNewsStore();

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch("http://localhost:4000/news");
        const data = await response.json();
        setNews(data);
        setHasFetched(true);
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    };
    if (!hasFetched) {
      fetchNews();
    }
  }, [hasFetched, setNews, setHasFetched]);

  const nextNews = () => {
    setCurrentIndex((prev) => (prev + 1) % news.length);
  };

  const prevNews = () => {
    setCurrentIndex((prev) => (prev === 0 ? news.length - 1 : prev - 1));
  };

  return (
    <div className="news">
      <Card>
        <div className="news-header">
          <h2> Noticias</h2>
          {/* <div className="admin">
            <button> Crear</button>
            <button>Actualizar</button>
            <button>Eliminar</button>
          </div> */}
        </div>
        <div className="visor-news">
          <div className="buttonBack" onClick={prevNews}>
            ◀
          </div>
          <VisorNews width={width} news={news} currentIndex={currentIndex} />
          <div className="buttonNext" onClick={nextNews}>
            ▶
          </div>
        </div>
      </Card>
    </div>
  );
};

export default News;
