import React, { ReactElement } from 'react';
import './style.css';

interface BusStopProps {
  sortByTime: boolean;
  id: number;
  busStopName: string;
  busStopNumber: string;
  direction: string;
  walkingTime?: number;
  numberOfBuses?: number;
  onClick?: () => void;
}

const BusStopCard = ({
  sortByTime,
  id,
  busStopName,
  busStopNumber,
  direction,
  walkingTime,
  numberOfBuses,
}: BusStopProps): ReactElement => (
  <div className="BusStopCard-container">
    <div className="BusStopCard-id">{id}</div>
    <div className="BusStopCard-info">
      <h2 className="BusStopCard-info name">{busStopName}</h2>
      <span className="BusStopCard-info number">
        {busStopNumber} | {direction}
      </span>
    </div>
    <span className="BusStopCard-sortedBy">
      {sortByTime === true ? `${walkingTime}분` : `${numberOfBuses}대`}
    </span>
  </div>
);

BusStopCard.defaultProps = {
  sortByTime: true,
  id: 1,
  busStopName: `서울스퀘어앞`,
  busStopNumber: `02282`,
  direction: `남대문시장.회현역..`,
  walkingTime: 1,
};

export default BusStopCard;
