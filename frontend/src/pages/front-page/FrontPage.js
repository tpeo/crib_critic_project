import React from 'react';
import SearchContainer from '../../components/SearchContainer';
import Sidebar from '../../components/Sidebar';

function FrontPage(props) {
    return (
      <div>
        <SearchContainer />
        <Sidebar/>
      </div>
    );
}

export default FrontPage;