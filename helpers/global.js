import { createGlobalStyle } from 'styled-components';

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

  .home-tabs .nav-tabs {
    border-bottom: 0;
    background:${({ theme }) => theme.darken_body} !important;
  }

  .home-tabs .nav-tabs .nav-link {
    border: 0;
    color: ${({ theme }) => theme.c_text};
  }
  .home-tabs .nav-tabs .nav-link.active{
    color: ${({ theme }) => theme.dark_text};
  }

  ::-webkit-scrollbar {
    border-radius: 10px;
    background-color: ${({ theme }) => theme.scrollbar_light};
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
  
  .home-tabs .nav-link.active {
    color: #2C2C2C;
    background: #FFE199;
    border-radius: 7px;
    box-shadow: inset 0px 3px 2px 0px rgba(0, 0, 0, 0.02);
  }

  .form-control{
    color:${({ theme }) => theme.text} !important;
    background-color: ${({ theme }) => theme.darken_body} !important;
    border:0;
  }

  .modal-content{
    background-color:${({ theme }) => theme.darken_body};
    border-radius:7px;
  }
  
`;
