import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

import { HeaderTitleProps } from '@components/Header/types';

const HeaderDiv = styled.div`
  text-align: center;
`;

const HeaderTitle: FunctionComponent<HeaderTitleProps> = ({ title }) => {
  return <HeaderDiv>{title}</HeaderDiv>;
};

export default HeaderTitle;
