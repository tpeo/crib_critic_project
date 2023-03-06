import React from 'react'
import SearchBar from './SearchBar';
import {ActionIcon, createStyles} from '@mantine/core'
import LogoName from '../images/CribCritiqName.svg';
import { IconUser } from '@tabler/icons-react';

const styles = createStyles((theme) => ({
  logo_container: { display: "flex", justifyContent: "center", marginTop: "5%" },
  image: { height: "75%", width: "75%" },
  alignment: { display: "flex", justifyContent: "center" },
  search_container: {
    marginTop: "2%",
    height: "10%",
    display: "grid",
    gridTemplateColumns: "1fr 2fr 1fr"
  },
}));

export default function SearchContainer() {
  const {classes} = styles();
  return (
    <div className={classes.search_container}>
      <div className={classes.logo_container}>
        <img
          src={LogoName}
          alt="Crib Critiq Name"
          className={classes.image}
        ></img>
      </div>
      <div className={classes.alignment}>
        <SearchBar />
      </div>
      <div className={classes.alignment}>
        <ActionIcon
          size={40}
          radius="xl"
          variant="filled"
          color="custom.4"
          style={{ marginTop: "6%" }}
        >
          <IconUser />
        </ActionIcon>
      </div>
    </div>
  );
}
