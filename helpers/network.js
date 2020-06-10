import { getJwt, getUserData } from '../helpers/auth'

import { API_URL } from '../helpers/urls'
import axios from 'axios';

axios.defaults.headers.common['Authorization'] = `Bearer ${getJwt()}`;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

export const GET = async (url) => {
    const res = await fetch(`${API_URL}${url}`)
    const data = await res.json()
    return data
}

export const POST = async (url, data) => {
    return axios.post(`${API_URL}${url}`, {
        user_id: getUserData().id,
        ...data
    })
}


export const PUT = () => {
    return true
}


export const DELETE = () => {
    return true
}
