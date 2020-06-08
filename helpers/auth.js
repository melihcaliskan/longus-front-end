import { destroyCookie, parseCookies, setCookie } from 'nookies'

export const setLogin = (JWT, USER_DATA) => {
    setCookie(null, 'jwt', JWT, {
        maxAge: 30 * 24 * 60 * 60,
        path: '/',
    })
    setCookie(null, 'USER_DATA', JSON.stringify(USER_DATA), {
        maxAge: 30 * 24 * 60 * 60,
        path: '/',
    })
}

export const getJwt = () => {
    const cookies = parseCookies()
    const { jwt } = cookies
    return jwt
}

export const getUserData = () => {
    const cookies = parseCookies()
    const { USER_DATA } = cookies
    return USER_DATA ? JSON.parse(USER_DATA) : false
}

export const isAuth = () => {
    const cookies = parseCookies()
    const { USER_DATA } = cookies
    return USER_DATA ? true : false
}

export const logOut = () => {
    destroyCookie(null, 'jwt')
    destroyCookie(null, 'USER_DATA')
}