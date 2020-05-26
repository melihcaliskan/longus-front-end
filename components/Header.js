import React, { useEffect, useState } from 'react';
import { i18n, withTranslation } from '../i18n'

import ActiveLink from './ActiveLink'
import Facebook from './svg/Facebook'
import Fade from 'react-reveal/Fade';
import Instagram from './svg/Instagram'
import Plus from './svg/Plus'
import Search from './svg/Search'
import Twemoji from './Twemoji'
import Twitter from './svg/Twitter'
import styled from 'styled-components';
import { useScroll } from '../helpers/useScroll'

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
//  padding:2em 4em 1em 4em;

const Container = styled.div`
  transition:.5s all;
  display:flex;
  justify-content:space-between;
  
  width:100%;
  background:${({ theme }) => theme.body};
  border-bottom:${props => props.border ? "1px solid #E2E2E2" : "none"};
  padding:${props => props.border ? "2em" : "3em"};

  position:fixed;
  @media only screen and (max-width: 960px) {
    padding:1em 2em;
  }
`

const Title = styled.h2`
  font-weight:700;
  @media only screen and (max-width: 960px) {
    font-size:24px;
  }
`

const Left = styled.div`
  display:flex;
  align-items:center;

  h2{
    margin:0 1.5em 0 0;
  }

  a{
    font-weight:600;
    color:${({ theme }) => theme.text} !important;
  }
`
const Right = styled.div`
  display:flex;
  align-items:center;

  .header-buttons svg{
    margin-right:2em;
  }
  @media only screen and (max-width: 960px) {
  }
`

const Header = ({ t }) => {
  const { scrollY } = useScroll();
  let border = scrollY > 100

  return (
    <Container border={border}>
      <Left>
        <Title>{t('brand')}</Title>
        <ActiveLink href="/">{t('categories')}</ActiveLink>
      </Left>
      <Right>
        <div className="header-buttons">
          <Plus />
          <Search />
        </div>
        <HomeDropdown>
          <strong>{t('welcome')},</strong>
          <ProfilePicture width="30px" height="30px" src="https://pbs.twimg.com/profile_images/977536334377168896/FSIxjgf7_400x400.jpg" />
          <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 8L0.803848 0.5L11.1962 0.5L6 8Z" fill="black" />
          </svg>
        </HomeDropdown>
      </Right>
    </Container>
  )
}

Header.getInitialProps = async () => ({
  namespacesRequired: ['commonheader'],
})

export default withTranslation('commonheader')(Header)
