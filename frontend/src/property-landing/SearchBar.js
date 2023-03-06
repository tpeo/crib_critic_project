import React, {useState, forwardRef} from 'react';
import {ActionIcon, Autocomplete, Group, Avatar, Text} from '@mantine/core';
import logo from '../images/Eyeglass.svg';


const AutoCompleteItem = forwardRef(
  ({ description, value, image, ...others }, ref) => (
    <div ref={ref} {...others}>
      <Group noWrap>
        <Avatar src={image} />
        <div>
          <Text>{value}</Text>
          <Text size="xs" color="dimmed">
            {description}
          </Text>
        </div>
      </Group>
    </div>
  )
);

const data = [
  {
    image: 'https://medialibrarycf.entrata.com/13531/MLv3/9/36/2022/3/25/42496/5ec2b05a2f4533.10479102437.jpg',
    label: 'Lark Austin',
    value: 'Lark',
    description: '21st x Nueces',
  },

  {
    image: 'https://ion-austin.com/wp-content/uploads/sites/6/2020/01/IAUS_location_ver_spot.png',
    label: 'Ion Austin',
    value: 'Ion',
    description: '21st x Nueces',
  }
];

function SearchBar(props) {

    const [search, setSearch] = useState('');
    
    return (
      <>
        <Autocomplete
          sx={{width: '80%', marginTop: '4%'}}
          input={{
            style: {
              '::placeholder': {
                fontFamily: 'Poppins',
                fontWeight: '700',
                textAlign: 'center' // set your desired font family here
              }}}}
          placeholder="Search Apartments"
          itemComponent={AutoCompleteItem}
          data={data}
          onChange={(e) => setSearch(e)}
          filter={(value, item) =>
            item.value.toLowerCase().includes(value.toLowerCase().trim()) ||
            item.description.toLowerCase().includes(value.toLowerCase().trim())
          }
          rightSection={
            <ActionIcon size={32} radius="xl" variant="filled" color="custom.0">
              <img src={logo} alt="Crib Critiq Logo" width="80%"></img>
            </ActionIcon>
          }
        />
      </>
    );
}

export default SearchBar;