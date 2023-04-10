import React, { useState, useEffect } from "react";
import { TextInput, ActionIcon } from "@mantine/core";
import logo from "../images/Eyeglass.svg";
import { useNavigate } from 'react-router-dom';


function SearchBar(props) {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  useEffect(() => {

  }, []);
  return (
    <TextInput
      radius="xl"
      size="md"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      style={{ width: "100%" }}
      rightSection={
        <ActionIcon size={32} radius="xl" variant="filled" color="custom.0" onClick= {() => navigate(`/property_landing/${search}`)}>
          <img src={logo} alt="Crib Critiq Logo" width="80%"></img>
        </ActionIcon>
      }
      placeholder="Search West Campus"
      {...props}
    />
  );
}

export default SearchBar;
