export const setLogin = (JWT, USER_DATA) => {
    localStorage.setItem("jwt", JWT);
    localStorage.setItem("USER_DATA", USER_DATA);
}

export const getJwt = () => {
    return localStorage.getItem("jwt");
}

export const getUserData = () => {
    return localStorage.getItem("USER_DATA");
}

export const logOut = () => {
    localStorage.removeItem("jwt");
    localStorage.removeItem("USER_DATA");
}