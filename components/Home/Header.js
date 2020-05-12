import { Link, i18n, withTranslation } from '../../i18n'
import Marquee, { Motion, randomIntFromInterval } from "react-marquee-slider";
import React, { useContext, useEffect, useState } from 'react';
import { mobileSvgList, svgList } from "../../helpers/svgList"

import ActiveLink from "../ActiveLink"
import Loader from '../../helpers/Loader'
import Login from '../../pages/login'
import Modal from 'react-bootstrap/Modal'
import Toggle from '../../components/Toggle'
import { isMobile } from "react-device-detect";
import styled from 'styled-components';
import { theme } from '../../helpers/theme'
import useWindowSize from "../../helpers/windowSize"

const Header = styled.div`
    opacity: ${props => props.opacity};
    height:750px;

    background-image:url("assets/bg.svg");
    background-position: bottom;
    background-repeat: no-repeat;
    background-size: cover;
    margin-bottom:10em;

    @media only screen and (max-width: 1260px) {
        height:700px;
        margin-bottom:8em;
    }

    @media only screen and (max-width: 960px) {
        height:450px;
        margin-bottom:4em;
    }
`

const Up = styled.div`
    transition:all 0.7s;
    display:flex;
    padding:3em 4em 0 4em;
    justify-content:space-between;
    flex-direction:row;
    align-items:center;

    @media only screen and (max-width: 960px) {
        padding:1.5em 0 1.5em 1em;
    }
`

const Brand = styled.h2`
    color:${({ theme }) => theme.black_text};
    font-weight:700;
    font-size:30px;
    margin:0;
    @media only screen and (max-width: 960px) {
        font-size:25px;
    }
`
const HomeDropdown = styled.div`
    display: ${props => props.noMobile ? "none" : "inline-flex"};
    background:${({ theme }) => theme.button_bg};
    color:${({ theme }) => theme.text};
    border-radius:60px;
    padding:0.2em 2em;
    margin-right:1em;
    align-items:center;
    justify-content:space-between;
    height:50px;
    cursor:pointer;
    box-shadow: 0px 4px 3px 0px rgba(0,0,0,0.15);
    @media only screen and (max-width: 960px) {
        transform:scale(0.8);
        margin-right:0.2em;
    }
`

const ProfilePicture = styled.img`
  width:30px;
  height:30px;
  border-radius:50%;
  margin-left:0.4em;
`

const MarqueeContainer = styled.div`
    position:absolute;
    top:270px;
    left:0;
    right:0;
    height:450px;
    @media only screen and (max-width: 1260px) {
        height:400px;
    }
    @media only screen and (max-width: 960px) {
        top:220px;
        height:200px;
    }
`


const Bottom = styled.div`
    transition:all 0.7s;
    padding:10vh 15vw;
    position:relative;
    z-index:2;
    
    @media only screen and (max-width: 1260px) {
        padding:7vh 10vw;
    }
    @media only screen and (max-width: 960px) {
        padding:2em;
    }
`

const HeroText = styled.h2`
    color:${({ theme }) => theme.black_text};
    font-size:50px;
    font-weight:800;
    line-height:1.3em;
    text-shadow: 0px 1px 3px rgba(255, 255, 255, 0.3);

    width:500px;
    
    @media only screen and (max-width: 1260px) {
    }
    @media only screen and (max-width: 960px) {
        padding-left:0.8em;
        width:300px;
        font-size:30px;
    }
`
const FindButton = styled.div`
    display:inline-flex;
    align-items:center;
    cursor:pointer;

    border-radius:10px;
    font-size:20px;
    font-weight:400;
    line-height:1.3em;
    background:${({ theme }) => theme.body};
    height:52px;

    margin-top:4em;
    padding:0 1em;

    ${"p"}{
        font-size:20px;
        font-weight:600;
        color:${({ theme }) => theme.text};
    }

    ${"svg"}{
        ${"path"}{
            fill:${({ theme }) => theme.text};
        }
        margin-right:1em;
    }
    box-shadow: 0px 4px 3px 0px rgba(0,0,0,0.15);

    @media only screen and (max-width: 960px) {
        transform:scale(0.8);
        margin-top:2em;
    }
`

const LoginContainer = styled.div`
    display:flex;
    button{
        margin-right:1em;
    }
    @media only screen and (max-width: 960px) {
        button{
        margin-right:0;
    }
    }
`


function LoginModal(props) {
    return (
        <Modal style={{ marginTop: '4em' }} {...props} aria-labelledby="contained-modal-title-vcenter">
            <Modal.Body>
                <Login noSidebar />
            </Modal.Body>
        </Modal>
    );
}

const MarqueeItem = styled.div`
    width:60px;
    height:60px;
    display:flex;
    align-items:center;
    justify-content:center;
    text-align:center;
    border-radius:50%;
    background:${({ theme }) => theme.light_bg};
    box-shadow: 0px 4px 3px 0px rgba(0,0,0,0.15);
    @media only screen and (max-width: 960px) {
        width:45px;
        height:45px;
        ${"svg"}{
            width:25px;
            height:25px;
        }
    }
`

const MotionContainer = ({ item, theme }) => {
    return (
        <Motion
            key={`child-1e`}
            initDeg={randomIntFromInterval(0, 360)}
            direction={"clockwise"}
            velocity={10}
            radius={60}>
            <MarqueeItem>
                {item}
            </MarqueeItem>
        </Motion>
    )
}

const HeaderContainer = ({ t, isLight, theme, toggleTheme, tReady }) => {
    console.log(isLight, toggleTheme)
    const size = useWindowSize();
    //TODO: Rename to isMobile2
    const isMobile2 = size.width < 960
    const [loading, setLoading] = useState(true);
    const [login, setLogin] = useState(false);
    const [modalShow, setModalShow] = useState(false);
    return (
        <Header>
            {/* State index'te tutulup erişilebilir. */}
            {loading && !tReady ?
                <Loader />
                : null}
            <LoginModal show={modalShow} onHide={() => setModalShow(false)} />
            <Up>
                <ActiveLink white href="/">
                    <Brand>{t('brand')}</Brand>
                </ActiveLink>

                {login ?
                    <HomeDropdown>
                        <strong>{t('welcome')},</strong>
                        <ProfilePicture width="30px" height="30px" src="https://pbs.twimg.com/profile_images/977536334377168896/FSIxjgf7_400x400.jpg" />
                        <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6 8L0.803848 0.5L11.1962 0.5L6 8Z" fill="black" />
                        </svg>
                    </HomeDropdown>
                    :
                    <LoginContainer>
                        <Toggle isLight={isLight} toggleTheme={toggleTheme} />
                        <HomeDropdown onClick={() => setModalShow(true)}>
                            <strong>{t('login')}</strong>
                        </HomeDropdown>
                        <HomeDropdown noMobile style={{ background: theme.yellow, color: theme.dark_text }}>
                            <ActiveLink href="/register">
                                <strong>{t('signup')}</strong>
                            </ActiveLink>
                        </HomeDropdown>
                    </LoginContainer>
                }
            </Up>
            <MarqueeContainer>
                <Marquee velocity={15} minScale={0.7} resetAfterTries={600} scatterRandomly={!isMobile2} onFinish={() => setLoading(false)}>
                    {svgList.map((item, index) => (
                        <MotionContainer key={index} item={item} theme={theme} />
                    ))}
                </Marquee>
            </MarqueeContainer>
            <Bottom>
                <HeroText>
                    <div dangerouslySetInnerHTML={{ __html: t('description') }} />
                </HeroText>
                <ActiveLink href="/all">
                    <FindButton>
                        <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M16.9999 31.1667C19.443 31.1667 21.7982 30.5462 23.8842 29.3842L29.8841 29.8842L29.3841 23.8843C30.5461 21.7983 31.1666 19.4432 31.1666 17C31.1666 9.17601 24.824 2.83337 16.9999 2.83337C9.17589 2.83337 2.83325 9.17601 2.83325 17C2.83325 24.8241 9.17589 31.1667 16.9999 31.1667ZM22.8295 26.7214L23.2214 26.4858L26.7824 26.7826L26.4857 23.2215L26.7212 22.8296C27.7709 21.0835 28.3332 19.0847 28.3332 17.0001C28.3332 10.7408 23.2591 5.66673 16.9999 5.66673C10.7407 5.66673 5.66658 10.7408 5.66658 17.0001C5.66658 23.2593 10.7407 28.3334 16.9999 28.3334C19.0846 28.3334 21.0833 27.771 22.8295 26.7214ZM17.0004 24.081C17.783 24.081 18.4175 23.4467 18.4175 22.6643C18.4175 21.8819 17.783 21.2477 17.0004 21.2477C16.2177 21.2477 15.5833 21.8819 15.5833 22.6643C15.5833 23.4467 16.2177 24.081 17.0004 24.081ZM15.5833 19.8334H18.4166V18.4167C18.4166 18.4202 18.4233 18.4128 18.4384 18.3961C18.4756 18.3551 18.5637 18.2581 18.7289 18.127C18.8709 18.0144 18.9149 17.9852 19.2734 17.7579C20.4935 16.9845 21.2499 15.6394 21.2499 14.1667C21.2499 11.8195 19.3471 9.91673 16.9999 9.91673C14.6527 9.91673 12.7499 11.8195 12.7499 14.1667H15.5833C15.5833 13.3843 16.2175 12.7501 16.9999 12.7501C17.7823 12.7501 18.4166 13.3843 18.4166 14.1667C18.4166 14.6588 18.1652 15.1058 17.7564 15.365C17.2977 15.6558 17.2215 15.7062 16.968 15.9073C16.1255 16.5757 15.5833 17.3722 15.5833 18.4167V19.8334Z" fill="black" />
                        </svg>
                        <p>{t('find-now')}</p>
                    </FindButton>
                </ActiveLink>
            </Bottom>
        </Header >
    )
}

HeaderContainer.getInitialProps = async () => ({
    namespacesRequired: ['home'],
})

export default withTranslation('home')(HeaderContainer)