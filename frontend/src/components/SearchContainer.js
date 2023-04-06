import React from 'react'
import './components.css';
import SearchBar from './SearchBar';
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
          variant="outline"
          color="custom.0"
          sx={{ marginLeft: "20%" }}
        >
          <IconUser />
        </ActionIcon>
      </div>
    </div>
  );
}
