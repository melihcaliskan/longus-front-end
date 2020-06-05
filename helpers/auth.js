export const setLogin = (JWT, USER_DATA) => {
    if (typeof window !== 'undefined') {
        localStorage.setItem("jwt", JWT);
        localStorage.setItem("USER_DATA", USER_DATA);
    }
}

export const getJwt = () => {
    if (typeof window !== 'undefined') {
        return localStorage.getItem("jwt");
    }
}

export const getUserData = () => {
    if (typeof window !== 'undefined') {

        return localStorage.getItem("USER_DATA");
    }
}

export const logOut = () => {
    if (typeof window !== 'undefined') {
        localStorage.removeItem("jwt");
        localStorage.removeItem("USER_DATA");
    }
}


/*
export const setLogin = (JWT, USER_DATA) => {

}

export const getJwt = () => {
    return true
}

export const getUserData = () => {
    return true
}

export const logOut = () => {
    return true
}
*/