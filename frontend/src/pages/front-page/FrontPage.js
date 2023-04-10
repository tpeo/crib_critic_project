import React from 'react';
import SearchContainer from '../../components/SearchContainer';
import Sidebar from '../../components/Sidebar';
import { ImageCard } from '../../components/ImageCard';
import Map from '../../components/Map'

function FrontPage(props) {
    return (
      <div>
        <SearchContainer />
        <div style={{ display: "flex" }}>
          <Sidebar />
          <div style={{ margin: "1em" }}>
            <ImageCard
              title="Lark Austin"
              address="2100 Nueces St, Austin, TX 78705"
              image="https://r-o.com/uploads/portfolio/1_947591442_2.JPG"
            />
          </div>
          <div>
            <Map lat={30.2842} lng={-97.7444} />
          </div>
        </div>
      </div>
    );
}

export default FrontPage;