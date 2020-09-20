import React, { ReactElement } from 'react';

import './default.css';

import Marker from '@components/Marker';
import StationCard from '@components/StationCard';
import HeaderContainer from '@containers/HeaderContainer';
import BusStopCard from '@components/BusStopCard';

const App = (): ReactElement => {
  return (
    <div>
      <HeaderContainer />
      <Marker />
      <StationCard />
      <BusStopCard />
    </div>
  );
};

export default App;
