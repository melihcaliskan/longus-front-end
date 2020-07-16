import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: all 0.25s linear;
  }

  a,p,span {
    color: ${({ theme }) => theme.text};
  }

  /*
  ::selection {
    background: rgba(0,0,0,0);
  }
  ::-moz-selection {
    background: rgba(0,0,0,0);
  }
  */

  ::-webkit-scrollbar {
    border-radius: 10px;
    background-color: ${({ theme }) => theme.scrollbar_light};
    height:15px;
  }

  ::-webkit-scrollbar-track {
    border-radius: 10px;
    background-color: ${({ theme }) => theme.scrollbar_light};
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: ${({ theme }) => theme.scrollbar_dark};
  }

  ::-webkit-scrollbar-thumb:hover {
    border-radius: 10px;
    background-color: ${({ theme }) => theme.scrollbar_hover};
  }

  /* DROPDOWN FOR LOGGED USERS */
  /* TODO: Add more class name to revoke conflicts */
  .dropdown-toggle{
    color: ${({ theme }) => theme.text};
    background-color: ${({ theme }) => theme.body_100};
    padding: 0.6em 1em;

    border:0;
    border-radius:60px;
    box-shadow: 0px 4px 3px 0px rgba(0,0,0,0.15);

  }
  @media only screen and (max-width: 960px) {
    .dropdown-toggle{
      transform:scale(0.8);
    }
  }
  @media only screen and (max-width: 320px) {
    .dropdown-toggle{
      transform:scale(0.7);
    } 
  }

  .dropdown-toggle:hover{
    color:${({ theme }) => theme.text};
    background:${({ theme }) => theme.body_200};
  }

  .emoji {
    width: 1em;
    height: 1em;
    vertical-align: -0.125em;
  }

  .modal-body, .modal-content{
    background-color:${({ theme }) => theme.body};
    border-radius:7px;
  }

  .modal-content{
    box-shadow: 0px 5px 19px -1px rgba(255,255,255,0.1);
  }

  .header-search-modal{
    .form-group{
      margin:0
    }
  }

  .form-control{
    background: ${({ theme }) => theme.body_100};
    color: ${({ theme }) => theme.text};
    border:0;
  }


  input[type=range] {
    -webkit-appearance: none;
    width: 100%;
    margin: 5.85px 0;
  }
  input[type=range]:focus {
    outline: none;
  }
  input[type=range]::-webkit-slider-runnable-track {
  width: 100%;
  height: 8.3px;
  cursor: pointer;
  box-shadow: 1px 1px 3.5px rgba(0, 0, 0, 0), 0px 0px 1px rgba(13, 13, 13, 0);
  background: linear-gradient(90deg, #17C671 0%, #FFB400 52.08%, #C4183C 100%);
  border-radius: 25px;
  border: 0px solid rgba(0, 0, 0, 0);
  }
  input[type=range]::-webkit-slider-thumb {
    box-shadow: 0.7px 0.7px 2.2px #000000, 0px 0px 0.7px #0d0d0d;
    border: 0px solid rgba(0, 0, 0, 0);
    height: 20px;
    width: 20px;
    border-radius: 50px;
    background: #ffffff;
    cursor: pointer;
    -webkit-appearance: none;
    margin-top: -5.85px;
  }

  input[type=range]:focus::-webkit-slider-runnable-track {

  }

  input[type=range]:hover::-webkit-slider-thumb {
  }

  input[type=range]::-moz-range-track {
    width: 100%;
    height: 8.3px;
    cursor: pointer;
    box-shadow: 1px 1px 3.5px rgba(0, 0, 0, 0), 0px 0px 1px rgba(13, 13, 13, 0);
    background: #7f8ca9;
    border-radius: 25px;
    border: 0px solid rgba(0, 0, 0, 0);
  }
  input[type=range]::-moz-range-thumb {
    box-shadow: 0.7px 0.7px 2.2px #000000, 0px 0px 0.7px #0d0d0d;
    border: 0px solid rgba(0, 0, 0, 0);
    height: 20px;
    width: 20px;
    border-radius: 50px;
    background: #ffffff;
    cursor: pointer;
  }
  input[type=range]::-ms-track {
    width: 100%;
    height: 8.3px;
    cursor: pointer;
    background: transparent;
    border-color: transparent;
    color: transparent;
  }
  input[type=range]::-ms-fill-lower {
    background: #707e9f;
    border: 0px solid rgba(0, 0, 0, 0);
    border-radius: 50px;
    box-shadow: 1px 1px 3.5px rgba(0, 0, 0, 0), 0px 0px 1px rgba(13, 13, 13, 0);
  }
  input[type=range]::-ms-fill-upper {
    background: #7f8ca9;
    border: 0px solid rgba(0, 0, 0, 0);
    border-radius: 50px;
    box-shadow: 1px 1px 3.5px rgba(0, 0, 0, 0), 0px 0px 1px rgba(13, 13, 13, 0);
  }
  input[type=range]::-ms-thumb {
    box-shadow: 0.7px 0.7px 2.2px #000000, 0px 0px 0.7px #0d0d0d;
    border: 0px solid rgba(0, 0, 0, 0);
    height: 20px;
    width: 20px;
    border-radius: 50px;
    background: #ffffff;
    cursor: pointer;
    height: 8.3px;
  }
`;
