
function resetSessionStorage() {
    sessionStorage.setItem("isAuthenticated",false)
    sessionStorage.setItem("degree","all")
    sessionStorage.setItem("year","all")
}

export default resetSessionStorage;