import { styled } from "@mui/system";

import { Box } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";

const StyledLoadingButton = styled(LoadingButton)({
  marginTop: 25,
  color: "#F1F1F1",
  borderColor: "#F1F1F1",
  alignItems: "center",
  "&:hover": {
    borderColor: "#F1F1F1",
    transform: "scale(1.01)",
    cursor: "pointer",
  },
});

const LoadMoreButton = ({ handleClick, loading }) => {
  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <StyledLoadingButton
        size="large"
        onClick={handleClick}
        loading={loading}
        loadingIndicator="Loading…"
        variant="outlined"
      >
        Load More
      </StyledLoadingButton>
    </Box>
  );
};
export default LoadMoreButton;
