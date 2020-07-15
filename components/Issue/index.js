import { Question, Sad, Share, Tick } from '../svg/IssueCardSvg'
import React, { useState } from 'react';
import { Router, withTranslation } from '../../i18n'
import { availableLangKey, handlePhoto } from '../../helpers/functions'

import { API_URL_W } from '../../helpers/urls'
import EffectCard from './EffectCard'
import { POST } from '../../helpers/network'
import { light_colors } from "../../helpers/colors"
import styled from 'styled-components';

const ReactMarkdown = require('react-markdown')

const IssueContainer = styled.div`
  display:flex;
  flex-direction:column;
  background:${({ theme }) => theme.body};
`

const Content = styled.div`
`

const Title = styled.h2`
  color:${({ theme }) => theme.title};
  margin:0;
  font-weight:700;
  font-size:21px;
  margin-top:2em;
`

const Text = styled.p`
  color:${({ theme }) => theme.detail_text};
  margin:0.4em 0 0.5em 0;
  font-size:18px;
  line-height:1.4em;
`

const Info = styled.div`
  display:flex;
  flex-direction:column;
  margin-top:2em;
  .added-by{
    color:${({ theme }) => theme.detail_text};
    font-size:20px;
    font-weight:700;
  }
  .user-info {
    cursor:pointer;
    display:flex;
    margin-top:0.4em;
    font-size:24px;
    font-weight:700;
    img{
      width:32px;
      height:32px;
      border-radius:50%;
      object-fit:contain; 
      margin-right:0.5em;
    }
  }
`

const IconB = styled.button`
  display:inline-flex;
  justify-content:space-between;
  align-items:center;
  cursor:pointer;
  
  min-width:200px;
  height:55px;
  line-height:1.6em;
  padding:1em;
  margin-right:1em;
  border-radius:6px;
  
  background:${props => props.active ? "red" : props.theme.dark_button};
  color:${props => props.color};
  border:0;

  transition: color .4s, background-color .4s;

  ${"svg"}{
    width:34px;
    padding-left:0.6em;
    margin-right:1em;
    fill:${props => props.color};
    ${"path"}{
      fill:${props => props.color};
    }
  }
  @media only screen and (max-width: 960px) {
    
  }
`

const Buttons = styled.div`
  display:flex;
  justify-content:space-between;
  
  margin:2em 0;
  padding-bottom:1.5em;
  
  overflow-x:auto;  
`
const Left = styled.div`
  display:flex;
`
const ShareButton = styled.div`
  display:inline-flex;
  justify-content:center;
  align-items:center;
  cursor:pointer;
  background:${({ theme }) => theme.button_bg};
  min-width:55px;
  height:55px;
  border-radius:5px;
  ${"path"}{
    fill:${({ theme }) => theme.text};
  }
  @media only screen and (max-width: 960px) {
    margin-left:3em;
  }
  
`

const Resolved = styled.div`
  width:100%;
  display:flex;
  align-items:center;
  justify-content:center;
  text-align:center;
  background-color:${light_colors.VERY_LIGHT_GREEN};
  height:160px;
  border-radius:8px;

  margin-bottom:3em;

  padding:0 1.5em;
  
  ${"h2"}{
    color:${props => light_colors.TEXT_COLOR};
    line-height:1.8em;
    font-size:24px;
    font-weight:800;
  }
`

const Warning = styled.span`
  color:${({ theme }) => theme.body_400};
  font-style: italic;
  margin-bottom:2em;
`
const IconButton = ({ active, text, icon, count, color, onClick }) => {
  return (
    <IconB active={active} color={color} onClick={onClick}>
      {icon()}
      <p>{text} {count ? `(${count})` : null}</p>
    </IconB>
  )
}

const Issue = ({ data, deviceId, slug, userData, t, theme, lang }) => {
  const [loading, setLoading] = useState(false);
  const [isVoted, setIsVoted] = useState(false);

  const { explanation, repeat_frequency, effect_on_usability, company_response, company_solution, resolved } = data

  const handleVote = async () => {
    let test = await POST(`same-heres`, { device: deviceId })
    console.log(test)
    setIsVoted(!isVoted)
  }
  return (
    <IssueContainer>
      <Content>
        <Warning>Bu sorunun ID'si: {data.id} 'dir. Debug amaçlı yazılmıştır.</Warning>
        <Title>{t('explanation')}</Title>
        <Text as={ReactMarkdown} source={explanation[0][lang] || explanation[0]["en"] || explanation[0][availableLangKey(explanation[0])]} />
        {!explanation[0][lang] && <Warning>This paragraph not available in your language.</Warning>}
        {!explanation[0][lang] && <Warning>Add translation</Warning>}

        <EffectCard usageEffect={effect_on_usability} repeatFreq={repeat_frequency} />

        <Title>{t('companyresponse')}</Title>
        {(company_response && company_response.length) ?
          <>
            <Text as={ReactMarkdown} source={company_response[0][lang] || company_response[0]["en"] || company_response[0][availableLangKey(company_response[0])]} />
            {!company_response[0][lang] && <Warning>This paragraph not available in your language.</Warning>}
          </>
          :
          <Warning>There is no company response yet.</Warning>
        }

        <Title>{t('companysolution')}</Title>
        {(company_solution && company_solution.length) ?
          <>
            <Text as={ReactMarkdown} source={company_solution[0][lang] || company_solution[0]["en"] || company_solution[0][availableLangKey(company_solution[0])]} />
            {!company_solution[0][lang] && <Warning>This paragraph not available in your language.</Warning>}
          </>
          :
          <Warning>There is no solution yet.</Warning>
        }


        <Info>
          <p className="added-by">{t('addedby')}</p>
          <div onClick={() => Router.push(`/profile/${userData.username}`)} className="user-info">
            <img width={64} src={handlePhoto(userData.photo)} />
            <p>{userData.name}</p>
          </div>
        </Info>

        <Buttons>
          <Left>
            <IconButton onClick={() => handleVote()} active={isVoted} text={t('samehere')} count={0} icon={Sad} color={isVoted ? 'orange' : light_colors.SAME_HERE_RED} />
            <IconButton text={t('discuss')} icon={Question} color={theme.text} />
            {!resolved ?
              <IconButton text={t('markasresolved')} icon={Tick} color={light_colors.RESOLVED_GREEN} />
              : null}
          </Left>
          <ShareButton>
            <Share />
          </ShareButton>
        </Buttons>
        {resolved ?
          <Resolved>
            <h2>{t('resolved')}</h2>
          </Resolved>
          : null}
      </Content>
    </IssueContainer>
  )
}


Issue.getInitialProps = async () => ({
  namespacesRequired: ['issue_card'],
})

export default withTranslation('issue_card')(Issue)