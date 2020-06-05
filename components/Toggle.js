import React from 'react'
import styled from 'styled-components';

const ToggleContainer = styled.button`
  position: relative;
  display: flex;
  align-items:center;
  justify-content: space-between;
  background: ${({ theme }) => theme.body_100};
  width: 6rem;
  height: 3.2rem;
  margin: 0 auto;
  border:0;
  box-shadow: 0px 4px 3px 0px rgba(0,0,0,0.15);
  border-radius: 30px;
  padding: 0.5rem;
  overflow: hidden;
  cursor: pointer;

  svg {
    max-width: 2rem;
    height: auto;
    transition: all 0.4s ease-out;

    &:first-child {
      margin-left:0.5em;
      transform: ${({ lightTheme }) => lightTheme ? 'translateX(0)' : 'translateX(100px)'};
      path{
        fill: ${({ theme, lightTheme }) => theme.title}
      }
    }

    &:nth-child(2) {
      margin-right:0.5em;
      transform: ${({ lightTheme }) => lightTheme ? 'translateX(-100px)' : 'translateX(0)'};
      path{
        fill: ${({ theme, lightTheme }) => theme.title}
      }
    }
  }

  @media only screen and (max-width: 960px) {
        transform:scale(0.8);
  }
`;



const Toggle = ({ isLight, toggleTheme, style }) => {
  return (
    <ToggleContainer style={style} lightTheme={isLight} onClick={toggleTheme}>
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M12 4.07089C11.6734 4.02417 11.3395 4 11 4C10.6605 4 10.3266 4.02417 10 4.07089V0.044843C10.3294 0.0151626 10.6629 0 11 0C11.3371 0 11.6706 0.0151626 12 0.044843V4.07089ZM6 11C6 13.7614 8.23858 16 11 16C13.7614 16 16 13.7614 16 11C16 8.23858 13.7614 6 11 6C8.23858 6 6 8.23858 6 11ZM14 11C14 12.6569 12.6569 14 11 14C9.34315 14 8 12.6569 8 11C8 9.34315 9.34315 8 11 8C12.6569 8 14 9.34315 14 11ZM12 21.9552V17.9291C11.6734 17.9758 11.3395 18 11 18C10.6605 18 10.3266 17.9758 10 17.9291V21.9552C10.3294 21.9848 10.6629 22 11 22C11.3371 22 11.6706 21.9848 12 21.9552ZM17.9291 10H21.9552C21.9848 10.3294 22 10.6629 22 11C22 11.3371 21.9848 11.6706 21.9552 12H17.9291C17.9758 11.6734 18 11.3395 18 11C18 10.6605 17.9758 10.3266 17.9291 10ZM4 11C4 10.6605 4.02417 10.3266 4.07089 10H0.044843C0.0151626 10.3294 0 10.6629 0 11C0 11.3371 0.0151626 11.6706 0.044843 12H4.07089C4.02417 11.6734 4 11.3395 4 11ZM15.1922 5.39362L18.0391 2.54673C18.5521 2.9744 19.0256 3.44791 19.4533 3.96094L16.6064 6.80783C16.2049 6.27173 15.7283 5.79513 15.1922 5.39362ZM2.54673 3.96094L5.39362 6.80783C5.79513 6.27173 6.27173 5.79513 6.80783 5.39362L3.96094 2.54673C3.44791 2.9744 2.9744 3.44791 2.54673 3.96094ZM16.6064 15.1922L19.4533 18.0391C19.0256 18.5521 18.5521 19.0256 18.0391 19.4533L15.1922 16.6064C15.7283 16.2049 16.2049 15.7283 16.6064 15.1922ZM3.96094 19.4533L6.80783 16.6064C6.27173 16.2049 5.79513 15.7283 5.39362 15.1922L2.54673 18.0391C2.9744 18.5521 3.44791 19.0256 3.96094 19.4533Z" fill="black" />
      </svg>
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M10 7C10 5.02543 10.8205 3.18477 12.2398 1.86765L13.7174 0.496474L11.7317 0.149561C11.1634 0.0502852 10.5847 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20C13.3854 20 16.4843 18.3038 18.3266 15.5396L19.4432 13.8643L17.4336 13.9868C17.2898 13.9956 17.1452 14 17 14C13.134 14 10 10.866 10 7ZM10 18C5.58172 18 2 14.4183 2 10C2 5.74791 5.31735 2.27062 9.50514 2.01506C8.53668 3.46848 8 5.19184 8 7C8 11.439 11.2137 15.1274 15.4414 15.8655C13.9878 17.2153 12.061 18 10 18Z" fill="#656565" />
      </svg>
    </ToggleContainer>
  );
};

export default Toggle;