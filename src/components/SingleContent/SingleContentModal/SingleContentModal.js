import { useState, useEffect } from "react";
import axios from "axios";
import { styled } from "@mui/system";
import "./SingleContentModal.css";

import { Box, Grid, Typography, Modal, Fade } from "@mui/material";
import MovieRating from "./MovieRating";
import MoviePoster from "./MoviePoster";
import MovieDescription from "./MovieDescription";
import MovieGenres from "./MovieGenres";
import MovieActors from "./MovieActors";

const StyledGrid = styled(Grid)({
  position: "absolute",
  top: "50%",
  left: "50%",
  right: "50%",
  width: "80%",
  maxWidth: "700px",
  maxHeight: "600px",
  transform: "translate(-50%, -50%)",
  padding: 16,
  backgroundColor: "#100F0F",
  color: "#F1F1F1",
  borderRadius: 2,
  border: "1px solid #F1F1F1",
  transition: "all 2s ease-in-out",
  overflowY: "scroll",
  scrollbarWidth: "none",
});

const SingleContentModal = ({
  id,
  poster,
  title,
  voteAverage,
  description,
  releaseDate,
  open,
  handleClose,
}) => {
  const [movieDetails, setMovieDetails] = useState([]);
  const [credits, setCredits] = useState([]);

  const fetchMovieDetails = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
    );
    setMovieDetails(data);
  };

  const fetchCredits = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
    );
    setCredits(data);
  };

  useEffect(() => {
    fetchMovieDetails();
    fetchCredits();
  });

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        closeAfterTransition
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Fade in={open}>
          <StyledGrid className="scrollbar-hidden" container>
            <Grid
              item
              xs={12}
              sm={4}
              sx={{ maxHeight: { xs: "300px", sm: "320px" } }}
            >
              <MoviePoster poster={poster} />
            </Grid>

            <Grid item xs={12} sm={7} sx={{ marginLeft: { xs: 0, sm: 2 } }}>
              <Box>
                <Typography
                  sx={{ marginTop: { xs: 2, sm: 0 } }}
                  id="modal-modal-title"
                  variant="h5"
                  component="h3"
                >
                  {title}
                </Typography>
              </Box>

              <MovieRating voteAverage={voteAverage} />

              <MovieDescription description={description} />

              <Typography variant="subtitle1" sx={{ mt: 1 }}>
                {`Release date: ${releaseDate}`}
              </Typography>

              <MovieGenres genres={movieDetails.genres} />
            </Grid>
            <Grid item xs={12} sx={{ cursor: "grab", mt: 2 }}>
              <MovieActors cast={credits.cast} />
            </Grid>
          </StyledGrid>
        </Fade>
      </Modal>
    </div>
  );
};
export default SingleContentModal;
