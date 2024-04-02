import { DefaultTemplate } from "../../components/DefaultTamplete"
import { LatestNewsSection } from "../../components/LatestNewSection"
import style from "./style.module.scss"
import banner from "../../assets/banner.svg"
import { useEffect, useState } from "react"
import { NewsList } from "../../components/NewsList"

export const HomePage = ({listNews}) => {
const [latestNews, setLatestNews] = useState([])

useEffect(()=>{
    const newListLatestNews = listNews.slice(-2)
    setLatestNews(newListLatestNews)
    console.log(newListLatestNews)
},[listNews])

    return (
        <>
        <DefaultTemplate>
            <section>
                <div className={style.banner}>
                    <img src={banner} alt="uma pessoa escrevendo" />
                </div>
                <h1>Últimas Notícias</h1>
                <NewsList newsList={latestNews}/>
            </section>
        </DefaultTemplate>
        </>
    )
}