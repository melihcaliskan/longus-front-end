import { Link, i18n, withTranslation } from '../i18n'
import React, { useEffect, useState } from 'react';

import ActiveLink from "../components/ActiveLink"
import ArrowLeft from "../components/svg/ArrowLeft"
import { isMobile } from "react-device-detect";
import styled from 'styled-components';

const ProductName = styled.h2`
  font-weight:700;
`

const ProductImage = styled.img`
  position:absolute;
  right:15%;
  top:8%;
  mix-blend-mode:  multiply;
`

const Info = styled.div`
  display:flex;
  align-items:center;
  line-height:6em;
  font-size:16px;
  ${"div"}{
    display:flex;
    align-items:center;
    margin-right:1.5em;
  }
  ${"div svg"}{
    margin-right:0.4em;
  }
  @media only screen and (max-width: 1200px) {
    margin-top:5.5vh;
    width:80%;
    padding:1em 1em 0 1em;
    display:flex;
    align-self:center;
    align-items:flex-start;
    
    background:#F4F4F4;
    border-radius:10px;
    box-shadow: 0px 2px 5px 0px rgba(0,0,0,0.1);
    
    ${"div"}{
      margin:0;
      flex-basis:100%;
      font-size:15px;
      text-align:center;
      box-sizing:border-box;
      flex-direction:column;
      flex-basis:100%;
    }
    ${"div svg"}{
      width:24px;
      height:24px;
    }
  }
`

const Header = styled.div`
  transition: min-height .2s ease-out;
  display:flex;
  width:100%;
  height:20vh;
  background: linear-gradient(75deg, rgba(255,240,255,1) 50%, rgba(225,225,225,1) 100%);
  background-repeat: no-repeat;
  background-size: cover;

`

const data = {
  name: "Macbook Pro 2018",
  img: "https://www.notebookcheck.net/fileadmin/_processed_/4/0/csm_MacBook_Pro_concept_white_2d8e43124c.jpg",
  count: {
    issue: 5,
    comment: 5,
  },
  fit: 3,
}

const AnimatedHeader = ({ t }) => {
  const [loading, setLoading] = useState(true);
  const [collapse, setCollapse] = useState(true);

  return (
    <Header />
  )
}

AnimatedHeader.getInitialProps = async () => ({
  namespacesRequired: ['header'],
})

export default withTranslation('header')(AnimatedHeader)
