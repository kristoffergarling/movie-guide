import { useState } from "react";

import { Card, CardMedia, Typography } from "@mui/material";
import { styled } from "@mui/system";
import { img_300, unavailable } from "../../config/config";

import SingleContentModal from "./SingleContentModal/SingleContentModal";

const StyledCard = styled(Card)({
  backgroundColor: "#100F0F",
  borderRadius: 5,
  transition: "transform 100ms ease-in-out",
  "&:hover": {
    transform: "scale(1.03)",
    cursor: "pointer",
  },
});

const Rating = styled(Typography)({
  position: "absolute",
  fontSize: { xs: "1rem", sm: "1.5rem", md: "2.5rem", lg: "3rem" },
  backgroundColor: "#413F42",
  borderRadius: "50%",
  border: "2px solid #100F0F",
  width: "30px",
  paddingTop: "2px",
  textAlign: "center",
  color: "#F1F1F1",
  top: 7,
  left: "90.5%",
  transform: "translateX(-50%)",
});

const SingleContent = ({ data }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  console.log(open);
  return (
    <>
      <StyledCard onClick={handleOpen}>
        <div style={{ position: "relative" }}>
          <CardMedia
            component="img"
            image={data.poster_path ? img_300 + data.poster_path : unavailable}
            alt="Movie poster"
          ></CardMedia>
          <Rating>{data.vote_average.toFixed(1)}</Rating>
        </div>
      </StyledCard>
      <SingleContentModal
        id={data.id}
        poster={data.poster_path}
        title={data.title}
        voteAverage={data.vote_average}
        description={data.overview}
        releaseDate={data.release_date}
        open={open}
        handleClose={handleClose}
      />
    </>
  );
};
export default SingleContent;
