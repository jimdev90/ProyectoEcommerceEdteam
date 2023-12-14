import {TOKEN_NAME} from "../../env.js";


export const getToken = () => {
    return localStorage.getItem(TOKEN_NAME);
}

export const setToken = (token) => {
    localStorage.setItem(TOKEN_NAME, token);
}

export const deleteToken = () => {
    localStorage.removeItem(TOKEN_NAME)
}

export const clearLocalStorage = () => localStorage.clear()

