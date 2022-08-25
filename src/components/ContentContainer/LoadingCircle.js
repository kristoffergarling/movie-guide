import { CircularProgress } from "@mui/material";

const LoadingCircle = () => {
  return (
    <CircularProgress
      sx={{
        direction: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
      color="secondary"
    />
  );
};
export default LoadingCircle;
