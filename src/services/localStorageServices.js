
export function setToken(token) {
    localStorage.setItem("ACCESS_TOKEN", token)
}

export function clearToken(token) {
    localStorage.clear()
}