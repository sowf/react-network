import Axios from "axios";

const instance = Axios.create({
    withCredentials: true,
    headers: {
        "API-KEY": "0535beee-f6de-46ae-b0e8-fd3d84ca7975",
    },
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
});

export const UsersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance
            .get(`users?page=${currentPage}&count=${pageSize}`)
            .then((response) => response.data);
    },
    getProfile(userId = 1) {
        return instance
            .get(`profile/` + userId)
            .then((response) => response.data);
    },
    follow(userId) {
        return instance.post("follow/" + userId, {});
    },
    unfollow(userId) {
        return instance.delete("follow/" + userId);
    },
};
export const ProfileAPI = {
    getProfile(userId = 1) {
        return instance
            .get(`profile/` + userId)
            .then((response) => response.data);
    },
    getStatus(userId = 1) {
        return instance.get("profile/status/" + userId);
    },
    updateStatus(status) {
        return instance.put("profile/status", { status: status });
    },
    updateProfile(profile) {
        return instance.put("profile", { ...profile });
    },
    updateProfilePhoto(imageResource) {
        var formData = new FormData;
        formData.append("image", imageResource)
        return instance.put(
            "profile/photo",
            formData,
            {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            }
        );
    },
};
export const AuthAPI = {
    getUserAuthenticated() {
        return instance.get(`auth/me`).then((response) => response.data);
    },
    loginRequest(email, password, rememberMe, captcha) {
        return instance.post("auth/login", {
            email,
            password,
            rememberMe,
            captcha,
        });
    },
    logoutRequest() {
        return instance.delete("auth/login");
    },
    getCaptcha() {
        return instance.get("security/get-captcha-url");
    },
};
