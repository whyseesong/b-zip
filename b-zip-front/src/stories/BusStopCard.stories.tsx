import React from 'react';

import { Story } from '@storybook/react/types-6-0';

import { BusStopCard, BusStopProps } from './BusStopCard';

export default {
  title: 'BusStopCard',
  component: BusStopCard,
};

const Template: Story<BusStopProps> = (args) => <BusStopCard {...args} />;

export const Card = Template.bind({});
Card.args = {
  sortByTime: true,
  id: 1,
  busStopName: `서울스퀘어앞`,
  busStopNumber: `02282`,
  direction: `남대문시장.회현역..`,
  walkingTime: 1,
  numberOfBuses: 2,
};