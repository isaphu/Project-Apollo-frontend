
export function setToken(token) {
    localStorage.setItem("ACCESS_TOKEN", token)
}

export function getToken() {
    return localStorage.getItem("ACCESS_TOKEN")
}

export function clearToken(token) {
    localStorage.clear()
}