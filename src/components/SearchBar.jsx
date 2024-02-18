import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Paper, IconButton } from "@mui/material";
import { Search } from "@mui/icons-material";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate(); // Corrected the useNavigate hook usage

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchTerm) {
      navigate(`/search/${searchTerm}`); // Corrected the function call
      setSearchTerm(""); // Corrected the state update function call
    }
  };

  const handleChange = (e) => {
    setSearchTerm(e.target.value); // Handling input change
  };

  return (
    <Paper
      component="form"
      onSubmit={handleSubmit} // Corrected the onSubmit event handler
      sx={{
        borderRadius: 20,
        border: "1px solid #e3e3e3",
        pl: 2,
        boxShadow: "none",
        mr: { sm: 5 },
      }}
    >
      <input
        className="search-bar"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleChange} // Corrected the onChange event handler
      />
      <IconButton
        type="submit" // Added type="submit" to submit the form
        sx={{ p: "10px", color: "red", mr: "10px" }}
      >
        <Search />
      </IconButton>
    </Paper>
  );
};

export default SearchBar;
