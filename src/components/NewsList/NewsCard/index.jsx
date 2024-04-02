import { Link, useParams } from "react-router-dom";

export const NewsCard = ({ cardList }) => {

    const {id} =  useParams()

  return (
    <>
      <li >
        <p>{cardList.title}</p>
        <Link to={`/post/${cardList.id}`}>
        Leia Mais
        </Link>
      </li>
    </>
  );
};
