import React from 'react';
import { Navbar, Button, createStyles } from "@mantine/core";

const useStyles = createStyles((theme) => ({
    navbar: {
        backgroundColor: theme.colors.custom[2],
        borderColor: "#CED4DA",
        borderTopRightRadius: "10px",
        borderBottomRightRadius: "10px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minWidth:"200px"
      },
}));

function Sidebar(props) {
    const { classes } = useStyles();
    return (
      <Navbar width={{ sm: 300 }} p="md" className={classes.navbar}>
        <Button>Select X / Y Axis Values</Button>
      </Navbar>
    );
}

export default Sidebar;