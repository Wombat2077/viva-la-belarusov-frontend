import { defineStore } from "pinia";

export const userStore = defineStore('user', {
    state: () => ({
        isAuth: false,
        email: "",
        phoneNumber: "",
        username: "",
        
    })
})