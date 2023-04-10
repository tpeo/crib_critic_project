import React from 'react';
import { Slider, rem } from '@mantine/core';

function SidebarSlider(props) {
  const marks = [
    { value: 20, label: '20%' },
    { value: 50, label: '50%' },
    { value: 80, label: '80%' },
  ];
    return (
      <Slider
        marks={marks}
        labelTransition="fade"
        size={2}
        sx={{marginLeft: '10%', marginRight: '10%'}}
        styles={(theme) => ({
          bar: {
            backgroundColor: "black",
          },
          mark: {
            width: 12,
            height: 12,
            borderRadius: 12,
            transform: "translateX(-6px) translateY(-4px)",
            borderColor: theme.colors.custom[1],
          },
          markFilled: {
            borderColor: theme.colors.custom[0],
            backgroundColor: theme.colors.custom[0],
          },
          markLabel: {
            fontSize: theme.fontSizes.xs,
            marginBottom: rem(5),
            marginTop: 0,
          },
          thumb: {
            height: rem(16),
            width: rem(16),
            backgroundColor: theme.colors.custom[0],
            borderColor: theme.colors.custom[0],
            borderWidth: rem(1),
            boxShadow: theme.shadows.sm,
          },
        })}
      />
    );
}

export default SidebarSlider;