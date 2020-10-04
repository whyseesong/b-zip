import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

import { HeaderTitleProps } from '@components/Header/types';

const HeaderDiv = styled.div`
  height: 40px;
  width: 160px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const TitleDiv = styled.div`
  font: normal normal normal
    ${(props) => (props.hasValue ? '10px/15px' : '14px/20px')} SpoqaHanSans;
  color: #9ea3a7;
`;

const ValueDiv = styled.div`
  font: normal normal bold 14px/20px SpoqaHanSans;
`;

const HeaderTitle: FunctionComponent<HeaderTitleProps> = ({ title, value }) => {
  return (
    <HeaderDiv>
      <TitleDiv hasValue={value}>{title}</TitleDiv>
      <ValueDiv>{value}</ValueDiv>
    </HeaderDiv>
  );
};

export default HeaderTitle;
