import React, { FunctionComponent } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Header from '@components/Header';
import { changeCurStep } from '@store/modules/step';

const HeaderContainer: FunctionComponent = () => {
  const { curStep } = useSelector((state) => ({
    curStep: state.step.curStep,
  }));

  const dispatch = useDispatch();
  const onChangeCurStep = (nextStep) => dispatch(changeCurStep(nextStep));

  return <Header />;
};

export default HeaderContainer;

// todo: 타입 넣기. 리듀서도 싹다 타입 추가하기
// todo: 헤더컴포넌트 스타일링 -> 스타일드컴포넌트, 폰트추가
// todo: 헤더컴포넌트 props 설정
// todo: 헤더타이틀 props가 덜들어갔는데 에러가 안뜨는현상 파보기
// todo: onChangeCurStep에 이전상태로만 변할 수 있도록 조건 추가
