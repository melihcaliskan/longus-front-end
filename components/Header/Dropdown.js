import React, { useEffect, useState } from 'react';
import { i18n, withTranslation } from '../../i18n'

import ActiveLink from '../ActiveLink'
import Dropdown from 'react-bootstrap/Dropdown'
import Plus from '../svg/Plus'
import Search from '../svg/Search'
import SearchModal from './Search'
import Toggle from '../Toggle'
import styled from 'styled-components';

const Container = styled.div`
    .dropdown-menu{
        left:-5px !important;
        top:10px !important;
        background:${({ theme }) => theme.body};
        border-radius:8px;
        box-shadow: 0px 4px 3px 0px rgba(0,0,0,0.15);
    }
    .dropdown-divider{
        border-top:1px solid ${({ theme }) => theme.body_200};
    }
    .dropdown-item{
        padding-top:0.4em;
        padding-top:0.4em;
    }
    .dropdown-item svg path{
        fill:${({ theme }) => theme.text};
    }

    .dropdown-item:hover{
        background:${({ theme }) => theme.body_100};
    }
    @media only screen and (max-width: 960px) {
        left:-10px !important;
    }
`
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

const DropdownText = styled.span`
    color:${({ theme }) => theme.text};
    margin-left:0.6em;
`

const CustomDropdown = styled.div`
    button{
        color:${({ theme }) => theme.text} !important;
        background:${({ theme }) => theme.body_100} !important;

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

const HeaderDropdown = ({ t, isMobile, isLight, toggleTheme }) => {
    const [modalShow, setModalShow] = useState(false);
    return (
        <Container>
            <SearchModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
            <CustomDropdown className="header-dropdown" as={Dropdown}>
                <Dropdown.Toggle id="header">
                    <strong>{t('welcome')},</strong>
                    <ProfilePicture width="30px" height="30px" src="https://pbs.twimg.com/profile_images/977536334377168896/FSIxjgf7_400x400.jpg" />
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    {isMobile ?
                        <>
                            <Dropdown.Item href="/add">
                                <Plus />
                                <DropdownText>{"  "}{t('add')}</DropdownText>
                            </Dropdown.Item>
                            <Dropdown.Item onClick={() => setModalShow(true)} >
                                <Search />
                                <DropdownText> {t('search')}</DropdownText>
                            </Dropdown.Item>
                            <Dropdown.Divider />
                        </>
                        : null
                    }
                    <Dropdown.Item href="#/action-1">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M12 23C5.92487 23 1 18.0751 1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23ZM19.3995 17.1246C20.4086 15.6703 21 13.9042 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 13.9042 3.59138 15.6703 4.6005 17.1246C5.72595 15.6381 8.3706 15 12 15C15.6294 15 18.274 15.6381 19.3995 17.1246ZM17.9647 18.7398C17.672 17.6874 15.5694 17 12 17C8.43062 17 6.328 17.6874 6.03532 18.7398C7.6233 20.1462 9.71194 21 12 21C14.2881 21 16.3767 20.1462 17.9647 18.7398ZM12 15C9.76086 15 8 13.4274 8 10C8 7.75576 9.5791 6 12 6C14.4142 6 16 7.92158 16 10.2C16 13.4796 14.2181 15 12 15ZM10 10C10 12.2693 10.8182 13 12 13C13.1777 13 14 12.2984 14 10.2C14 8.95042 13.2157 8 12 8C10.7337 8 10 8.81582 10 10Z" fill="black" />
                        </svg>
                        <DropdownText> {t('profile')}</DropdownText>
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-2">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M18.6562 20.897L20.8733 18.6798L20.0925 15.843L20.4327 15.0305L23 13.5818V10.4464L20.44 8.99173L20.1055 8.18067L20.8961 5.34235L18.6774 3.12683L15.8403 3.90748L15.0296 3.56758L13.5808 1H10.4454L8.99072 3.56004L8.17985 3.89446L5.34198 3.10281L3.1267 5.31809L3.90748 8.15567L3.56758 8.96634L1 10.4151V13.5496L3.55774 15.0076L3.89252 15.8193L3.10197 18.6572L5.31809 20.8733L8.15567 20.0925L8.96644 20.4325L10.4153 22.999H13.5498L15.0067 20.4412L15.8183 20.1065L18.6562 20.897ZM18.8527 13.6256L17.9809 15.7078L18.6362 18.0886L18.0678 18.657L15.692 17.9951L13.609 18.8542L12.3873 20.999H11.5829L10.3714 18.8529L8.29155 17.9808L5.90947 18.6362L5.34203 18.0688L6.00385 15.693L5.14482 13.6101L3 12.3876V11.583L5.1471 10.3715L6.0192 8.29155L5.36375 5.90947L5.93001 5.34321L8.30576 6.00595L10.3895 5.14655L11.6093 3H12.4129L13.6245 5.1471L15.7044 6.0192L18.087 5.36362L18.6558 5.93166L17.9941 8.30696L18.8534 10.3906L21 11.6103V12.4139L18.8527 13.6256ZM12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12C16 14.2091 14.2091 16 12 16ZM14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12Z" fill="black" />
                        </svg>
                        <DropdownText> {t('settings')}</DropdownText>
                    </Dropdown.Item>

                    <Dropdown.Divider />
                    
                    <Dropdown.Item onClick={toggleTheme}>
                        {isLight ?
                            <>
                                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M12 4.07089C11.6734 4.02417 11.3395 4 11 4C10.6605 4 10.3266 4.02417 10 4.07089V0.044843C10.3294 0.0151626 10.6629 0 11 0C11.3371 0 11.6706 0.0151626 12 0.044843V4.07089ZM6 11C6 13.7614 8.23858 16 11 16C13.7614 16 16 13.7614 16 11C16 8.23858 13.7614 6 11 6C8.23858 6 6 8.23858 6 11ZM14 11C14 12.6569 12.6569 14 11 14C9.34315 14 8 12.6569 8 11C8 9.34315 9.34315 8 11 8C12.6569 8 14 9.34315 14 11ZM12 21.9552V17.9291C11.6734 17.9758 11.3395 18 11 18C10.6605 18 10.3266 17.9758 10 17.9291V21.9552C10.3294 21.9848 10.6629 22 11 22C11.3371 22 11.6706 21.9848 12 21.9552ZM17.9291 10H21.9552C21.9848 10.3294 22 10.6629 22 11C22 11.3371 21.9848 11.6706 21.9552 12H17.9291C17.9758 11.6734 18 11.3395 18 11C18 10.6605 17.9758 10.3266 17.9291 10ZM4 11C4 10.6605 4.02417 10.3266 4.07089 10H0.044843C0.0151626 10.3294 0 10.6629 0 11C0 11.3371 0.0151626 11.6706 0.044843 12H4.07089C4.02417 11.6734 4 11.3395 4 11ZM15.1922 5.39362L18.0391 2.54673C18.5521 2.9744 19.0256 3.44791 19.4533 3.96094L16.6064 6.80783C16.2049 6.27173 15.7283 5.79513 15.1922 5.39362ZM2.54673 3.96094L5.39362 6.80783C5.79513 6.27173 6.27173 5.79513 6.80783 5.39362L3.96094 2.54673C3.44791 2.9744 2.9744 3.44791 2.54673 3.96094ZM16.6064 15.1922L19.4533 18.0391C19.0256 18.5521 18.5521 19.0256 18.0391 19.4533L15.1922 16.6064C15.7283 16.2049 16.2049 15.7283 16.6064 15.1922ZM3.96094 19.4533L6.80783 16.6064C6.27173 16.2049 5.79513 15.7283 5.39362 15.1922L2.54673 18.0391C2.9744 18.5521 3.44791 19.0256 3.96094 19.4533Z" fill="black" />
                                </svg>
                                <DropdownText> {t('lightmode')}</DropdownText>
                            </>
                            :
                            <>
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M10 7C10 5.02543 10.8205 3.18477 12.2398 1.86765L13.7174 0.496474L11.7317 0.149561C11.1634 0.0502852 10.5847 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20C13.3854 20 16.4843 18.3038 18.3266 15.5396L19.4432 13.8643L17.4336 13.9868C17.2898 13.9956 17.1452 14 17 14C13.134 14 10 10.866 10 7ZM10 18C5.58172 18 2 14.4183 2 10C2 5.74791 5.31735 2.27062 9.50514 2.01506C8.53668 3.46848 8 5.19184 8 7C8 11.439 11.2137 15.1274 15.4414 15.8655C13.9878 17.2153 12.061 18 10 18Z" fill="#656565" />
                                </svg>
                                <DropdownText> {t('nightmode')}</DropdownText>
                            </>
                        }
                    </Dropdown.Item>

                    <Dropdown.Divider />
                    <Dropdown.Item eventKey="4">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M11.7042 13.7071L18.9971 6.41421V11H20.9971V3H12.9971V5H17.5829L10.29 12.2929L11.7042 13.7071ZM19 19V14H17V19H5V7H10V5H5C3.89543 5 3 5.89543 3 7V19C3 20.1046 3.89543 21 5 21H17C18.1046 21 19 20.1046 19 19Z" fill="black" />
                        </svg>
                        <DropdownText> {t('logout')}</DropdownText>
                    </Dropdown.Item>
                </Dropdown.Menu>
            </CustomDropdown>
        </Container>
    )
}

HeaderDropdown.getInitialProps = async () => ({
    namespacesRequired: ['commonheader'],
})

export default withTranslation('commonheader')(HeaderDropdown)
