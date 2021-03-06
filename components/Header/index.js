import React, { useEffect, useState } from 'react';
import { i18n, withTranslation } from '../../i18n'

import ActiveLink from '../ActiveLink'
import Dropdown from './Dropdown'
import Plus from '../svg/Plus'
import Search from '../svg/Search'
import SearchModal from './Search'
import Twemoji from '../Twemoji'
import styled from 'styled-components';
import { useRouter } from "next/router";
import { useScrollPosition } from '../../helpers/useScroll'
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

  .nav-item{
    margin-right:2em
  }
  
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
  transition:${props => props.isCollapsed ? '.2s padding' : 'initial'} ;;
  display:flex;
  justify-content:space-between;
      
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
      color:${props => props.isCollapsed ? props.theme.title : props.theme.body_700};
    }
  }
  ${Right}{
    svg, path{
      fill:${props => props.isCollapsed ? props.theme.title : props.theme.body_700};
    }
  }

  .active{
    font-weight: 800;
  }

  @media only screen and (max-width: 960px) {
    padding:${props => props.isCollapsed ? "1.5em 0.5em 1em 1.5em" : "2em 1em 2em 2em"};
    backdrop-filter:${props => props.isCollapsed ? 'blur(3px)' : 'initial'} 
  }

  box-shadow:${props => props.isCollapsed ? "0px 3px 8px 0px rgba(0,0,0,0.05)" : "none"};
`

const Header = ({ isAuth, userData, style, t, toggleTheme, isLight, reverse, query = useRouter(), noNav = false }) => {
  const [modalShow, setModalShow] = useState(false);
  const [isCollapsed, setCollapsed] = useState(false);

  useScrollPosition(
    ({ prevPos, currPos }) => {
      const isVisible = prevPos.y > 150 && currPos.y > 150
      setCollapsed(isVisible)
    },
    [isCollapsed]
  )

  const size = useWindowSize();
  const isMobile = size.width < 960

  return (
    <Container style={style} reverse={reverse} isCollapsed={isCollapsed}>
      <SearchModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
      <Left>
        <ActiveLink href={isAuth ? "/dashboard" : "/"}><Title>{t('brand')}</Title></ActiveLink>
        {!noNav &&
          <>
            <ActiveLink href="/all"><p className={`${query.pathname == "/all" && "active"} nav-item no-mobile`}>{t('devices')}</p></ActiveLink>
            <ActiveLink href="/issues"><p className={`${query.pathname == "/issues" && "active"} nav-item no-mobile`}>{t('issues')}</p></ActiveLink>
            <ActiveLink href="/categories"><p className={`${query.pathname == "/categories" && "active"} nav-item no-mobile`}>{t('categories')}</p></ActiveLink>
          </>
        }
      </Left>
      <Right>
        <div className="header-buttons">
          <ActiveLink href="/add"><Plus /></ActiveLink>
          <span onClick={() => setModalShow(true)}>
            <Search />
          </span>
        </div>
        <Dropdown userData={userData} isAuth={isAuth} isMobile={isMobile} toggleTheme={toggleTheme} isLight={isLight} />
      </Right>
    </Container>
  )
}

Header.getInitialProps = async () => ({
  namespacesRequired: ['commonheader'],
})

export default withTranslation('commonheader')(Header)
