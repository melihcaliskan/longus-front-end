import React, { useEffect, useState } from 'react';
import { i18n, withTranslation } from '../../i18n'

import ActiveLink from '../ActiveLink'
import Facebook from '../svg/Facebook'
import Fade from 'react-reveal/Fade';
import Instagram from '../svg/Instagram'
import Twemoji from '../Twemoji'
import Twitter from '../svg/Twitter'
import styled from 'styled-components';

const Container = styled.div`
  display:flex;
  justify-content:space-between;
  
  margin-top:5em;
  
  border-top:1px solid #E2E2E2;
  padding:2em 4em;

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

div{
  margin-right:10em;

  p{
    line-height:2.2em;
  }
}

@media only screen and (max-width: 960px) {
  div{
    margin:0;
  }
  .no-mobile{
    display:none;
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
    }
  }
  @media only screen and (max-width: 960px) {
    p{
        font-size:14px;
        line-height:2.4em;
    }
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
  }
  return (
    <Container>
      <Left>
        <div>
          <Title>{t('brand')}</Title>
          <p> {t('allrightsreserved')} </p>
          <p dangerouslySetInnerHTML={{ __html: t('madein') }} />
          <p>{t('year')}</p>
          <select onChange={(e) => handleChange(e)} value={language} style={{ marginTop: '0.4em' }}>
            {languageList.map(item =>
              <option value={item.value} selected={language == item.value}>
                {item.name}
              </option>
            )}
          </select>
        </div>
        <div className="no-mobile">
          <Title>{t('quicklinks.title')}</Title>
          <p>{t('quicklinks.home')}</p>
          <p>{t('quicklinks.about')}</p>
          <p>{t('quicklinks.contact')}</p>
        </div>
      </Left>
      <Right>
        <Title>{t('followus')}</Title>
        <div>
          <Facebook />
          <p>Facebook</p>
        </div>
        <div>
          <Instagram />
          <p>Instagram</p>
        </div>
        <div>
          <Twitter />
          <p>Twitter</p>
        </div>
      </Right>
    </Container>
  )
}

Footer.getInitialProps = async () => ({
  namespacesRequired: ['footer'],
})

export default withTranslation('footer')(Footer)
