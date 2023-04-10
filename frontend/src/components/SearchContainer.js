import React from 'react'
import './components.css';
import SearchBar from './SearchBar';
import LogoName from '../images/CribCritiqName.svg';
import { ActionIcon } from '@mantine/core';
import { IconUser } from '@tabler/icons-react';
import { useNavigate } from 'react-router-dom';

export default function SearchContainer() {
  const navigate = useNavigate();
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
          onClick= {() => navigate(`/user_home`)}
        >
          <IconUser />
        </ActionIcon>
      </div>
    </div>
  );
}
