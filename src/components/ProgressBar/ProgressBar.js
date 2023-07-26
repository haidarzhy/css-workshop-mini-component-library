/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import {COLORS} from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const heights = {
  'small': '8px',
  'medium': '12px',
  'large': '24px',
}

const ProgressBar = ({value, size}) => {
  console.log(heights[size]);
    return <>
        <Wrapper size={size} style={{ '--height': heights[size]}}>
            <Bar value={value}>
              <VisuallyHidden>Progress {value}%</VisuallyHidden>
            </Bar>
        </Wrapper>
    </>;
};

const Wrapper = styled.div`
  background-color: ${COLORS["transparentGray15"]};
  width: 370px;
  height: var(--height);
  padding: ${ p => p.size === 'large' ? '4px' : 0 };
  overflow: hidden;
  border-radius: ${ p => p.size === 'large' ? '8px' : '4px' };
  box-shadow: 0px 2px 4px 0px #80808059 inset;
`
const Bar = styled.div`
  background-color:  ${COLORS["primary"]};
  width: ${ p => p.value }%;
  height: 100%;
  border-bottom-left-radius: 4px;
  border-top-left-radius: 4px;
  border-top-right-radius: ${ p => p.value >= 100 ? '4px' : undefined };
  border-bottom-right-radius: ${ p => p.value >= 100 ? '4px' : undefined };
`

export default ProgressBar;
