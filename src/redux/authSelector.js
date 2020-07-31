export const getId = (state) => {
    return state.auth.id
}
export const getIsAuthenticated = (state) => {
    return state.auth.isAuthenticated
}
export const getIsFetching = (state) => {
    return state.auth.isFetching
}
export const getAuth = (state) => {
    return state.auth
}
