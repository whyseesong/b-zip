import React from 'react';

import Header from '@components/Header';
import { Meta, Story } from '@storybook/react';

export default {
  title: 'B-zip/Header',
  component: Header,
} as Meta;

const Template: Story = () => <Header />;

export const defaultHeader = Template;
