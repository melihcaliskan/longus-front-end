import { Link, i18n, withTranslation } from '../i18n'
import Marquee, { Motion, randomIntFromInterval } from "react-marquee-slider";
import React, { useContext, useEffect, useState } from 'react';
import { mobileSvgList, svgList } from "../helpers/svgList"

import ActiveLink from "../components/ActiveLink"
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Loader from '../helpers/Loader'
import Login from './login'
import Modal from 'react-bootstrap/Modal'
import Row from 'react-bootstrap/Row'
import Tabs from './tabs'
import fetch from 'isomorphic-unfetch'
import { isMobile } from "react-device-detect";
import { light_colors } from '../helpers/colors'
import styled from 'styled-components';
import useWindowSize from "../helpers/windowSize"

const Header = styled.div`
  opacity: ${props => props.opacity};
  transition:".7s all";
  height:80vh;
  background-image:url("assets/bg.svg");
  background-position: bottom;
  background-repeat: no-repeat;
  background-size: cover;
  
  @media only screen and (max-width: 1260px) {
      height:70vh;
  }

  @media only screen and (max-width: 960px) {
      height:50vh;
  }
`

const Up = styled.div`
  display:flex;
  justify-content:space-between;
  flex-direction:row;
  align-items:center;
  padding:${!isMobile ? "3em 8% 0 8%" : "1em 0 0 2em"};
`
const Brand = styled.h2`
  font-weight:700;
  font-size:30px;
`

const HomeDropdown = styled.div`
  background-color:${({ theme }) => theme.light_bg};
  color:${({ theme }) => theme.dark_text};
  display: inline-flex;
  border-radius:60px;
  padding:0.2em 1em;
  align-items:center;
  justify-content:space-between;
  height:50px;
  cursor:pointer;
  box-shadow: 0px 4px 3px 0px rgba(0,0,0,0.15);
  @media only screen and (max-width: 960px) {
    transform:scale(0.8);
  }
`

const ProfilePicture = styled.img`
  width:30px;
  height:30px;
  border-radius:50%;
  margin-left:0.4em;
`
const Bottom = styled.div`
  margin-top:${!isMobile ? "-25em" : "-30em"};
  padding:0 15%;
  @media only screen and (max-width: 1260px) {
    padding:0 10%;
  }
  @media only screen and (max-width: 960px) {
    padding:0 8vw;
  }
`

const HeroText = styled.h2`
  color:${({ theme }) => theme.light_text};
  margin-top:1em;
  font-size:50px;
  font-weight:800;
  line-height:1.3em;
  width:40vw;

  text-shadow: 0px 1px 3px rgba(0, 0, 0, 0.3);
  
  @media only screen and (max-width: 1260px) {
      margin-top:0.5em;
  }

  @media only screen and (max-width: 960px) {
      width:80vw;
      margin-top:0;
      font-size:35px;
  }
`
const FindButton = styled.div`
  color:${({ theme }) => theme.dark_text};
  display:inline-flex;
  align-items:center;
  cursor:pointer;
  
  border-radius:10px;
  font-size:20px;
  font-weight:400;
  line-height:1.3em;
  background-color:#F4F4F4;
  height:52px;
  
  margin-top:4em;
  padding:0 1em;
  ${"svg"}{
    margin-right:1em;
  }
  box-shadow: 0px 4px 3px 0px rgba(0,0,0,0.15);

  @media only screen and (max-width: 960px) {
        margin-top:2em;
  }
`
//  transform: ${!isMobile ? "none" : "scale(0.7)"};;

/////////////////////////////////////////////
///////// RENKLERI DOSYAYA ATA !!!!!!!!!!!!!!
/////////////////////////////////////////////

const MotionContainer = ({ item, theme }) => {
  return (
    <Motion
      key={`child-1e`}
      initDeg={randomIntFromInterval(0, 360)}
      direction={"clockwise"}
      velocity={10}
      radius={60}>
      <div
        style={{
          width: "60px",
          height: "60px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "50%",
          backgroundColor: theme.light_bg,
          textAlign: "center",
          boxShadow: "0px 4px 3px 0px rgba(0,0,0,0.15)"
        }}>
        {item}
      </div>
    </Motion>
  )
}

function MydModalWithGrid(props) {
  return (
    <Modal style={{ marginTop: '4em' }} {...props} aria-labelledby="contained-modal-title-vcenter">
      <Modal.Body>
        <Login />
      </Modal.Body>
    </Modal>
  );
}

const Home = ({ stars, t, isLight, theme, toggleTheme, tReady }) => {
  const size = useWindowSize();
  //TODO: Rename to isMobile2
  const isMobile2 = size.width < 960
  const [loading, setLoading] = useState(true);
  const [modalShow, setModalShow] = useState(false);
  return (
    <div>
      {loading && !tReady ?
        <Loader />
        : null}
      <Header>
        <Up>
          <ActiveLink white href="/">
            <Brand>{t('brand')}</Brand>
          </ActiveLink>
          <button
            type='button'
            onClick={toggleTheme}>
            {isLight ? "Gündüz" : "Gece"}
          </button>
          <br /><br /><br />
          <p>{stars}</p>
          <br /><br />
          <HomeDropdown>
            <strong>{t('welcome')}, </strong>
            <ProfilePicture width="30px" height="30px" src="https://pbs.twimg.com/profile_images/977536334377168896/FSIxjgf7_400x400.jpg" />
            <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 8L0.803848 0.5L11.1962 0.5L6 8Z" fill="black" />
            </svg>
          </HomeDropdown>
        </Up>
        <div style={{ marginTop: '8em', height: '350px' }}>
          <Marquee velocity={15} minScale={0.7} resetAfterTries={600} scatterRandomly={!isMobile2} onFinish={() => setLoading(false)} debug>
            {svgList.map((item, index) => (
              <MotionContainer key={index} item={item} theme={theme} />
            ))}
          </Marquee>
        </div>
        <Bottom>
          <HeroText>
            <div dangerouslySetInnerHTML={{ __html: t('description') }} />
          </HeroText>
          <FindButton>
            <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M16.9999 31.1667C19.443 31.1667 21.7982 30.5462 23.8842 29.3842L29.8841 29.8842L29.3841 23.8843C30.5461 21.7983 31.1666 19.4432 31.1666 17C31.1666 9.17601 24.824 2.83337 16.9999 2.83337C9.17589 2.83337 2.83325 9.17601 2.83325 17C2.83325 24.8241 9.17589 31.1667 16.9999 31.1667ZM22.8295 26.7214L23.2214 26.4858L26.7824 26.7826L26.4857 23.2215L26.7212 22.8296C27.7709 21.0835 28.3332 19.0847 28.3332 17.0001C28.3332 10.7408 23.2591 5.66673 16.9999 5.66673C10.7407 5.66673 5.66658 10.7408 5.66658 17.0001C5.66658 23.2593 10.7407 28.3334 16.9999 28.3334C19.0846 28.3334 21.0833 27.771 22.8295 26.7214ZM17.0004 24.081C17.783 24.081 18.4175 23.4467 18.4175 22.6643C18.4175 21.8819 17.783 21.2477 17.0004 21.2477C16.2177 21.2477 15.5833 21.8819 15.5833 22.6643C15.5833 23.4467 16.2177 24.081 17.0004 24.081ZM15.5833 19.8334H18.4166V18.4167C18.4166 18.4202 18.4233 18.4128 18.4384 18.3961C18.4756 18.3551 18.5637 18.2581 18.7289 18.127C18.8709 18.0144 18.9149 17.9852 19.2734 17.7579C20.4935 16.9845 21.2499 15.6394 21.2499 14.1667C21.2499 11.8195 19.3471 9.91673 16.9999 9.91673C14.6527 9.91673 12.7499 11.8195 12.7499 14.1667H15.5833C15.5833 13.3843 16.2175 12.7501 16.9999 12.7501C17.7823 12.7501 18.4166 13.3843 18.4166 14.1667C18.4166 14.6588 18.1652 15.1058 17.7564 15.365C17.2977 15.6558 17.2215 15.7062 16.968 15.9073C16.1255 16.5757 15.5833 17.3722 15.5833 18.4167V19.8334Z" fill="black" />
            </svg>
            <p>{t('find-now')}</p>
          </FindButton>
        </Bottom>
      </Header >

      <br /><br /><br /><br />
      <Tabs theme={theme} />

      <div style={{ margin: '2em', padding: '5em' }}>
        <button
          type='button'
          onClick={() => i18n.changeLanguage('tr')}>
          tr
            </button>
        <button
          type='button'
          onClick={() => i18n.changeLanguage('en')}>
          en
            </button>
        <button
          type='button'
          onClick={() => i18n.changeLanguage('de')}>
          de
            </button>

        <br />
        <Button variant="primary" onClick={() => setModalShow(true)}>
          Launch modal with grid
          </Button>

        <MydModalWithGrid show={modalShow} onHide={() => setModalShow(false)} />
        <button
          type='button'
          onClick={toggleTheme}>
          {isLight ? "Gündüz" : "Gece"}
        </button>
        <br />
        <ActiveLink href="/login">
          Login
        </ActiveLink>
        <ActiveLink href="/register">
          Register
        </ActiveLink>
        <ActiveLink href="/header">
          Header Card
        </ActiveLink>
        <ActiveLink href="/issue">
          Issue Card
        </ActiveLink>
        <ActiveLink href="/tabs">
          Tabs
        </ActiveLink>
        <ActiveLink href="/detail">
          Detail
        </ActiveLink>
      </div>
    </div>
  )
}
Home.getInitialProps = async ctx => {
  //namespacesRequired: ['home']
  const { req } = ctx;
  console.log(req)

  const res = await fetch('https://api.github.com/repos/zeit/next.js')
  const json = await res.json()
  return { stars: `Rendered on server with lang: ${req.language} / star count: ${json.stargazers_count}` }
}

export default withTranslation('home')(Home)
