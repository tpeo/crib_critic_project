import React from 'react';
import { Button } from '@mantine/core';

function FilterButton(props) {
    return (
      <Button
        variant="light"
        style={{
          borderRadius: "25px", 
          width: "30%",
          height: "42px",
          padding: "0",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
          backgroundColor: "#FFD8A8",
          color: "#F76707"
        }}
      >
        {props.filter}
      </Button>
    );
}

export default FilterButton;