import { styled } from "@mui/system";

import { img_300, unavailable } from "../../../config/config";

const ModalImg = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%",
  borderRadius: "5px",
});

const MoviePoster = ({ poster }) => {
  return (
    <ModalImg
      src={poster ? img_300 + poster : unavailable}
      alt="Movie poster"
    ></ModalImg>
  );
};
export default MoviePoster;
