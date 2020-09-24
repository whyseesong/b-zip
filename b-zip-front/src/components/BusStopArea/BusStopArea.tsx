import React, { FunctionComponent } from 'react';
import BusStopCard from '@components/BusStopCard';

import { busStopListMockData } from '@mocks/busStopList';

const BusStopArea: FunctionComponent = () => {
  return (
    <div>
      {busStopListMockData.map((element) => (
        // eslint-disable-next-line react/jsx-key
        <BusStopCard
          id={element.id}
          typeOfBus={element.typeOfBus}
          isSortByTime={element.isSortByTime}
          busStopName={element.busStopName}
          busStopNumber={element.busStopNumber}
          direction={element.direction}
          walkingTime={element.walkingTime}
        />
      ))}
    </div>
  );
};

export default BusStopArea;
