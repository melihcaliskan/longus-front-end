import ActiveLink from '../components/ActiveLink'
import Container from 'react-bootstrap/Container'
import { FindButton } from '../components/Home/Header'
import React from 'react'
import styled from 'styled-components';
import { withTranslation } from '../i18n'

const Title = styled.h1`
    font-weight:800;
    margin:1em 0;
`

const FourZeroFour = styled.h1`
    font-size:140px;
    font-weight:800;
    margin:0 0 -0.2em 0;
    opacity:.2;
`

const CustomContainer = styled.div`
    margin-top:4em;
    margin-bottom:15em;
    display:flex;
    align-items:flex-start;
    justify-content:space-between;

    h3{
      font-size:18px;
    }
    .no-desktop{
      display:none;
    }
    .back{
      filter:${props => props.isLight ? 'invert(0)' : 'invert(1)'};
    }
    @media only screen and (max-width: 960px) {
      margin-top:2em;
      .no-desktop{
        display:initial;
        margin-bottom:2em;
      }
      .no-mobile{
        display:none;
      }
      align-items:center;
      flex-direction:column;
      text-align:center;
    }
`

const Error = ({ statusCode, t, isLight }) => (
  <>
    <CustomContainer as={Container} isLight={isLight} >
      <img className="no-desktop" src="/assets/404.svg" width={200} />
      <div>
        <FourZeroFour>{statusCode ? statusCode : "404"}</FourZeroFour>
        <Title>{t('notfound')}</Title>
        <h3>{t('detail')}</h3>
        <ActiveLink href="/">
          <FindButton>
            <img className="back" src="/assets/back.svg" style={{ width: '20px', height: '20px' }} />
            <p>{t('gohome')}</p>
          </FindButton>
        </ActiveLink>
      </div>
      <img className="back no-mobile" width={400} src="/assets/404.svg" />
    </CustomContainer>
  </>
)
export default withTranslation('common')(Error)
