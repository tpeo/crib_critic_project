import React from 'react';
import { Navbar, createStyles, Accordion, Group, ActionIcon } from "@mantine/core";
import SidebarSlider from './SidebarSlider';
import { IconCaretRight } from '@tabler/icons-react';
import "./components.css";

const useStyles = createStyles((theme) => ({
  navbar: {
    backgroundColor: theme.colors.gray[1],
    borderColor: "#CED4DA",
    borderTopRightRadius: "10px",
    borderBottomRightRadius: "10px",
    minWidth: "200px",
  },
  group: {
    marginTop: "50px",
  },
  accordion: {
    width: "100%",
    alignSelf: "#region"
  }
}));



function Sidebar(props) {
    const { classes } = useStyles();
    const accordionValues = ["Bed/Bath", "Amenities", "Services", "Financials"];
    return (
      <Navbar width={{ sm: 300 }} p="md" className={classes.navbar}>
        <p className="sidebar-title" style={{ fontWeight: "700" }}>
          Filters
        </p>
        <p className="sidebar-subtitle"> Price</p>
        <SidebarSlider />
        <p className="sidebar-subtitle" style={{ marginTop: "20%" }}>
          Proximity
        </p>
        <SidebarSlider />
        <Group className={classes.group}>
          <Accordion
            color="#F1F3F5"
            chevronPosition="right"
            chevron={
              <ActionIcon color="orange.6" variant="subtle">
                <IconCaretRight size="1.125rem" fill = "#FD7E14"/>
              </ActionIcon>
            }
            className={classes.accordion}
            styles={(theme) => ({
              item: {
                // styles added to all items
                backgroundColor: theme.colors.gray[1],
                border: `none`,
              },
              chevron: {
                // styles added to chevron when it should rotate
                "&[data-rotate]": {
                  transform: "rotate(90deg)",
                },
              },
            })}
          >
            {accordionValues && accordionValues.map(e => {
              return (
                <Accordion.Item key={e} value={e}>
                  <Accordion.Control>{e}</Accordion.Control>
                  <Accordion.Panel>Test</Accordion.Panel>
                </Accordion.Item>
              );
            })}
          </Accordion>
        </Group>
      </Navbar>
    );
}

export default Sidebar;