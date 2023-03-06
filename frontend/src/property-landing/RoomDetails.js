import React from 'react';
import { createStyles, Table } from '@mantine/core';
import Amenity from './Amenity';

const styles = createStyles((theme) => ({
  apartment_offerings: {
    height: "10%",
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    columnGap: "5%",
  },
  header_text: {
    fontFamily: "Poppins", 
    fontWeight: '700',
    textAlign: 'center', 
  },
  amenity_container: {
    display: 'block flex',
    gap: '20%',
    justifyContent: 'space-between',
    flexFlow: "column wrap",
    alignContent: 'space-around'
  }
}));

function RoomDetails(props) {
    const {classes} = styles();
    const sample_details = [
      { type: "Room type 1", size: "Size", bed: "3 x 3", rent: "$1000" },
      { type: "Room type 2", size: "Size", bed: "3 x 3", rent: "$1000" },
      {type: 'Room type 3', size: 'Size', bed : '3 x 3', rent: '$1000'},
      {type: 'Room type 4', size: 'Size', bed : '3 x 3', rent: '$1000'}
    ];
    const amenities = ["Amenity 1", "Amenity 2", "Amenity 3", "Amenity 4", "Amenity 5", "Amenity 6", "Amenity 7", "Amenity 8"];
    return (
      <div className={classes.apartment_offerings}>
        <div>
          <p className={classes.header_text}>Amenities offered</p>
          <div className={classes.amenity_container}>
            {amenities.map((e) => (
              <Amenity name={e} key={e} />
            ))}
          </div>
        </div>
        <div>
          <p className={classes.header_text}>Rent by Room Type</p>
          <Table
            highlightOnHover
            horizontalSpacing={"xs"}
            verticalSpacing={"xs"}
          >
            {/* This portion represents the headers for the table */}
            <thead>
              <tr>
                <th>Room Type</th>
                <th>Size (Area)</th>
                <th>Bed / Bath</th>
                <th>Rent</th>
              </tr>
            </thead>
            <tbody>
              {sample_details.map((element) => (
                <tr key = {element.type}>
                  <td style={{ fontFamily: "Poppins", fontWeight: "400" }}>
                    {element.type}
                  </td>
                  <td style={{ fontFamily: "Poppins", fontWeight: "400" }}>
                    {element.size}
                  </td>
                  <td style={{ fontFamily: "Poppins", fontWeight: "400" }}>
                    {element.bed}
                  </td>
                  <td style={{ fontFamily: "Poppins", fontWeight: "400" }}>
                    {element.rent}
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>
    );
}

export default RoomDetails;