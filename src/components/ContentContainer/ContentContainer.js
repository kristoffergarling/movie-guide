import React, { useState } from "react";
import { styled } from "@mui/system";

import { Grid, Container, Typography } from "@mui/material";
import SingleContent from "../SingleContent/SingleContent";
import FilterBy from "./FilterBy";
import LoadingCircle from "./LoadingCircle";
import LoadMoreButton from "./LoadMoreButton";

const StyledContainer = styled(Container)({
  marginBottom: 100,
});

const ContentContainer = ({
  content,
  setPageNumber,
  loading,
  noLoadButton,
}) => {
  const [filterBy, setFilterBy] = useState("");

  const filterMovies = () => {
    switch (filterBy) {
      case "Alphabetical":
        return content.sort((a, b) => a.title.localeCompare(b.title));
      case "Rating Ascending":
        return content.sort((a, b) => a.vote_average - b.vote_average);
      case "Rating Descending":
        return content.sort((a, b) => b.vote_average - a.vote_average);
      case "Release Date Ascending":
        return content.sort(
          (a, b) => new Date(a.release_date) - new Date(b.release_date)
        );
      case "Release Date Descending":
        return content.sort(
          (a, b) => new Date(b.release_date) - new Date(a.release_date)
        );
      default:
        return content;
    }
  };

  const handleClick = () => {
    setPageNumber((prevState) => prevState + 1);
  };

  return (
    <StyledContainer>
      <FilterBy setFilterBy={setFilterBy} />
      <Grid container spacing={2}>
        {content && content.length > 0 ? (
          filterMovies().map((c) => (
            <Grid key={c.id} item xs={6} sm={4} md={3} lg={3}>
              <SingleContent data={c} />
            </Grid>
          ))
        ) : (
          <Grid
            item
            xs={12}
            sx={{ marginTop: 10, display: "flex", justifyContent: "center" }}
          >
            {loading ? (
              <LoadingCircle />
            ) : (
              <Typography variant="h6">No results found</Typography>
            )}
          </Grid>
        )}
      </Grid>
      {!noLoadButton && content.length > 0 && (
        <LoadMoreButton handleClick={handleClick} loading={loading} />
      )}
    </StyledContainer>
  );
};
export default ContentContainer;
