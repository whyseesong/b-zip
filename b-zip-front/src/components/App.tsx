import React, { ReactElement } from 'react';

import './default.css';

import Marker from '@components/Marker';
import StationCard from '@components/StationCard';
import HeaderContainer from '@containers/HeaderContainer';
import BusStopArea from '@components/BusStopArea/BusStopArea';

const App = (): ReactElement => {
  return (
    <div>
      <HeaderContainer />
      <Marker />
      <StationCard />
      <BusStopArea />
    </div>
  );
};

export default App;
