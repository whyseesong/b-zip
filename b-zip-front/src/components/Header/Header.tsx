import React, { FunctionComponent } from 'react';
import HeaderTitle from '@components/Header/HeaderTitle';

const Header: FunctionComponent = () => {
  return (
    <div>
      <HeaderTitle title={'01 직장입력'} isSelected={false} />
      <HeaderTitle title={'02 버스정류장 선택'} isSelected={false} />
      <HeaderTitle title={'03 버스경로 보기'} isSelected={false} />
      <HeaderTitle title={'04 매물정보'} isSelected={false} />
    </div>
  );
};

export default Header;
