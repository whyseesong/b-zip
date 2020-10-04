import React, { FunctionComponent } from 'react';
import { HeaderArrowProps } from '@components/Header/types';

const HeaderArrow: FunctionComponent<HeaderArrowProps> = ({
  color = '#373a3c',
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 16 16"
    >
      <g id="icon-arrow-right" transform="translate(-464 -21)">
        <path
          id="패스_63"
          data-name="패스 63"
          d="M8,11400l6,6-6,6"
          transform="translate(461 -11376.5)"
          fill="none"
          stroke={color}
          stroke-linejoin="round"
          stroke-width="2"
        />
        <rect
          id="사각형_154"
          data-name="사각형 154"
          width="16"
          height="16"
          transform="translate(464 21)"
          fill="none"
        />
      </g>
    </svg>
  );
};

export default HeaderArrow;
