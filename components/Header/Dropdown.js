import React, { useEffect, useState } from 'react';
import { i18n, withTranslation } from '../../i18n'

import ActiveLink from '../ActiveLink'
import Dropdown from 'react-bootstrap/Dropdown'
import Toggle from '../Toggle'
import styled from 'styled-components';

const ProfilePicture = styled.img`
  width:30px;
  height:30px;
  border-radius:50%;
  margin-left:0.4em;
`
const HomeDropdown = styled.div`
    display: ${props => props.noMobile ? "none" : "inline-flex"};
    margin-right:1em;
    align-items:center;
    justify-content:space-between;
    height:50px;
`

const CustomDropdown = styled.div`
    button{
        color:${({ theme }) => theme.text} !important;
        background:${({ theme }) => theme.body} !important;

        padding: 0.6em 1.3em;

        border:0;
        border-radius:60px;
        box-shadow: 0px 4px 3px 0px rgba(0,0,0,0.15);
        
        @media only screen and (max-width: 960px) {
            transform:scale(0.8);
        }
    }
    
    button:hover{
        color:${({ theme }) => theme.text};
        background:${({ theme }) => theme.scrollbar_light};
    }
`

//dropdown-toggle

const HeaderDropdown = ({ t, isLight, toggleTheme, transparent, reverse }) => {
    return (
        <CustomDropdown className="header-dropdown" as={Dropdown}>
            <Dropdown.Toggle id="header">
                <strong>{t('welcome')},</strong>
                <ProfilePicture width="30px" height="30px" src="https://pbs.twimg.com/profile_images/977536334377168896/FSIxjgf7_400x400.jpg" />
            </Dropdown.Toggle>
            <Dropdown.Menu>
                <Toggle isLight={isLight} toggleTheme={toggleTheme} />

                <Dropdown.Divider />

                <Dropdown.Item href="#/action-1">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M12 23C5.92487 23 1 18.0751 1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23ZM19.3995 17.1246C20.4086 15.6703 21 13.9042 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 13.9042 3.59138 15.6703 4.6005 17.1246C5.72595 15.6381 8.3706 15 12 15C15.6294 15 18.274 15.6381 19.3995 17.1246ZM17.9647 18.7398C17.672 17.6874 15.5694 17 12 17C8.43062 17 6.328 17.6874 6.03532 18.7398C7.6233 20.1462 9.71194 21 12 21C14.2881 21 16.3767 20.1462 17.9647 18.7398ZM12 15C9.76086 15 8 13.4274 8 10C8 7.75576 9.5791 6 12 6C14.4142 6 16 7.92158 16 10.2C16 13.4796 14.2181 15 12 15ZM10 10C10 12.2693 10.8182 13 12 13C13.1777 13 14 12.2984 14 10.2C14 8.95042 13.2157 8 12 8C10.7337 8 10 8.81582 10 10Z" fill="black" />
                    </svg>
                    {t('profile')}
                </Dropdown.Item>
                <Dropdown.Item href="#/action-2">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M18.6562 20.897L20.8733 18.6798L20.0925 15.843L20.4327 15.0305L23 13.5818V10.4464L20.44 8.99173L20.1055 8.18067L20.8961 5.34235L18.6774 3.12683L15.8403 3.90748L15.0296 3.56758L13.5808 1H10.4454L8.99072 3.56004L8.17985 3.89446L5.34198 3.10281L3.1267 5.31809L3.90748 8.15567L3.56758 8.96634L1 10.4151V13.5496L3.55774 15.0076L3.89252 15.8193L3.10197 18.6572L5.31809 20.8733L8.15567 20.0925L8.96644 20.4325L10.4153 22.999H13.5498L15.0067 20.4412L15.8183 20.1065L18.6562 20.897ZM18.8527 13.6256L17.9809 15.7078L18.6362 18.0886L18.0678 18.657L15.692 17.9951L13.609 18.8542L12.3873 20.999H11.5829L10.3714 18.8529L8.29155 17.9808L5.90947 18.6362L5.34203 18.0688L6.00385 15.693L5.14482 13.6101L3 12.3876V11.583L5.1471 10.3715L6.0192 8.29155L5.36375 5.90947L5.93001 5.34321L8.30576 6.00595L10.3895 5.14655L11.6093 3H12.4129L13.6245 5.1471L15.7044 6.0192L18.087 5.36362L18.6558 5.93166L17.9941 8.30696L18.8534 10.3906L21 11.6103V12.4139L18.8527 13.6256ZM12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12C16 14.2091 14.2091 16 12 16ZM14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12Z" fill="black" />
                    </svg>
                    {t('settings')}
                </Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item eventKey="4">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M11.7042 13.7071L18.9971 6.41421V11H20.9971V3H12.9971V5H17.5829L10.29 12.2929L11.7042 13.7071ZM19 19V14H17V19H5V7H10V5H5C3.89543 5 3 5.89543 3 7V19C3 20.1046 3.89543 21 5 21H17C18.1046 21 19 20.1046 19 19Z" fill="black" />
                    </svg>
                    {t('logout')}
                </Dropdown.Item>
            </Dropdown.Menu>
        </CustomDropdown>
    )
}

HeaderDropdown.getInitialProps = async () => ({
    namespacesRequired: ['commonheader'],
})

export default withTranslation('commonheader')(HeaderDropdown)
