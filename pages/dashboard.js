import ActiveLink from '../components/ActiveLink'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import { FindButton } from '../components/Home/Header'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Loader from '../helpers/Loader'
import React from 'react'
import Row from 'react-bootstrap/Row'
import styled from 'styled-components';
import { useRouter } from 'next/router'
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
    margin-top:5em;
    @media only screen and (max-width: 960px) {
    }
`

const Dashboard = ({ isAuth, jwt, t, tReady, isLight, toggleTheme, theme, language }) => {
  const router = useRouter()
  if (!isAuth) {
    router.push("/")
    return <Loader />
  }

  return (
    <>
      <Header isLight={isLight} theme={theme} toggleTheme={toggleTheme} noNav />
      <CustomContainer as={Container}>
        <Row>
          <Col>
            left menu
          </Col>
          <Col xs={6}>
            <h1>Akış</h1>
            <img className="no-desktop" src="/assets/404.svg" width={200} />
            <p> welcome to dashboard {jwt}</p>
          </Col>
          <Col>
            right menu
          </Col>
        </Row>
      </CustomContainer>
      <Footer />
    </>
  )
}
export default withTranslation('common')(Dashboard)
