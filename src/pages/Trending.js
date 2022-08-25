import { useEffect, useState } from "react";

import ContentContainer from "../components/ContentContainer/ContentContainer";

import axios from "axios";

const Trending = () => {
  const [content, setContent] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchTrending = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/trending/movie/week?api_key=${process.env.REACT_APP_API_KEY}`
    );

    setContent(data.results);
    setLoading(false);
  };

  useEffect(() => {
    fetchTrending();
  });

  return (
    <ContentContainer
      loading={loading}
      content={content}
      noLoadButton={true}
    ></ContentContainer>
  );
};
export default Trending;
