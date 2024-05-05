import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";


const themes = {
    winter: "winter",
    night: "night",
}


const getThemeLocalStorage = () => {
    const theme = localStorage.getItem("theme") || themes.winter;
    document.documentElement.setAttribute("data-theme", theme);
    return theme
}

const initialState = {
    user: { username: "codding addict" },
    theme: getThemeLocalStorage()
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        loginUser: (state, action) => {
            console.log("login");
        },
        logoutUser: (state) => {
            state.user = null
            localStorage.removeItem("user")
            toast.success("Logged out successfully")
        },
        toggleTheme: (state) => {
            const { night, winter } = themes
            state.theme = state.theme === night ? winter : night;
            document.documentElement.setAttribute("data-theme", state.theme);
            localStorage.setItem("theme", state.theme)
        }
    }
})

export const { loginUser, logoutUser, toggleTheme } = userSlice.actions;

export default userSlice.reducer