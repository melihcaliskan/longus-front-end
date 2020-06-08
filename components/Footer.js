import React, { useEffect, useState } from 'react';
import { i18n, withTranslation } from '../i18n'

import ActiveLink from './ActiveLink'
import Facebook from './svg/Facebook'
import Instagram from './svg/Instagram'
import Router from "next/router"
import Twitter from './svg/Twitter'
import links from '../helpers/footerLinks'
import styled from 'styled-components';

const Container = styled.div`
  display:flex;
  justify-content:space-between;
  
  margin-top:5em;
  
  border-top: ${({ theme }) => `1px solid ${theme.darken_body}`};
  padding:2em 4em;

  @media only screen and (max-width: 960px) {
    padding:1em 2em;
  }
`

const Title = styled.h2`
  color:${({ theme }) => theme.text};
  font-weight:700;
  @media only screen and (max-width: 960px) {
    font-size:24px;
  }
`

const Left = styled.div`
display:flex;

div{
  margin-right:10em;

  p{
    line-height:2.2em;
  }
}

@media only screen and (max-width: 960px) {
  justify-content:space-between;
  width:100%;
  div{
    margin:0;
  }
  p{
    font-size:14px;
    line-height:2.4em;
  }
}
`
const Right = styled.div`
  p{
    line-height:2.2em;
  }
  
  div{
    display:flex;
    align-items:center;
    
    svg{
      margin-right:0.6em;
      path{
        fill: ${({ theme }) => theme.detail_text};
      }
    }
  }
  @media only screen and (max-width: 960px) {
    display:none;
  }
`

const languageList = [
  {
    name: "English",
    value: "en",
  },
  {
    name: "Türkçe",
    value: "tr",
  },
  {
    name: "Espanol",
    value: "es",
  },
  {
    name: "Deutsche",
    value: "de",
  },
  {
    name: "Français",
    value: "fr",
  },
  {
    name: "Indian (हिन्दी)",
    value: "hi",
  },
  {
    name: "Português",
    value: "pg",
  },
  {
    name: "русский (Russian)",
    value: "ru",
  },
  {
    name: "Svenska",
    value: "sv",
  },

  {
    name: "한국어 (Korean)",
    value: "ko",
  },
  {
    name: "日本語 (Japan)",
    value: "ja",
  },
]

const Footer = ({ t }) => {
  const [language, setLanguage] = useState(i18n.language);
  const handleChange = (e) => {
    i18n.changeLanguage(e.target.value)
    setLanguage(e.target.value)
    //Router.reload()
  }
  return (
    <Container>
      <Left>
        <div>
          <ActiveLink href={'/'}>
            <Title>{t('brand')}</Title>
          </ActiveLink>
          <p> {t('allrightsreserved')} </p>
          <p dangerouslySetInnerHTML={{ __html: t('madein') }} />
          <p>{t('year')}</p>
          <select onChange={(e) => handleChange(e)} value={language} style={{ marginTop: '0.4em' }}>
            {languageList.map(item =>
              <option key={item.value} value={item.value}>
                {item.name}
              </option>
            )}
          </select>
        </div>
        <div>
          <Title>{t('title')}</Title>
          <ActiveLink href={links.home}>
            <p>{t('home')}</p>
          </ActiveLink>
          <ActiveLink href={links.aboutus}>
            <p>{t('about')}</p>
          </ActiveLink>
          <ActiveLink href={links.contact}>
            <p>{t('contact')}</p>
          </ActiveLink>
        </div >
      </Left >
      <Right>
        <Title>{t('followus')}</Title>
        <ActiveLink href={links.facebook}>
          <div>
            <Facebook />
            <p>Facebook</p>
          </div>
        </ActiveLink>
        <ActiveLink href={links.instagram}>
          <div>
            <Instagram />
            <p>Instagram</p>
          </div>
        </ActiveLink>
        <ActiveLink href={links.twitter}>
          <div>
            <Twitter />
            <p>Twitter</p>
          </div>
        </ActiveLink>

      </Right>
    </Container >
  )
}

Footer.getInitialProps = async () => ({
  namespacesRequired: ['footer'],
})

export default withTranslation('footer')(Footer)
