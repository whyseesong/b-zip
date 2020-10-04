import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

import HeaderTitle from '@components/Header/HeaderTitle';
import HeaderArrow from '@components/Header/HeaderArrow';

const HeaderContainer = styled.div`
  height: 58px;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const Header: FunctionComponent = () => {
  return (
    <HeaderContainer>
      <HeaderTitle title={'내 직장'} value={'11번가'} isSelected={false} />
      <HeaderArrow color={'#373a3c'} />
      <HeaderTitle title={'버스정류장 선택'} isSelected={false} />
      <HeaderArrow color={'#516bfd'} />
      <HeaderTitle title={'버스 선택'} isSelected={false} />
      <HeaderArrow color={'#9b9c9d'} />
      <HeaderTitle title={'*경로보기'} isSelected={false} />
    </HeaderContainer>
  );
};

export default Header;
