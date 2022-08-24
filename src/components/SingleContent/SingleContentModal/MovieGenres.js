import { Grid, Chip } from "@mui/material";
import { styled } from "@mui/system";

const GenreChip = styled(Chip)({
  margin: "2px",
  color: "#F1F1F1",
});

const MovieGenres = ({ genres }) => {
  return (
    <Grid sx={{ mt: 1 }}>
      {genres.map((genre) => (
        <GenreChip key={genre.id} label={genre.name} variant="outlined" />
      ))}
    </Grid>
  );
};
export default MovieGenres;
