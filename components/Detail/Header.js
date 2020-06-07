import * as Vibrant from 'node-vibrant'

import React, { useEffect, useState } from 'react';

import Fade from 'react-reveal/Fade';
import styled from 'styled-components';
import useWindowSize from "../../helpers/windowSize";
import { withTranslation } from '../../i18n';

const Header = styled.div`
  transition: all .2s;
  display:flex;
  justify-content:space-between;
  background: ${props => `linear-gradient(${props.deg}, ${props.lower} 5%, ${props.higher} 80%)`};
  background-repeat: no-repeat;
  background-size: cover;
  
  margin-top:-9em;
  padding:9em 3em 3em 3em;
    
  @media only screen and (max-width: 960px) {
      margin-top:-7.2em;
      padding:7em 1em 1em 1em;
      flex-direction:column;
      align-items:center;
  }
`

const InfoContainer = styled.div`
  transition:all .2s;
  width:100%;
  display:flex;
  flex:1;
  flex-direction:column;
  padding:80px 0 0 14vw;

  .back-button{
    display:flex;
    align-items:center;
  }

  .back-button svg{
    display:none;
  }
  @media only screen and (max-width: 1260px) {
      padding:80px 50px;
  }
  @media only screen and (max-width: 1024px) {
      padding:80px 30px;
  }
  @media only screen and (max-width: 960px) {
    
    align-items:center;
    flex-direction:column;
    justify-content:space-between;
    
    padding:0px;
    
    .back-button svg{
      margin-top:-10px;
      margin-right:1em;
      width:32px;
      height:40px;
      display:initial;
    }
  }
`

const MobileImage = styled.img`
  transition: all .2s;
  display:none;
  max-height:180px;

  margin:0 0 1em 0;
  
  object-fit:contain;
  mix-blend-mode: multiply;

  @media only screen and (max-width: 960px) {
    display:initial;
  }
`
const ProductImage = styled.img`
  transition: all .2s;
  max-width:400px;
  object-fit:contain;
  mix-blend-mode: multiply;
  
  margin-right:10vw;
  
  @media only screen and (max-width: 1260px) {
    max-width:300px;
  }
  @media only screen and (max-width: 960px) {
    display:none;
  }
`

const ProductName = styled.h2`
  transition: font-size .2s;
  font-size:45px;
  font-weight:800;
  color:${({ theme }) => theme.dark_text};
  margin:0.4em 0;
  @media only screen and (max-width: 1260px) {
    font-size:40px;
  }
  @media only screen and (max-width: 960px) {
    font-size:30px;
  }
`
const Info = styled.div`
  display:flex;
  margin-top:1em;

  div{
    display:flex;
    align-items:center;

    svg{
      margin-right:0.4em;
    }
    
    p {
      color:${({ theme }) => theme.dark_400_text};
      font-size:18px;
      font-weight:600;
    }
    
    margin-right:1em;
    
    @media only screen and (max-width: 960px) {
      p {
        font-size:16px;
      }
    }
  }

  @media only screen and (max-width: 960px) {
      width:100%;
      margin-bottom:1em;
      justify-content:space-evenly;
    }

`
const AnimatedHeader = ({ t, name, photo, count, fit, isMobile, }) => {
  const [loading, setLoading] = useState(true);
  const [collapse, setCollapse] = useState(true);

  const [gradientLower, setLower] = useState('rgb(255, 255, 255)');
  const [gradientHigher, setHigher] = useState('rgb(255, 255, 255)');
  const [gradient, isSetGradient] = useState(false)
  useEffect(() => {
    if (!gradient) {
      Vibrant.from(photo).getPalette()
        .then((palette) => {
          const dark_vibrant = palette.Vibrant.rgb
          const dark_muted = palette.LightVibrant.rgb
          console.log(dark_vibrant, palette)
          setLower(`rgb(${dark_vibrant[0] + 110}, ${dark_vibrant[1] + 110}, ${dark_vibrant[2] + 110})`)
          setHigher(`rgb(${dark_muted[0] + 90}, ${dark_muted[1] + 90}, ${dark_muted[2] + 90})`)
        })
      isSetGradient(true)
    }
  });

  return (
    <Fade duration={400}>
      <Header
        lower={gradientLower}
        higher={gradientHigher}
        deg={!isMobile ? '75deg' : '180deg'}>
        <InfoContainer>
          <div className="back-button">
            <ProductName>{name}</ProductName>
          </div>

          <MobileImage height={250} src={photo} />
          <Info>
            <div>
              <svg width="25" height="20" viewBox="0 0 25 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M2.22222 0H22.2222C23.4495 0 24.4444 0.994923 24.4444 2.22222V17.7778C24.4444 19.0051 23.4495 20 22.2222 20H2.22222C0.994923 20 0 19.0051 0 17.7778V2.22222C0 0.994923 0.994923 0 2.22222 0ZM2.22222 2.22222V17.7778H22.2222V2.22222H2.22222ZM6.66667 15.5556H8.88889V8.88896H6.66667V15.5556ZM13.3335 15.5555H11.1112V4.44438H13.3335V15.5555ZM15.5554 15.5557H17.7776V7.77791H15.5554V15.5557Z" fill="#464646" />
              </svg>
              <p>{count.issue} {!isMobile ? t('issues') : t('mobileIssues')}</p>
            </div>
            <div>
              <svg width="25" height="20" viewBox="0 0 25 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M6 21.8042L12.0868 18H20C21.1046 18 22 17.1046 22 16V4C22 2.89543 21.1046 2 20 2H4C2.89543 2 2 2.89543 2 4V16C2 17.1046 2.89543 18 4 18H6V21.8042ZM11.5132 16L7.99999 18.1958V16H3.99999V4.00001H20V16H11.5132Z" fill="#464646" />
              </svg>
              <p>{count.comment} {!isMobile ? t('comment') : t('mobileComment')}</p>
            </div>
            <div>
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="10" cy="10" r="10" fill="#17C671" />
              </svg>
              <p>{!isMobile ? t('fit') : t('mobileFit')}</p>
            </div>
          </Info>
        </InfoContainer>
        <ProductImage height={250} src={photo} />
      </Header>
    </Fade>
  )
}

AnimatedHeader.getInitialProps = async () => ({
  namespacesRequired: ['header'],
})

export default withTranslation('header')(AnimatedHeader)
