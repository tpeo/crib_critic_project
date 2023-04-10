import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { Rating, Group, ActionIcon } from "@mantine/core";
import FilterButton from '../../components/FilterButton';
import Map from '../../components/Map';
import { IconUpload, IconHeart } from '@tabler/icons-react';
import axios from "axios";

function AptInfo(props) {
    const filters = [
      "filter 1",
      "filter 2",
      "filter 3",
      "filter 4",
      "filter 5",
      "filter 6",
      "filter 7",
      "filter 8"
    ];
    const rating = 3.9;
    const [bgColor, setBgColor] = useState('transparent');

    const handleClick = () => {
      if(bgColor === 'transparent') {
        setBgColor('red');
      }
      else {
        setBgColor('transparent');
      }
    };
    const {name} = useParams()
    useEffect(() => {
      fetch("https://crib-critic-project-git-backend-crib-critiq.vercel.app/apartments/apartment_features", {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({name: name}),
  }).then(response => {
    console.log(response);
  }).catch(error => {
    console.log(error);
  })
    });



    return (
      <div className="apartment-container">
        {/* Apartment Name, Location, and Reviews */}
        <div className="location-review">
          <p>{name}</p>
          <div className="address-reviews">
            <p> 2111 Rio Grande St, Austin, TX 78705</p>
            <div style={{ width: "30%" }}>
              <div className="rating">
                <Group position="center">
                  <Rating value={rating} fractions={10} readOnly />
                </Group>
                <span> {rating} / 5</span>
              </div>
              <p style={{ textAlign: "center" }}>45 reviews</p>
            </div>
          </div>
        </div>

        {/* Apartment Filters */}
        <div className="filter-container">
          <div className="filters">
            Filters
            <div style={{ display: "flex", flexWrap: "wrap" }}>
              {filters &&
                filters.map((e) => <FilterButton key={e} filter={e} />)}
            </div>
          </div>
          <div className="requests">
            <div>
              <ActionIcon onClick={handleClick}>
                <IconHeart style={{ fill: bgColor }} />
              </ActionIcon>
              <span>Add to Criblist</span>
            </div>
            <div>
              <ActionIcon>
                <IconUpload />
              </ActionIcon>
              <span>Share</span>
            </div>
          </div>
        </div>

        {/* Apartment main image */}
        <div className="image-container">
          <img
            alt="Apartment outward view"
            src="https://images1.apartments.com/i2/jIacUkz1_StGkJKfklU7aby3CZWzuy3iGQY78h5LYcs/111/villas-on-rio-austin-tx-srgb8485-hdr.jpg"
          ></img>
        </div>

        {/* Apartment on map */}
        <div className = "map-container">
          <Map lat = {30.2842} lng = {-97.7444}></Map>
        </div>
      </div>
    );
}

export default AptInfo;