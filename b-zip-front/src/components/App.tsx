import React, { ReactElement } from 'react';

import './default.css';

import Marker from '@components/Marker';
import StationCard from '@components/StationCard';
import HeaderContainer from '@containers/HeaderContainer';

const App = (): ReactElement => {
  return (
    <div>
      <HeaderContainer />
      <Marker />
      <StationCard />
    </div>
  );
};

export default App;
