import { NewsCard } from "./NewsCard"
import style from "./style.module.scss"


export const NewsList = ({newsList}) => {
    return (
        <>
        <ul className={style.cardBox}>
        {newsList.map((news)=> <NewsCard key={news.id} cardList={news}/>)}
        </ul>
        </>
    )
}