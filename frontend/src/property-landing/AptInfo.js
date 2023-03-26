import React from 'react';
import { Rating, Group, ActionIcon } from "@mantine/core";
import FilterButton from '../components/FilterButton';
import { IconUpload, IconHeart } from '@tabler/icons-react';

function AptInfo(props) {
    const filters = ["filter 1", "filter 2", "filter 3", "filter 4"];
    const rating = 3.9;
    return (
      <div className="apartment-container">
        {/* Apartment Name, Location, and Reviews */}
        <div className="location-review">
          <p> Villas on Rio</p>
          <div className="address-reviews">
            <p> 2111 Rio Grande St, Austin, TX 78705</p>
            <div style={{ width: "30%" }}>
              <div className="rating">
                <Group position="center">
                  <Rating value={rating} fractions={10} readOnly />
                </Group>
                <span> 3.9 / 5</span>
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
              <ActionIcon>
                <IconHeart />
              </ActionIcon>
              Add to Criblist
            </div>
            <div>
              <ActionIcon>
                <IconUpload />
              </ActionIcon>
              Share
            </div>
          </div>
        </div>
        <div style={{ backgroundColor: "green" }}> Hello World </div>
        <div style={{ backgroundColor: "purple" }}> Hello World </div>
      </div>
    );
}

export default AptInfo;