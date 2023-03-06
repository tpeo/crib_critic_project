import React from 'react';
import { ActionIcon, createStyles } from '@mantine/core';
import FilterBox from './FilterBox';
import { IconUpload, IconHeart } from '@tabler/icons-react';

const styles = createStyles((theme) => ({
  overall_container: {
    display: "grid",
    gridTemplateColumns: "3fr 2fr",
    marginTop: "10%",
  }, 
  title: { fontFamily: "Poppins", fontStyle: "italic", textAlign: 'center' },
  filter_container: {
    display: "flex",
    flexFlow: "row wrap",
    alignItems: "flex-start",
  },
  crib_list_container: { display: "grid", gridTemplateRows: "1fr 1fr" },
  crib_text: {
    fontFamily: "Poppins",
    fontStyle: "italic",
    marginTop: "4%",
    textAlign: "center",
  },
  sub_container: { display: "grid", gridTemplateColumns: "1fr 3fr" }
}));

function FilterFeatures(props) {
  const {classes} = styles();
    return (
      <div className={classes.overall_container}>
        <div>
          <span className={classes.title}>Filters</span>
          <div className={classes.filter_container}>
            <FilterBox txt="7 Bed 7 Bath"></FilterBox>
            <FilterBox txt="Gym"></FilterBox>
            <FilterBox txt="Pets allowed"></FilterBox>
            <FilterBox txt="Parking"></FilterBox>
            <FilterBox txt="Balconies"></FilterBox>
          </div>
        </div>
        <div className={classes.crib_list_container}>
          <div className={classes.sub_container}>
            <ActionIcon size={40} radius="xl" variant="filled" color="custom.4">
              <IconHeart />
            </ActionIcon>
            <span className={classes.crib_text}>Add to Criblist</span>
          </div>
          <div className={classes.sub_container}>
            <ActionIcon size={40} radius="xl" variant="filled" color="custom.4">
              <IconUpload />
            </ActionIcon>
            <span className={classes.crib_text}>Share</span>
          </div>
        </div>
      </div>
    );
}

export default FilterFeatures;