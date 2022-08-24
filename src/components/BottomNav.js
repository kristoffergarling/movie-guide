import { useState, useEffect } from "react";
import {
  Box,
  BottomNavigation,
  BottomNavigationAction,
  Container,
} from "@mui/material";
import { styled } from "@mui/system";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import GradeIcon from "@mui/icons-material/Grade";
import MovieIcon from "@mui/icons-material/Movie";
import UpcomingIcon from "@mui/icons-material/Upcoming";
import { useNavigate } from "react-router-dom";

const NavLink = styled(BottomNavigationAction)({
  color: "#F1F1F1",
  transition: "transform 100ms ease-in-out",
  "&:hover": {
    transform: "scale(1.08)",
    cursor: "pointer",
  },
});

const BottomNav = () => {
  const [value, setValue] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    switch (value) {
      case 0:
        navigate("/");
        break;
      case 1:
        navigate("/toprated");
        break;
      case 2:
        navigate("/nowplaying");
        break;
      case 3:
        navigate("/upcoming");
        break;
      default:
        break;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  return (
    <Container sx={{ display: "flex", justifyContent: "center" }}>
      <Box
        maxWidth="lg"
        sx={{
          width: "100%",
          position: "fixed",
          bottom: 0,
        }}
      >
        <BottomNavigation
          style={{ backgroundColor: "#100F0F" }}
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <NavLink
            style={{ color: "#F1F1F1" }}
            label="Popular"
            icon={<TrendingUpIcon />}
          />
          <NavLink
            style={{ color: "#F1F1F1" }}
            label="Top Rated"
            icon={<GradeIcon />}
          />
          <NavLink
            style={{ color: "#F1F1F1" }}
            label="Now Playing"
            icon={<MovieIcon />}
          />
          <NavLink
            style={{ color: "#F1F1F1" }}
            label="Upcoming"
            icon={<UpcomingIcon />}
          />
        </BottomNavigation>
      </Box>
    </Container>
  );
};

export default BottomNav;
