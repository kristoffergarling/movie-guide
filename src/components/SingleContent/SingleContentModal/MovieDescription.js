import { Box, Typography } from "@mui/material";
import { styled } from "@mui/system";

const Description = styled(Typography)({
  border: "1px solid #F1F1F1",
  padding: "5px",
  borderRadius: 2,
});

const MovieDescription = ({ description }) => {
  return (
    <Box>
      <Typography variant="subtitle1" component="h5">
        Description:
      </Typography>
      <Description variant="body2" component="p" id="modal-modal-description">
        {description}
      </Description>
    </Box>
  );
};
export default MovieDescription;
