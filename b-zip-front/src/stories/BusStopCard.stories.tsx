import React from 'react';
import BusStopCard from '../components/BusStopCard/BusStopCard';

import { BusStopProps } from '@components/BusStopCard/types';

import { Story } from '@storybook/react/types-6-0';

export default {
  title: 'BusStopCard',
  component: BusStopCard,
};

const Template: Story<BusStopProps> = (args) => <BusStopCard {...args} />;

export const Card = Template.bind({});
Card.args = {
  typeOfBuses: HTMLElement,
  sortByTime: true,
  busStopName: `서울스퀘어앞`,
  busStopNumber: `02282`,
  direction: `남대문시장.회현역 방향`,
  walkingTime: 1,
  numberOfBuses: 2,
};
