import { useState } from "react";

import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { Menu, MenuItem, IconButton, Typography } from "@mui/material";

import { styled } from "@mui/system";

const options = [
  "Alphabetical",
  "Rating Ascending",
  "Rating Descending",
  "Release Date Ascending",
  "Release Date Descending",
];

const styledMenu = styled(Menu)({
  marginTop: 75,
});

const FilterBy = ({ setFilterBy }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = anchorEl;
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (e) => {
    setFilterBy(e.target.innerText);
    setAnchorEl(false);
  };
  return (
    <div>
      <IconButton
        sx={{ color: "#F1F1F1" }}
        aria-label="more"
        id="long-button"
        aria-controls={open ? "long-menu" : undefined}
        aria-expanded={open ? "true" : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <Typography variant="subtitle1">Filter by</Typography>
        <ArrowDropDownIcon />
      </IconButton>
      <Menu
        id="long-menu"
        MenuListProps={{
          "aria-labelledby": "long-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: 50 * options.length,
            width: "26.3ch",
          },
        }}
      >
        {options.map((option) => (
          <MenuItem
            key={option}
            selected={option === "Pyxis"}
            onClick={handleClose}
          >
            {option}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
};
export default FilterBy;
