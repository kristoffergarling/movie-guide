import { Box, Typography } from "@mui/material";
import { styled } from "@mui/system";

import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { img_300, unavailable } from "../../../config/config";

const handleDragStart = (e) => e.preventDefault();

const StyledBox = styled(Box)({
  padding: "4px",
});

const ActorImg = styled("img")({
  width: "100%",
  height: "100%",
  borderRadius: "5px",
});

const MovieActors = ({ cast }) => {
  const actors = cast.filter((cast) => cast.known_for_department === "Acting");

  const items = actors.map((actor) => (
    <StyledBox key={actor.id}>
      <ActorImg
        src={actor.profile_path ? img_300 + actor.profile_path : unavailable}
        alt={actor.name}
        onDragStart={handleDragStart}
      />
      <Typography variant="subtitle2" sx={{ textAlign: "center" }}>
        {actor.name}
      </Typography>
    </StyledBox>
  ));

  const responsive = {
    0: {
      items: 3,
    },
    512: {
      items: 5,
    },
    1024: {
      items: 6,
    },
  };

  return (
    <AliceCarousel
      mouseTracking
      infinite
      disableDotsControls
      disableButtonsControls
      responsive={responsive}
      items={items}
      touchTracking
      autoPlay
      autoPlayInterval={1500}
    />
  );
};
export default MovieActors;
