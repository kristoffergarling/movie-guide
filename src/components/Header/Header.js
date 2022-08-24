import { useState, useEffect } from "react";
import { AppBar, Toolbar, Typography, Box, TextField } from "@mui/material";
import SlideshowIcon from "@mui/icons-material/Slideshow";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";

import { styled } from "@mui/system";

const StyledToolBar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
  fontSize: "5vw",
});

const StyledTextField = styled(TextField)({
  input: {
    color: "#F1F1F1",
    "&:focused": {
      label: {
        color: "#F1F1F1",
      },
    },
  },
  label: {
    color: "#F1F1F1",
  },
});

const Header = ({ setSearchInput }) => {
  const [userInput, setUserInput] = useState("");
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate("/");
  };

  const handleUserInput = (e) => {
    setUserInput(e.target.value);
  };

  useEffect(() => {
    const identifier = setTimeout(() => {
      setSearchInput(userInput);
      if (userInput.trim() !== "") {
        navigate("/search");
      }
    }, 1000);
    return () => clearTimeout(identifier);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userInput]);

  return (
    <AppBar
      sx={{ paddingTop: "10px", paddingBottom: "10px" }}
      position="sticky"
    >
      <StyledToolBar>
        <Box
          onClick={handleLogoClick}
          sx={{ display: "flex", cursor: "pointer" }}
        >
          <SlideshowIcon sx={{ display: { xs: "block" }, fontSize: "40px" }} />
          <Typography
            variant="h4"
            sx={{
              marginLeft: "10px",
              marginTop: "5px",
              display: { xs: "none", sm: "block" },
            }}
          >
            MovieGuide
          </Typography>
        </Box>
        <Box
          sx={{
            marginBottom: "10px",
            display: "flex",
            alignItems: "flex-end",
            color: "#F1F1F1",
          }}
        >
          <SearchIcon
            sx={{
              display: { xs: "none", sm: "block" },
              color: "#F1F1F1",
              mr: 1,
              my: 0.5,
            }}
          />
          <StyledTextField
            onChange={handleUserInput}
            id="input-with-sx"
            label="Search"
            variant="standard"
          />
        </Box>
      </StyledToolBar>
    </AppBar>
  );
};
export default Header;
