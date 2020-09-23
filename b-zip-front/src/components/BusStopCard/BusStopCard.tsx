import React, { ReactElement } from 'react';
import { BusStopProps } from '@components/BusStopCard/types';
import styled from 'styled-components';

const Container = styled.div`
  width: 16.5em;
  height: 5.25em;
  border: 0.063em solid #efefef;
  border-radius: 0.5em;
  padding: 0.75em 1em;
`;

const Sorted = styled.div`
  font-size: 0.688em;
  color: #516bfd;
  font-weight: 700;
  margin-bottom: 0.125em;
  line-height: 1.25em;
`;

const Name = styled.div`
  font-size: 0.938em;
  color: #373a3c;
  font-weight: 700;
  margin-bottom: 0.063em;
  line-height: 2em;
`;

const Info = styled.div`
  font-size: 0.75em;
  color: #9ea3a7;
  line-height: 1em;
`;

const BusIcon = styled.img`
  width: auto;
  height: 0.7em;
  margin-left: auto;
`;

const Column = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BusStopCard = ({
  typeOfBus,
  sortByTime,
  busStopName,
  busStopNumber,
  direction,
  walkingTime,
  numberOfBuses,
}: BusStopProps): ReactElement => {
  return (
    <Container>
      <Column>
        <Sorted>
          {sortByTime === true
            ? `도보 ${walkingTime}분`
            : `버스 ${numberOfBuses}대`}
        </Sorted>
        <BusIcon src={typeOfBus} />
      </Column>
      <Name>{busStopName}</Name>
      <Info>
        {busStopNumber} | {direction}
      </Info>
    </Container>
  );
};

BusStopCard.defaultProps = {
  typeOfBus: `../src/assets/icon/bus-blue@2x.png`,
  sortByTime: true,
  busStopName: `서울스퀘어앞`,
  busStopNumber: `02282`,
  direction: `남대문시장.회현역 방향`,
  walkingTime: 1,
};

export default BusStopCard;
