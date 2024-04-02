import { Routes, Route, useParams } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { ContactPage } from "../pages/ContactPage";
import { PostPage } from "../pages/PostPage";
import { useEffect, useState } from "react";
import { api } from "../services/api";
export const RoutesMain = () => {
  const [listNews, setListNews] = useState([]);
    const {id} = useParams()
  useEffect(() => {
    const loadNews = async () => {
      try {
        const { data } = await api.get(`/news/`);
        setListNews(data);
        // console.log(data);
      } catch (error) {
        console.error(error);
      }
    };
    loadNews();
  }, []);

  return (
    <Routes>
      <Route path="/" element={<HomePage listNews={listNews} />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/post/:id" element={<PostPage />} />
    </Routes>
  );
};
