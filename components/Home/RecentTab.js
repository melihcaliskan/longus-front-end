import { i18n, withTranslation } from '../../i18n'

import Button from '../Button'
import Card from "../Home/Card"
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import IssueCard from '../Issue/IssueCard'
import React from 'react';
import Row from 'react-bootstrap/Row'
import styled from 'styled-components';

export const CardContainer = styled.div`
  overflow-x:scroll;
  -webkit-overflow-scrolling: touch;
  
  display: grid;
  grid-template-columns: repeat(10, 1fr);

  gap: 0 30px;
  padding-bottom:1em;

  @media only screen and (max-width: 1440px) {
  }
`
export const TabTitle = styled.div`
  background:${({ theme }) => theme.tab_bg};
  color:${({ theme }) => theme.dark_text_200};
  padding:0.4em 1em;
  display:inline-flex;
  text-transform: uppercase;
  border-radius: 7px;
  font-weight: 700;
  margin-bottom: 1em;
  box-shadow: inset 0px 0px 10px 1px rgba(0,0,0,0.05);
`

export const CustomContainer = styled.div`
  display:inline-flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  margin:0;
`

const List = ({ data, language = i18n.language, isLight }) => {
  return (
    <CardContainer>
      {data.map((item, id) => (
        <IssueCard key={id} data={item} isLight={isLight} lang={language} />
      ))}
    </CardContainer>
  )
}

const CustomTab = ({ t, theme, data, isLight }) => {

  return (
    <CustomContainer as={Container} style={{ marginBottom: '5em' }}>
      <TabTitle>{t('issues')}</TabTitle>
      <Col>
        <List data={data} isLight={isLight} />
      </Col>
      <Button shadow href="/issues" style={{ marginTop: '2em', alignSelf: 'center', width: '180px' }}>
        {t('seeall')}
      </Button>
    </CustomContainer>
  )
}

CustomTab.getInitialProps = async () => ({
  namespacesRequired: ['home'],
})

export default withTranslation('home')(CustomTab)
