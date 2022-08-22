import { React, useState } from "react";
import { Container } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from "./components/Header/Header";
import BottomNav from "./components/BottomNav";
import Movies from "./pages/TopRated";
import NowPlaying from "./pages/NowPlaying";
import Upcoming from "./pages/Upcoming";
import Trending from "./pages/Trending";
import Search from "./pages/Search";

const theme = createTheme({
  typography: {
    fontFamily: "Cambay, sans-serif",
  },
  palette: {
    primary: {
      main: "#100F0F",
    },
    secondary: {
      main: "#F1F1F1",
    },
    action: {
      disabledBackground: "#F1F1F1",
      disabled: "#F1F1F1",
    },
  },
});

const App = () => {
  const [searchInput, setSearchInput] = useState("");

  return (
    <Container maxWidth="lg">
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Header setSearchInput={setSearchInput} />
          <Routes>
            <Route path="/" element={<Trending />} exact />
            <Route path="/toprated" element={<Movies />} />
            <Route path="/nowplaying" element={<NowPlaying />} />
            <Route path="/upcoming" element={<Upcoming />} />
            <Route
              path="/search"
              element={<Search searchInput={searchInput} />}
            />
          </Routes>
          <BottomNav />
        </BrowserRouter>
      </ThemeProvider>
    </Container>
  );
};

export default App;
