import React from 'react';
import './busStopCard.css';

export interface BusStopProps {
  sortByTime: boolean;
  id: number;
  busStopName: string;
  busStopNumber: string;
  direction: string;
  walkingTime?: number;
  numberOfBuses?: number;
  onClick?: () => void;
}

export const BusStopCard = ({
  sortByTime,
  id,
  busStopName,
  busStopNumber,
  direction,
  walkingTime,
  numberOfBuses,
}: BusStopProps) => {
  return (
    <div className="BusStopCard-container">
      <div className="BusStopCard-id">{id}</div>
      <div className="BusStopCard-info">
        <h2 className="BusStopCard-info name">{busStopName}</h2>
        <div className="BusStopCard-info number">
          {busStopNumber} | {direction}
        </div>
      </div>
      <span className="BusStopCard-sortedBy">
        {sortByTime === true ? `${walkingTime}분` : `${numberOfBuses}대`}
      </span>
    </div>
  );
};

// BusStopCard.defaultProps = {
//   sortByTime: true,
//   id: 1,
//   busStopName: `서울스퀘어앞`,
//   busStopNumber: `02282`,
//   direction: `남대문시장.회현역..`,
//   walkingTime: 1,
// };

export default BusStopCard;
