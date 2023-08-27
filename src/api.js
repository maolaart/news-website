import axios from "axios";

const apiKey = "438015d12c0a4c98a52d5f26fbd19c0d";
const baseURL = "https://newsapi.org/v2";

export const getNews = async () => {
  const news = await axios.get(
    `${baseURL}/everything?q=apple&from=2023-08-24&to=2023-08-26&sortBy=popularity&apiKey=${apiKey}`
  );
  return news.data.articles;
};

export const searchNews = async (q) => {
    const search = await axios.get(`${baseURL}/everything?q=${q}&apiKey=${apiKey}`);
    return search.data.articles;
};
