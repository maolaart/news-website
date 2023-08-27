import { getNews, searchNews } from "./api";
import { useEffect, useState } from "react";
import { FaCalendar, FaUser } from "react-icons/fa";

const App = () => {
  const [appleNews, setAppleNews] = useState([]);

  useEffect(() => {
    getNews().then((result) => {
      setAppleNews(result);
    });
  }, []);

  const search = async (q) => {
    if (q.length > 3) {
      const querry = await searchNews(q);
      setAppleNews(querry);
    }
    // console.log({querry:querry})
  };

  const formatDateTime = (dateTimeString) => {
    const options = {
      weekday: "long",
      day: "numeric",
      month: "long",
    };
    const dateTime = new Date(dateTimeString);
    const formattedDate = dateTime.toLocaleDateString("id-ID", options);
    const formattedTime = dateTime.toLocaleTimeString("id-ID", {
      hour: "2-digit",
      minute: "2-digit",
    });
    return `${formattedDate} ${formattedTime}`;
  };

  // console.log({ appleNews: appleNews });

  return (
    <>
      <div className="container flex">
        <div className="wrap">
          <nav className="flex">
            {/* header */}
            <div className="brand">
              <h1>
                NEWS <span>MAOLAART</span>
              </h1>
            </div>
            <input
              type="text"
              placeholder="cari..."
              onChange={({ target }) => search(target.value)}
            />
          </nav>

          {/* news */}
          <div className="news flex">
            <div className="head-news">
              <div className="head-wrap">
                <div className="news-background">
                  <a href={appleNews[0]?.url} target="_blank">
                    <img src={appleNews[0]?.urlToImage} alt="" />
                  </a>
                </div>
                <div className="news-container">
                  <div className="news-name">{appleNews[0]?.source.name}</div>
                  <div className="news-title">{appleNews[0]?.title}</div>
                  <div className="news-desc">{appleNews[0]?.description}</div>
                  <div className="news-info flex">
                    <div className="news-date">
                      <FaCalendar /> {formatDateTime(appleNews[0]?.publishedAt)}
                    </div>
                    <div className="news-author">
                      <FaUser /> {appleNews[0]?.author}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="following-news flex">
              <div className="line flex">
                {appleNews.slice(1, 3).map((appleNews, i) => (
                  <div className="card" key={i}>
                    <div className="news-background">
                      <a href={appleNews.url} target="_blank">
                        <img src={appleNews.urlToImage} alt="" />
                      </a>
                    </div>
                    <div className="news-container">
                      <div className="news-name">{appleNews.source.name}</div>
                      <div className="news-title">{appleNews.title}</div>
                      <div className="news-desc">{appleNews.description}</div>
                      <div className="news-info flex">
                        <div className="news-date">
                          <FaCalendar /> {formatDateTime(appleNews.publishedAt)}
                        </div>
                        <div className="news-author">
                          <FaUser /> {appleNews.author}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="line flex">
                {appleNews.slice(4, 6).map((appleNews, i) => (
                  <div className="card" key={i}>
                    <div className="news-background">
                      <a href={appleNews.url} target="_blank">
                        <img src={appleNews.urlToImage} alt="" />
                      </a>
                    </div>
                    <div className="news-container">
                      <div className="news-name">{appleNews.source.name}</div>
                      <div className="news-title">{appleNews.title}</div>
                      <div className="news-desc">{appleNews.description}</div>
                      <div className="news-info flex">
                        <div className="news-date">
                          <FaCalendar /> {formatDateTime(appleNews.publishedAt)}
                        </div>
                        <div className="news-author">
                          <FaUser /> {appleNews.author}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="news flex reverse">
            <div className="head-news">
              <div className="news-background">
                <a href={appleNews[12]?.url} target="_blank">
                  <img src={appleNews[12]?.urlToImage} alt="" />
                </a>
              </div>
              <div className="news-container">
                <div className="news-name">{appleNews[12]?.source.name}</div>
                <div className="news-title">{appleNews[12]?.title}</div>
                <div className="news-desc">{appleNews[12]?.description}</div>
                <div className="news-info flex">
                  <div className="news-date">
                    <FaCalendar /> {formatDateTime(appleNews[12]?.publishedAt)}
                  </div>
                  <div className="news-author">
                    <FaUser /> {appleNews[12]?.author}
                  </div>
                </div>
              </div>
            </div>
            <div className="following-news flex">
              <div className="line flex">
                {appleNews.slice(7, 9).map((appleNews, i) => (
                  <div className="card" key={i}>
                    <div className="news-background">
                      <a href={appleNews.url} target="_blank">
                        <img src={appleNews.urlToImage} alt="" />
                      </a>
                    </div>
                    <div className="news-container">
                      <div className="news-name">{appleNews.source.name}</div>
                      <div className="news-title">{appleNews.title}</div>
                      <div className="news-desc">{appleNews.description}</div>
                      <div className="news-info flex">
                        <div className="news-date">
                          <FaCalendar /> {formatDateTime(appleNews.publishedAt)}
                        </div>
                        <div className="news-author">
                          <FaUser /> {appleNews.author}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="line flex">
                {appleNews.slice(10, 12).map((appleNews, i) => (
                  <div className="card" key={i}>
                    <div className="news-background">
                      <a href={appleNews.url} target="_blank">
                        <img src={appleNews.urlToImage} alt="" />
                      </a>
                    </div>
                    <div className="news-container">
                      <div className="news-name">{appleNews.source.name}</div>
                      <div className="news-title">{appleNews.title}</div>
                      <div className="news-desc">{appleNews.description}</div>
                      <div className="news-info flex">
                        <div className="news-date">
                          <FaCalendar /> {formatDateTime(appleNews.publishedAt)}
                        </div>
                        <div className="news-author">
                          <FaUser /> {appleNews.author}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* recent */}
          <h3 className="flex">History</h3>
          <div className="recent-news flex">
            <div className="card">
              <div className="news-background">
                <a href={appleNews[12]?.url} target="_blank">
                  <img src={appleNews[12]?.urlToImage} alt="" />
                </a>
              </div>
              <div className="news-container">
                <div className="news-title">{appleNews[12]?.title}</div>
              </div>
            </div>
            <div className="card">
              <div className="news-background">
                <a href={appleNews[12]?.url} target="_blank">
                  <img src={appleNews[12]?.urlToImage} alt="" />
                </a>
              </div>
              <div className="news-container">
                <div className="news-title">{appleNews[12]?.title}</div>
              </div>
            </div>
            <div className="card">
              <div className="news-background">
                <a href={appleNews[12]?.url} target="_blank">
                  <img src={appleNews[12]?.urlToImage} alt="" />
                </a>
              </div>
              <div className="news-container">
                <div className="news-title">{appleNews[12]?.title}</div>
              </div>
            </div>
            <div className="card">
              <div className="news-background">
                <a href={appleNews[12]?.url} target="_blank">
                  <img src={appleNews[12]?.urlToImage} alt="" />
                </a>
              </div>
              <div className="news-container">
                <div className="news-title">{appleNews[12]?.title}</div>
              </div>
            </div>
           
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
