import { func, string } from 'prop-types';

import MoonIcon from '../components/svg/Camera';
import React from 'react'
import SunIcon from '../components/svg/LocationNo';
import styled from 'styled-components';

const ToggleContainer = styled.button`
  position: relative;
  display: flex;
  justify-content: space-between;
  background: ${({ theme }) => theme.button_bg};
  width: 6rem;
  height: 3.2rem;
  margin: 0 auto;
  border:0;
  box-shadow: 0px 4px 3px 0px rgba(0,0,0,0.15);
  border-radius: 30px;
  padding: 0.5rem;
  overflow: hidden;
  cursor: pointer;

  img {
    max-width: 2rem;
    height: auto;
    transition: all 0.1s linear;

    &:first-child {
      margin-left:0.5em;
      transform: ${({ lightTheme }) => lightTheme ? 'translateX(0)' : 'translateX(100px)'};
    }

    &:nth-child(2) {
      margin-right:0.5em;
      transform: ${({ lightTheme }) => lightTheme ? 'translateX(-100px)' : 'translateX(0)'};
    }
  }

  @media only screen and (max-width: 960px) {
        transform:scale(0.8);
  }
`;

const Toggle = ({ isLight, toggleTheme }) => {
  return (
    <ToggleContainer lightTheme={isLight} onClick={toggleTheme}>
      <img src="https://image.flaticon.com/icons/svg/1164/1164954.svg" width="224" height="224" alt="Sun free icon" title="Sun free icon" />
      <img src="https://image.flaticon.com/icons/svg/2033/2033921.svg" width="224" height="224" alt="Moon free icon" title="Moon free icon" />
    </ToggleContainer>
  );
};

Toggle.propTypes = {
  theme: string.isRequired,
  toggleTheme: func.isRequired,
}

export default Toggle;