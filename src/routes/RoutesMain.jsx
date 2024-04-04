import { Routes, Route, useParams, useNavigate } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { ContactPage } from "../pages/ContactPage";
import { PostPage } from "../pages/PostPage";
import { useEffect, useState } from "react";
import { api } from "../services/api";

export const RoutesMain = () => {
  const [loading, setLoading] = useState(false)
  const [listNews, setListNews] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const loadNews = async () => {
      try {
        setLoading(true)
        const { data } = await api.get(`/news/`);
        setListNews(data);
        console.log()
      } catch (error) {
        console.error(error);
        navigate("/");
      }finally{
        setLoading(false)
      }
    };
    loadNews();
  }, []);

  return (
    <Routes>
      <Route path="/" element={<HomePage listNews={listNews} loading={loading} />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/post/:id" element={<PostPage news={listNews} />} />
    </Routes>
  );
};
