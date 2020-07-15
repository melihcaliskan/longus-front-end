import { API_URL, API_URL_W } from '../../helpers/urls'
import React, { useEffect, useState } from 'react';

import Container from 'react-bootstrap/Container'
import Head from 'next/head'
import Loader from '../../helpers/Loader'
import Router from 'next/router'
import { withTranslation } from '../../i18n'

const Profile = ({ t, isAuth, username, userResponse }) => {
    const { name, photo, role, comments, device_issues, same_heres } = userResponse
    
    return (
        <div>
            <Head>
                <title>{username}</title>
                <meta name="description" content="Free Web tutorials" />
                <meta name="keywords" content="HTML,CSS,JavaScript" />
                <meta name="author" content="John Doe" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Head>
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10em' }}>
                <div style={{ textAlign: 'center', background: 'rgba(0,0,0,0.05)', padding:'2em', borderRadius:'1em' }}>
                    <img width={50} height={50} style={{ borderRadius: '50%' }} src={API_URL_W + photo.url} />
                    <br /><br />
                    <h2>{name}</h2>
                    <p>{role.type}</p>
                    <p>Sorun sayısı: {device_issues.length}</p>
                    <p>Yorum sayısı: {comments.length}</p>
                    <p>Oy sayısı: {same_heres.length}</p>
                </div>
            </div>
        </div>
    )
}

Profile.getInitialProps = async ({ res, query, err }) => {
    const { username } = query
    const namespacesRequired = ["detail"];

    const response = await fetch(`${API_URL}users?username=${username}`)
    const userResponse = await response.json()

    return { namespacesRequired, username: username, userResponse: userResponse[0] }
}

export default withTranslation('detail')(Profile)