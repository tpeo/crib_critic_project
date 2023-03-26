import React from 'react'
import './LandingPage.css';
import SearchBar from '../components/SearchBar';
import LogoName from '../images/CribCritiqName.svg';
import { ActionIcon } from '@mantine/core';
import { IconUser } from '@tabler/icons-react';

export default function SearchContainer() {
  return (
    <div className="main-container">
      <div className="logo">
        <img src={LogoName} alt="Crib Critiq Name"></img>
      </div>
      <div className="search-container">
        <SearchBar />
      </div>
      <div className="user-icon">
        <ActionIcon
          size={40}
          radius="xl"
          variant="filled"
          color="custom.0"
          sx={{ marginLeft: "20%" }}
        >
          <IconUser />
        </ActionIcon>
      </div>
    </div>
  );
}
