import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { Rating, Group, ActionIcon } from "@mantine/core";
import FilterButton from '../../components/FilterButton';
import Map from '../../components/Map';
import { IconUpload, IconHeart } from '@tabler/icons-react';

function AptInfo(props) {
    const [apartmentValues, setApartmentValues] = useState(null);
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
    const {name} = useParams();
    useEffect(() => {
      fetch(
        `https://crib-critic-project-git-backend-crib-critiq.vercel.app/apartments/apartment_features/${name}`,
        {
          method: "GET",
        }
      )
        .then((response) => response.json())
        .then((data) => {
          setApartmentValues({...data, filters: [
            "filter 1",
            "filter 2",
            "filter 3",
            "filter 4",
            "filter 5",
            "filter 6",
            "filter 7",
            "filter 8"
          ], name: name});
        })
        .catch((error) => {
          console.log(error);
        });
    }, [name]);

    console.log(apartmentValues);

    return (
      <>
        {apartmentValues && (
          <div className="apartment-container">
            {/* Apartment Name, Location, and Reviews */}
            <div className="location-review">
              <p>{apartmentValues.name}</p>
              <div className="address-reviews">
                <p> {apartmentValues.address}</p>
                <div style={{ width: "30%" }}>
                  <div className="rating">
                    <Group position="center">
                      <Rating
                        value={apartmentValues.rating}
                        fractions={10}
                        readOnly
                      />
                    </Group>
                    <span> {apartmentValues.rating} / 5</span>
                  </div>
                  <p style={{ textAlign: "center" }}>
                    {apartmentValues.reviews} reviews
                  </p>
                </div>
              </div>
            </div>

            {/* Apartment Filters */}
            <div className="filter-container">
              <div className="filters">
                Filters
                <div style={{ display: "flex", flexWrap: "wrap" }}>
                  {apartmentValues.filters &&
                    apartmentValues.filters.map((e) => (
                      <FilterButton key={e} filter={e} />
                    ))}
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
                src={apartmentValues.picture}
              ></img>
            </div>

            {/* Apartment on map */}
            <div className="map-container">
              <Map lat={30.2842} lng={-97.7444} />
            </div>
          </div>
        )}
      </>
    );
}

export default AptInfo;