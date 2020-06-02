import { Link, i18n, withTranslation } from '../../i18n'
import Marquee, { Motion, randomIntFromInterval } from "react-marquee-slider";
import { Question, Sad, Share, Tick } from '../svg/IssueCardSvg'
import React, { useEffect, useRef, useState } from 'react';
import { dark_colors, light_colors } from "../../helpers/colors"

import EffectCard from './EffectCard'
import Fade from 'react-reveal/Fade';
import { EffectCard as Loader } from '../Loaders/EffectCard'
import PropTypes from 'prop-types'
import styled from 'styled-components';

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
`

const Text = styled.p`
  color:${({ theme }) => theme.detail_text};
  margin:0.4em 0 2em 0;
  font-size:18px;
  line-height:1.4em;
`

const Info = styled.div`
  display:flex;
  flex-direction:column;
  .added-by{
    color:${({ theme }) => theme.detail_text};
    font-size:20px;
    font-weight:700;
  }
  .user-info {
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

const IconB = styled.div`
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
  
  background:${({ theme }) => theme.dark_button};
  color:${props => props.color};

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
  
  overflow-x:scroll;  
  @media only screen and (max-width: 960px) {
  }
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
  
  ${"h2"}{
    color:${props => light_colors.TEXT_COLOR};
    line-height:1.8em;
    font-size:24px;
    font-weight:800;
  }
`

const data = [{
  id: 1,
  user: {
    name: "Melih Çalışkan",
    username: "melihcaliskan",
    img: "https://pbs.twimg.com/profile_images/977536334377168896/FSIxjgf7_400x400.jpg"
  },
  explanation: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec maximus lacinia neque in eleifend. In sodales consectetur elit, eget dapibus magna scelerisque ut. Aliquam sit amet sodales metus.",
  usage_effect: 7,
  repeat_freq: 5,
  company_response: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec maximus lacinia neque in eleifend. In sodales consectetur elit, eget dapibus magna scelerisque ut. Aliquam sit amet sodales metus.",
  company_solution: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec maximus lacinia neque in eleifend. In sodales consectetur elit, eget dapibus magna scelerisque ut. Aliquam sit amet sodales metus.",
  count: {
    sameHere: 5,
    discuss: 10,
  },
  resolved: true,
  createdAt: new Date(),
  updatedAt: new Date(),
}]
const IconButton = ({ text, icon, count, color }) => {
  return (
    <IconB color={color}>
      {icon()}
      <p>{text} {count ? `(${count})` : null}</p>
    </IconB>
  )
}

const Issue = ({ t, resolved, theme }) => {
  const [loading, setLoading] = useState(false);

  const item = data[0];
  if (loading) {
    return <Loader />
  }
  return (
    <IssueContainer>
      <Content>
        <Title>{t('explanation')}</Title>
        <Text>{item.explanation}</Text>

        <EffectCard usageEffect={3} repeatFreq={3} />

        <Title>{t('company.response')}</Title>
        <Text>{item.company_response}</Text>

        <Title>{t('company.solution')}</Title>
        <Text>{item.company_solution}</Text>

        <Info>
          <p className="added-by">{t('addedby')}</p>
          <div className="user-info">
            <img width={64} src={item.user.img} />
            <p>Melih Çalışkan</p>
          </div>
        </Info>

        <Buttons>
          <Left>
            <IconButton text={t('buttons.samehere')} count={item.count.sameHere} icon={Sad} color={light_colors.SAME_HERE_RED} />
            <IconButton text={t('buttons.discuss')} count={item.count.discuss} icon={Question} color={theme.text} />
            {!resolved ?
              <IconButton text={t('buttons.resolved')} icon={Tick} color={light_colors.RESOLVED_GREEN} />
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