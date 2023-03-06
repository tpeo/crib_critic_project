import React from 'react';
import FilterFeatures from './FilterFeatures';
import { createStyles } from '@mantine/core';
import LocationDetails from './LocationDetails';
import dog from '../../images/Moshoo_Background.jpg';

const useStyles = createStyles((theme) => ({
  //Separate apartment container into two columns and two rows
  //(one is 3 times the other)
  apartment_container: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gridTemplateRows: "1fr 6fr",
    gap: "3% 5%",
    marginTop: '5%'
  },
  apartment_images: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    rowGap: "5%",
    gridTemplateRows: "1fr 1fr",
    columnGap: "5%",
  },
  image_container: {
    backgroundSize: 'cover',
    backgroundPosition: 'center top'
  }
}));

function ApartmentContainer(props) {
    const {classes}= useStyles();
    return (
      <div className={classes.apartment_container}>
        {/* Subcontainer for Apartment Name, Address, etc. */}
        <div className={classes.apartment_subcontainer}>
          {/* Component representing Apartment name, address, rating,
              and reviews */}
          <LocationDetails
            name="Villas on Rio"
            address="2111 Rio Grande St, Austin, TX 78705"
            value={4}
            reviews={45}
          />
        </div>
        <div className={classes.apartment_subcontainer}>
        </div>
        {/*  */}
        <div className={classes.image_container} style={{backgroundImage: 'url(https://tinyurl.com/bdhdndkz)'}}>
        </div>
      </div>
    );
}

export default ApartmentContainer;