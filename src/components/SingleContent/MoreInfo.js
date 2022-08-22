import { useState } from "react";
import axios from "axios";
import { styled } from "@mui/system";

import { CardMedia, Grid, Typography, Modal } from "@mui/material";
import { img_300, unavailable } from "../../config/config";

const StyledGrid = styled(Grid)({
  position: "absolute",
  top: "50%",
  left: "50%",
  width: "80%",
  maxWidth: "800px",
  transform: "translate(-50%, -50%)",
  p: 4,
  backgroundColor: "#100F0F",
  color: "#F1F1F1",
});

const MoreInfo = ({ open, handleClose, data }) => {
  const [content, setContent] = useState([]);

  const fetchMovieInfo = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`
    );
    console.log(data.results);
    setContent(data.results);
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <StyledGrid container>
          <Grid item xs={1}>
            <img
              src={data.poster_path ? img_300 + data.poster_path : unavailable}
              alt="Movie poster"
            ></img>
          </Grid>
          <Grid item xs={2}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              {data.original_title}
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 1 }}>
              {data.overview}
            </Typography>
          </Grid>
        </StyledGrid>
      </Modal>
    </div>
  );
};
export default MoreInfo;
