import { useEffect, useState } from "react";

import ContentContainer from "../components/ContentContainer/ContentContainer";

import axios from "axios";

const Series = () => {
  const [content, setContent] = useState([]);
  const [loading, setLoading] = useState(false);
  const [pageNumber, setPageNumber] = useState(1);

  const fetchTrending = async (pageNumber) => {
    setLoading(true);

    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=${pageNumber}`
    );

    setContent((prevState) => [...prevState, ...data.results]);
    setLoading(false);
  };

  useEffect(() => {
    fetchTrending(pageNumber);
  }, [pageNumber]);

  return (
    <ContentContainer
      setPageNumber={setPageNumber}
      content={content}
      loading={loading}
    ></ContentContainer>
  );
};
export default Series;
