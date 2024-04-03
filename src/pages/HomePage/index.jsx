import { DefaultTemplate } from "../../components/DefaultTamplete";
import { LatestNewsSection } from "../../components/LatestNewSection";
import style from "./style.module.scss";
import banner from "../../assets/banner.svg";
import { useEffect, useState } from "react";
import { NewsList } from "../../components/NewsList";

export const HomePage = ({ listNews, loading }) => {
  const [latestNews, setLatestNews] = useState([]);

  useEffect(() => {
    const newListLatestNews = listNews.slice(-2);
    setLatestNews(newListLatestNews);
  }, [listNews]);

  return (
    <>
      <DefaultTemplate>
        <section className={style.homePage}>
          <div className={style.banner}>
            <img src={banner} alt="uma pessoa escrevendo" />
          </div>
          {loading ? (
            <h2>Carregando...</h2>
          ) : (
            <div className={style.latestNews}>
              <h1>Últimas Notícias</h1>
              <NewsList newsList={latestNews} />
            </div>
          )}
        </section>
      </DefaultTemplate>
    </>
  );
};
