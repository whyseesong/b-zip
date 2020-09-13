import React, { ReactElement } from 'react';
import Marker from '@components/Marker';
import StationCard from '@components/StationCard';

const App = (): ReactElement => {
  return (
    <div>
      <Marker />
      <StationCard />
    </div>
  );
};

export default App;
