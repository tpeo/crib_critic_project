import React from 'react';
import { Navbar, createStyles, Slider, rem } from "@mantine/core";
import "./components.css";

const useStyles = createStyles((theme) => ({
    navbar: {
        backgroundColor: theme.colors.gray[1],
        borderColor: "#CED4DA",
        borderTopRightRadius: "10px",
        borderBottomRightRadius: "10px",
        minWidth:"200px"
      },
}));

const marks = [
  { value: 20, label: '20%' },
  { value: 50, label: '50%' },
  { value: 80, label: '80%' },
];


function Sidebar(props) {
    const { classes } = useStyles();
    return (
      <Navbar width={{ sm: 300 }} p="md" className={classes.navbar}>
        <p className="sidebar-title">Filters</p>
        <Slider
          defaultValue={40}
          marks={marks}
          labelTransition="fade"
          size={2}
          styles={(theme) => ({
            track: {
              backgroundColor: 'green',
            },
            mark: {
              width: rem(20),
              height: rem(20),
              borderRadius: rem(20),
              transform: `translateX(-${rem(3)}) translateY(-${rem(2)})`,
              borderColor: theme.colors.custom[1]
            },
            markFilled: {
              backgroundColor: theme.colors.custom[1],
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
              borderWidth: rem(1),
              boxShadow: theme.shadows.sm,
            },
          })}
        />
      </Navbar>
    );
}

export default Sidebar;