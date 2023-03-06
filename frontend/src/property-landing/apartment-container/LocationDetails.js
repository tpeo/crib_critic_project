import React, {useState} from 'react';
import { Rating, createStyles} from '@mantine/core';

const styles = createStyles((theme) => ({
  overall_container: { display: "flex", justifyContent: "space-around"},
  subdivision: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  apartment_name: {
    fontFamily: "Poppins",
    fontWeight: "900",
    fontSize: "3em",
  },
  apartment_location: { fontFamily: "Poppins", fontStyle: "italic" },
  rating_value: {
    fontFamily: "Poppins",
    fontWeight: "700",
    textAlign: "center",
    display: "block",
  },
}));

function LocationDetails(props) {
    const [value, setValue] = useState(props.value);
    const {classes} = styles();
    return (
      <div className={classes.overall_container}>
        {/* Div containing an apartment name and apartment address */}
        <div className={classes.subdivision}>
          <div className={classes.apartment_name}>{props.name}</div>
          <div className={classes.apartment_location}>
            {props.address}
          </div>
        </div>
        {/* Div containing the star rating scale, the star rating value, and the review value */}
        <div className={classes.subdivision}>
          <div>
            <Rating
              value={value}
              fractions={2}
              onChange={setValue}
              color="custom.0"
            />
            <span className={classes.rating_value}>{value} / 5</span>
            <span className={classes.rating_value}>{props.reviews} reviews</span>
          </div>
        </div>
      </div>
    );
}

export default LocationDetails;