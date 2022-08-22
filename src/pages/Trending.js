import { useEffect, useState } from "react";

import ContentContainer from "../components/ContentContainer";

import axios from "axios";

const Trending = () => {
  const [content, setContent] = useState([]);

  const fetchTrending = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/trending/movie/week?api_key=${process.env.REACT_APP_API_KEY}`
    );

    setContent(data.results);
  };

  useEffect(() => {
    fetchTrending();
  }, []);

  return (
    <ContentContainer content={content} noLoadButton={true}></ContentContainer>
  );
};
export default Trending;
