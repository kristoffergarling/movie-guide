import { useEffect, useState } from "react";
import axios from "axios";

import ContentContainer from "../components/ContentContainer/ContentContainer";

const Search = ({ searchInput }) => {
  const [content, setContent] = useState([]);
  const [loading, setLoading] = useState(true);
  const [pageNumber, setPageNumber] = useState(1);

  const fetchSearch = async () => {
    if (searchInput.trim() === "") {
      return;
    }

    const { data } = await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&query=${searchInput}&page=${pageNumber}&include_adult=false`
    );

    setContent(data.results);
    setLoading(false);
  };

  useEffect(() => {
    fetchSearch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchInput]);

  return (
    <>
      <ContentContainer
        setPageNumber={setPageNumber}
        content={content}
        loading={loading}
        noLoadButton={true}
      ></ContentContainer>
    </>
  );
};
export default Search;
