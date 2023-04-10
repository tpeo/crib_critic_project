import React, {useEffect, useState} from 'react';
import SearchContainer from '../../components/SearchContainer';
import { ImageCard } from '../../components/ImageCard';
import { useNavigate } from 'react-router-dom';
import {Button} from '@mantine/core';

function UserPage(props) {
    const [cardValues, setCardValues] = useState(null);
    const navigate = useNavigate();
    useEffect(() => {
        fetch(
          "https://crib-critic-project-git-backend-crib-critiq.vercel.app/users/favorites_card_list/test",
          {
            method: "GET",
          }
        )
          .then((response) => response.json())
          .then((data) => setCardValues(data.card_values));
    }, []);
    return (
      <div>
        {cardValues && (
          <>
            <SearchContainer />
            <div>
              <h1>Favorited Apartments for User: Test</h1>
              <div
                style={{
                  margin: "1em",
                  display: "flex",
                  flexFlow: "row wrap",
                  justifyContent: "space-evenly",
                }}
              >
                {cardValues &&
                  cardValues.map((e) => (
                    <ImageCard
                      title={e.name}
                      address={e.address}
                      image={e.image}
                    />
                  ))}
              </div>
            </div>
            <Button color="custom.0" onClick={() => navigate("/")}>
              Return to Home Page
            </Button>
          </>
        )}
      </div>
    );
}

export default UserPage;