import { useState } from "react";

import { Card, CardMedia, Typography } from "@mui/material";
import { styled } from "@mui/system";
import { img_300, unavailable } from "../../config/config";

import MoreInfo from "./MoreInfo";

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
  backgroundColor: "#2B7A0B",
  borderRadius: "50%",
  width: "25px",
  paddingTop: "2px",
  textAlign: "center",
  color: "white",
  top: 1,
  left: "94%",
  transform: "translateX(-50%)",
});

const SingleContent = ({ data }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
      <MoreInfo data={data} open={open} handleClose={handleClose} />
    </>
  );
};
export default SingleContent;
