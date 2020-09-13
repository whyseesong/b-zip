import React, { FunctionComponent } from 'react';
import { HeaderTitleProps } from '@components/Header/types';

const HeaderTitle: FunctionComponent<HeaderTitleProps> = ({ title }) => {
  return <div>{title}</div>;
};

export default HeaderTitle;
