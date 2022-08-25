import { useEffect, useState } from "react";

import ContentContainer from "../components/ContentContainer/ContentContainer";

import axios from "axios";

const Trending = () => {
  const [content, setContent] = useState([]);
  const [loading, setLoading] = useState(false);
  const [pageNumber, setPageNumber] = useState(1);

  const fetchUpcoming = async (pageNumber) => {
    setLoading(true);

    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=${pageNumber}`
    );

    setContent((prevState) =>
      pageNumber === 1 ? data.results : [...prevState, ...data.results]
    );

    setLoading(false);
  };

  useEffect(() => {
    fetchUpcoming(pageNumber);
  }, [pageNumber]);

  return (
    <ContentContainer
      setPageNumber={setPageNumber}
      content={content}
      loading={loading}
    ></ContentContainer>
  );
};
export default Trending;
