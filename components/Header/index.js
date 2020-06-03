import React, { useEffect, useState } from 'react';
import { i18n, withTranslation } from '../../i18n'

import ActiveLink from '../ActiveLink'
import Dropdown from './Dropdown'
import Plus from '../svg/Plus'
import Search from '../svg/Search'
import SearchModal from './Search'
import Twemoji from '../Twemoji'
import styled from 'styled-components';
import { useScroll } from '../../helpers/useScroll'
import useWindowSize from "../../helpers/windowSize";

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
    margin-right:1em;
  }

  @media only screen and (max-width: 960px) {
    .no-mobile{
      display:none;
    }
  }
`
const Right = styled.div`
  display:flex;
  align-items:center;

  .header-buttons{
    display:flex;
  }

  .header-buttons svg{
    cursor:pointer;
    margin-right:2em;
  }

  @media only screen and (max-width: 960px) {
    .header-buttons svg{
      display:none;
    }
  }
`

const Container = styled.div`
  z-index:99;
  transition:.5s padding;
  display:flex;
  justify-content:space-between;
  
  width:100%;

  svg{
    path{
      fill:${({ theme }) => theme.always_dark};
    }
    fill:${({ theme }) => theme.always_dark};
  }

  backdrop-filter:${props => props.isCollapsed ? 'blur(20px)' : 'initial'} ;
  background:${props => props.isCollapsed ? props.theme.header_bg : 'transparent'};
  padding:${props => props.isCollapsed ? "2em 2em 1.5em 2em" : "3em"};

  position: -webkit-sticky;
  position: sticky;
  top:-0.7em;
  
  ${Left}{
    ${Title}, a, p{
      color:${props => props.isCollapsed ? props.theme.title : props.theme.always_dark};
    }
  }
  ${Right}{
    svg, path{
      fill:${props => props.isCollapsed ? props.theme.title : props.theme.always_dark};
    }
  }

  @media only screen and (max-width: 960px) {
    padding:${props => props.isCollapsed ? "1.5em 0.5em 1em 1.5em" : "2em 1em 2em 2em"};
    backdrop-filter:${props => props.isCollapsed ? 'blur(3px)' : 'initial'} 
  }

  box-shadow:${props => props.isCollapsed ? "0px 3px 8px 0px rgba(0,0,0,0.05)" : "none"};
`

const Header = ({ t, toggleTheme, isLight, reverse }) => {
  const [modalShow, setModalShow] = useState(false);

  const { scrollY } = useScroll();
  let isCollapsed = scrollY > 200
  
  const size = useWindowSize();
  const isMobile = size.width < 960
  
  return (
    <Container reverse={reverse} isCollapsed={isCollapsed}>
      <SearchModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
      <Left>
        <ActiveLink href="/"><Title>{t('brand')}</Title></ActiveLink>
        <ActiveLink href="/issues"><p className="no-mobile">{t('issues')}</p></ActiveLink>
        <ActiveLink href="/categories"><p className="no-mobile">{t('categories')}</p></ActiveLink>
      </Left>
      <Right>
        <div className="header-buttons">
          <ActiveLink href="/add"><Plus /></ActiveLink>
          <span onClick={() => setModalShow(true)}>
            <Search />
          </span>
        </div>
        <Dropdown isMobile={isMobile} toggleTheme={toggleTheme} isLight={isLight} />
      </Right>
    </Container>
  )
}

Header.getInitialProps = async () => ({
  namespacesRequired: ['commonheader'],
})

export default withTranslation('commonheader')(Header)
