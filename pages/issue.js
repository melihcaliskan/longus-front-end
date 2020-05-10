import { Link, i18n, withTranslation } from '../i18n'
import Marquee, { Motion, randomIntFromInterval } from "react-marquee-slider";
import React, { useEffect, useRef, useState } from 'react';
import { dark_colors, light_colors } from "../helpers/colors"

import Fade from 'react-reveal/Fade';
import PropTypes from 'prop-types'
import styled from 'styled-components';

const UserImage = styled.img`
  width:64px;
  height:64px;
  border-radius:50%;
  object-fit:contain; 
  margin-right:2em;
`

const IssueContainer = styled.div`
display:flex;
flex-direction:row;
overflow:hidden;
`

const Content = styled.div`
`

const Title = styled.h2`
  margin:0;
  font-weight:500;
  font-size:21px;
`

const Text = styled.p`
  color:${light_colors.TEXT_COLOR};
  margin:0.4em 0 2em 0;
  font-size:18px;
  line-height:1.4em;
`
const Resolved = styled.div`
  width:100%;
  display:flex;
  align-items:center;
  justify-content:center;
  background-color:${light_colors.VERY_LIGHT_GREEN};
  height:160px;
  border-radius:8px;
  ${"h2"}{
    color:${props => light_colors.TEXT_COLOR};
    font-size:24px;
    font-weight:800;
  }
`

const IconB = styled.div`
  display:flex;
  flex-direction:row;
  justify-content:center;
  align-items:center;
  cursor:pointer;
  height:55px;
  line-height:1.6em;
  background-color:${light_colors.BUTTON_BG};
  margin-right:1em;
  border-radius:8px;
  padding-right: 1.2em;
  font-size:16px;
  color:${props => props.color};
  ${"svg"}{
    width:24px;
    padding-left:0.6em;
    margin-right:1em;
    fill:${props => props.color};
  }
  @media only screen and (max-width: 1200px) {
    width:250px;
  }
`

const Buttons = styled.div`
  display:flex;
  justify-content:space-between;
  margin:2em 0;

  @media only screen and (max-width: 1200px) {
  }
`
const Left = styled.div`
  display:flex;
`
const ShareButton = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  cursor:pointer;
  background-color:${light_colors.BUTTON_BG};
  width:50px;
  height:50px;
  border-radius:5px;
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

const Tick = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="34"
    height="34"
    fill="none"
    viewBox="0 0 34 34">
    <path
      fill="#17C671"
      fillRule="evenodd"
      d="M13.752 20.248L26.917 7.083l2.003 2.004-15.168 15.168-8.085-8.085 2.003-2.003 6.082 6.081z"
      clipRule="evenodd"
    ></path>
  </svg>
)

const Sad = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="28"
    height="28"
    fill="none"
    viewBox="0 0 28 28">
    <path
      fill="#C61717"
      fillRule="evenodd"
      d="M14 26.833C6.912 26.833 1.167 21.088 1.167 14S6.912 1.167 14 1.167 26.833 6.912 26.833 14 21.088 26.833 14 26.833zm0-2.333c5.799 0 10.5-4.7 10.5-10.5 0-5.799-4.701-10.5-10.5-10.5S3.5 8.201 3.5 14c0 5.8 4.701 10.5 10.5 10.5zm0-5.486c1.54 0 2.95.75 3.82 1.986l1.909-1.342A6.992 6.992 0 0014 16.68a6.992 6.992 0 00-5.729 2.977L10.18 21A4.659 4.659 0 0114 19.014zM16.333 14v-2.333h2.334V14h-2.334zm-7-2.333V14h2.334v-2.333H9.333z"
      clipRule="evenodd"
    ></path>
  </svg>
)

const Question = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="34"
    height="34"
    fill="none"
    viewBox="0 0 34 34">
    <path
      fill="#000"
      fillRule="evenodd"
      d="M17 31.167c2.443 0 4.798-.62 6.884-1.783l6 .5-.5-6A14.108 14.108 0 0031.167 17c0-7.824-6.343-14.167-14.167-14.167S2.833 9.176 2.833 17 9.176 31.167 17 31.167zm5.83-4.446l.392-.235 3.56.296-.296-3.56.235-.393A11.273 11.273 0 0028.333 17c0-6.258-5.074-11.332-11.333-11.332C10.74 5.667 5.667 10.74 5.667 17c0 6.26 5.074 11.333 11.333 11.333 2.085 0 4.084-.562 5.83-1.612zM17 24.081a1.417 1.417 0 100-2.834 1.417 1.417 0 000 2.834zm-1.417-4.248h2.834v-1.416c0 .003.006-.004.022-.021.037-.041.125-.138.29-.27.142-.112.186-.14.544-.368a4.25 4.25 0 10-6.523-3.591h2.833a1.417 1.417 0 112.173 1.198c-.458.29-.534.341-.788.542-.842.669-1.385 1.465-1.385 2.51v1.416z"
      clipRule="evenodd"
    ></path>
  </svg>
)

const Share = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="32"
    fill="none"
    viewBox="0 0 32 32">
    <path
      fill="#000"
      fillRule="evenodd"
      d="M18.667 8c0 .383.04.757.117 1.117l-6.761 3.381a5.333 5.333 0 100 7.004l6.761 3.38a5.333 5.333 0 101.194-2.385l-6.762-3.38a5.355 5.355 0 000-2.234l6.761-3.38A5.333 5.333 0 1018.668 8zm-8 8a2.667 2.667 0 11-5.334 0 2.667 2.667 0 015.334 0zM24 10.667a2.667 2.667 0 100-5.334 2.667 2.667 0 000 5.334zM26.667 24a2.667 2.667 0 11-5.334 0 2.667 2.667 0 015.334 0z"
      clipRule="evenodd"
    ></path>
  </svg>
)

const Issue = ({ t, resolved }) => {
  const [loading, setLoading] = useState(true);
  const [animate, setAnimate] = useState(false);
  const changeLanguage = lng => {
    setAnimate(false)
    i18n.changeLanguage(lng).then(a => setAnimate(true))
  };
  useEffect(() => {
    setAnimate(true)
  });
  const item = data[0];
  return (
    <IssueContainer style={{ marginBottom: '5em' }} >
      <UserImage width={64} src={item.user.img} />
      <Content>
        <Title>{t('explanation')}</Title>
        <Text>{item.explanation}</Text>

        <Title>{t('company.response')}</Title>
        <Text>{item.company_response}</Text>

        <Title>{t('company.solution')}</Title>
        <Text>{item.company_solution}</Text>

        <Buttons>
          <Left>
            <IconButton text={t('buttons.samehere')} count={45} icon={Sad} color={light_colors.SAME_HERE_RED} />
            <IconButton text={t('buttons.discuss')} count={16} icon={Question} />
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

Issue.propTypes = {
  t: PropTypes.func.isRequired,
}


export default withTranslation('issue_card')(Issue)
