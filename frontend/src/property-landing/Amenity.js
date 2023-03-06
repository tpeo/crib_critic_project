import React from 'react';
import {IconCircleFilled } from '@tabler/icons-react';
import { useMantineTheme} from '@mantine/core';

function Amenity(props) {
    const theme = useMantineTheme();
    return (
      <div style={{width: '40%', display: 'flex', justifyContent: 'center', marginBottom: '30px'}}>
          <IconCircleFilled style= {{color: theme.colors.custom[2]}}/>
        <span style={{ fontFamily: "Poppins", fontWeight: "400" }}>
          {props.name}
        </span>
      </div>
    );
}

export default Amenity;