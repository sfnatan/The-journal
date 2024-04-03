import { useParams } from "react-router-dom";
import { DefaultTemplate } from "../../components/DefaultTamplete";
import style from "./style.module.scss";
import banner from "../../assets/banner.svg";
import { NewsList } from "../../components/NewsList";
import { useEffect, useState } from "react";

export const PostPage = ({ news }) => {
  const [currentNews, setCurrenttNews] = useState([]);
  const { id } = useParams();

  const newsActual = news[id - 1];

  useEffect(() => {
    const firstNews = news.slice(0, 2)
    setCurrenttNews(firstNews)
    console.log(firstNews)
  }, [news]);
  return (
    <>
      <DefaultTemplate>
        <div>
          <img src={banner} alt="" />
        </div>
        <div className={style.actualNews}>
          <h1>{newsActual.title}</h1>
          <h3>{newsActual.author}</h3>
          <p>{newsActual.content}</p>
        </div>
        <div className={style.latestNews}>
          <h1>Confira Também</h1>
          <NewsList newsList={currentNews} />
        </div>
      </DefaultTemplate>
    </>
  );
};
