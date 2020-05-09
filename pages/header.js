import { Link, i18n, withTranslation } from '../i18n'
import React, { useEffect, useState } from 'react';

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
  position: fixed;
  top: 0;
  width: 100%;
  display:flex;
  align-items:${props => props.collapse ? "flex-start" : "center"};;
  flex-direction:${props => props.collapse ? "column" : "row"};
  min-height:${props => props.collapse ? "30vh" : "10vh"};
  justify-content:${props => props.collapse ? "center" : "space-between"};
  padding-left:${props => props.collapse ? "15%" : "0"};
  opacity: ${props => props.opacity};
  background: linear-gradient(75deg, rgba(255,240,255,1) 50%, rgba(225,225,225,1) 100%);
  background-position: bottom;
  background-repeat: no-repeat;
  background-size: cover;
  
  z-index:999;
  
  ${ProductImage}{
    display: ${props => props.collapse ? "block" : "none"};
  }
  ${ProductName}{
    margin-top:${props => props.collapse ? "1em" : "0.3em"};
    padding-left:${props => props.collapse ? "0" : "10%"};
    font-size:${props => props.collapse ? "40px" : "30px"};
    line-height:0.1em;
  }

  @media only screen and (max-width: 1200px) {
    position: relative;
    display:flex;
    flex-direction:column;
    justify-content: flex-start;
    padding-left:0;
    height:45vh;
    ${ProductName} {
      margin-top:1.5em;
      align-self:center;
      font-size: 25px;
    }
    ${ProductImage} {
      width:60%;
      position:initial;
      display: block;
      align-self: center;
    }
}
`

/////////////////////////////////////////////
///////// RENKLERI DOSYAYA ATA !!!!!!!!!!!!!!
/////////////////////////////////////////////

const data = {
  name: "Macbook Pro 2018",
  img: "https://www.notebookcheck.net/fileadmin/_processed_/4/0/csm_MacBook_Pro_concept_white_2d8e43124c.jpg",
  count:{
    issue:5,
    comment:5,
  },
  fit:3,
}

const AnimatedHeader = ({ t }) => {
  const [loading, setLoading] = useState(true);
  const [collapse, setCollapse] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      console.log(currentScrollY, isMobile)
      setCollapse(currentScrollY < 50 && !isMobile)
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, [collapse]);

  return (
    <div>
      <Header collapse={collapse}>
        <ProductName>{data.name}</ProductName>
        <ProductImage width={400} src={data.img} />
        <Info>
          <div>
            <svg width="25" height="20" viewBox="0 0 25 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M2.22222 0H22.2222C23.4495 0 24.4444 0.994923 24.4444 2.22222V17.7778C24.4444 19.0051 23.4495 20 22.2222 20H2.22222C0.994923 20 0 19.0051 0 17.7778V2.22222C0 0.994923 0.994923 0 2.22222 0ZM2.22222 2.22222V17.7778H22.2222V2.22222H2.22222ZM6.66667 15.5556H8.88889V8.88896H6.66667V15.5556ZM13.3335 15.5555H11.1112V4.44438H13.3335V15.5555ZM15.5554 15.5557H17.7776V7.77791H15.5554V15.5557Z" fill="#464646" />
            </svg>
            <p>3 {t('issues')}</p>
          </div>
          <div>
            <svg width="25" height="20" viewBox="0 0 25 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M6 21.8042L12.0868 18H20C21.1046 18 22 17.1046 22 16V4C22 2.89543 21.1046 2 20 2H4C2.89543 2 2 2.89543 2 4V16C2 17.1046 2.89543 18 4 18H6V21.8042ZM11.5132 16L7.99999 18.1958V16H3.99999V4.00001H20V16H11.5132Z" fill="#464646" />
            </svg>
            <p>13 {t('comments')}</p>
          </div>
          <div>
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="10" cy="10" r="10" fill="#17C671" />
            </svg>
            <p>{!isMobile ? t('fit') : t('mobile.fit')}</p>
          </div>
        </Info>
      </Header>
    </div>
  )
}

AnimatedHeader.getInitialProps = async () => ({
  namespacesRequired: ['header'],
})

export default withTranslation('header')(AnimatedHeader)
