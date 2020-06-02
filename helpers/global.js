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

  ::selection {
    background: rgba(0,0,0,0);
  }
  ::-moz-selection {
    background: rgba(0,0,0,0);
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
  
  .home-tabs .nav-link.active {
    color: #2C2C2C;
    background: #FFE199;
    border-radius: 7px;
    box-shadow: inset 0px 3px 2px 0px rgba(0, 0, 0, 0.02);
  }

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

  .emoji {
    width: auto;
    height: 1em;
    vertical-align: -0.125em;
  }
  
  .form-control{
    color:${({ theme }) => theme.text} !important;
    background-color: ${({ theme }) => theme.darken_body} !important;
    border:0;
  }

  .modal-body, .modal-content{
    background-color:${({ theme }) => theme.body};
    border-radius:7px;
  }

  .modal-content{
    box-shadow: 0px 5px 19px -1px rgba(255,255,255,0.1);
  }

  @media only screen and (max-width: 960px) {
    .home-tabs .nav-tabs{
      transform:scale(0.9);
    }
  }

  .header-search-modal{
    .form-group{
      margin:0
    }
  }


  .form-control{
    background: ${({ theme }) => theme.darken_body};
    color: ${({ theme }) => theme.text};
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
  background: white;
}

input[type=range]:hover::-webkit-slider-thumb {
  background:white;
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
input[type=range]:focus::-ms-fill-lower {
  background: white;
}
input[type=range]:focus::-ms-fill-upper {
  background: white;
}


`;
