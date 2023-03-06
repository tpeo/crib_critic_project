import React from 'react';
import { Box } from '@mantine/core';

function FilterBox(props) {
    return (
      <Box
        display="block"
        component="a"
        target="_blank"
        sx={(theme) => ({
          display: "block",
          backgroundColor: theme.colors.custom[2],
          borderRadius: theme.radius.lg,
          padding: theme.spacing.xs,
          fontSize: "90%",
          width: '40%',
          textAlign: 'center',
          '&:hover': {
            backgroundColor: theme.colors.custom[0]
          }
        })}
      >
        {props.txt}
      </Box>
    );
}

export default FilterBox;