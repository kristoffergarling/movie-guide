import { useEffect, useState } from "react";
import axios from "axios";

import ContentContainer from "../components/ContentContainer";

const TopRated = () => {
  const [content, setContent] = useState([]);
  const [loading, setLoading] = useState(false);
  const [pageNumber, setPageNumber] = useState(1);

  const fetchTopRated = async (pageNumber) => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=${pageNumber}`
    );
    setContent((prevState) =>
      pageNumber === 1 ? data.results : [...prevState, ...data.results]
    );
  };

  useEffect(() => {
    setLoading(true);
    fetchTopRated(pageNumber);
    setLoading(false);
  }, [pageNumber]);

  return (
    <ContentContainer
      setPageNumber={setPageNumber}
      content={content}
      loading={loading}
    ></ContentContainer>
  );
};
export default TopRated;
