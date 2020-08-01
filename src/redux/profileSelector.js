export const getProfilePage = (state) => {
    return state.profilePage
} 
export const getStatus = (state) => {
    return state.profilePage.status
}
export const getPhotos = (state) => {
    return state.profilePage.profile.photos
}