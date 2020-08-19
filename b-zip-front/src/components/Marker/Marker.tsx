import React, { ReactElement } from 'react';
import './style.css';

const Marker = (): ReactElement => {
  return (
    <div>
      <div>this is marker!</div>
      <div className="container">css style test</div>
      <div className="img-container">css image import test</div>
    </div>
  );
};

export default Marker;
