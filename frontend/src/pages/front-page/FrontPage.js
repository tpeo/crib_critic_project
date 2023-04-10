import React, {useEffect, useState} from 'react';
import SearchContainer from '../../components/SearchContainer';
import Sidebar from '../../components/Sidebar';
import { ImageCard } from '../../components/ImageCard';

function FrontPage(props) {
    const [cardValues, setCardValues] = useState(null);
    useEffect(() => {
      fetch(
        "https://crib-critic-project-git-backend-crib-critiq.vercel.app/apartments/card_list",
        {
          method: "GET",
        }
      )
        .then((response) => response.json())
        .then((data) => setCardValues(data.apartmentNames));
    }, [])
    return (
      <div>
        <SearchContainer />
        <div style={{ display: "flex" }}>
          <Sidebar />
          <div style={{ margin: "1em", display: "flex", flexFlow: "row wrap", justifyContent: "space-evenly"}}>
            {cardValues && cardValues.map(e => <ImageCard
                title={e.name}
                address={e.address}
                image={e.image}
              />)
              
            }
          </div>
        </div>
      </div>
    );
}

export default FrontPage;