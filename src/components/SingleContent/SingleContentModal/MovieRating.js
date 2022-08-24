import { Box, Typography, Rating } from "@mui/material";

const MovieRating = ({ voteAverage }) => {
  const formatVoteAverage = (voteAverage) => {
    // 5/5 is max rating and the api gives a score out of 10
    const toScoreOutOfFive = 2;
    return voteAverage / toScoreOutOfFive;
  };

  return (
    <Box
      sx={{
        display: "flex",
      }}
    >
      <Typography variant="subtitle1" sx={{ marginRight: 1 }} component="h6">
        {voteAverage.toFixed(1)}
      </Typography>
      <Rating
        name="read-only"
        readOnly
        value={formatVoteAverage(voteAverage)}
        precision={0.1}
      />
    </Box>
  );
};
export default MovieRating;
