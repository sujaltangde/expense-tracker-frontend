import { createSlice } from '@reduxjs/toolkit'


const UserSlice = createSlice({
    name: 'User',
    initialState: {
        loading: false,
        error: null,
        isLogin: false,
        userDetailsData: {
            name: "",
            email: "",
            balance: 0,
            expense: 0,
            income: 0,
            createdAt: ""
        }
    },
    reducers: {
        registerRequest: (state) => {
            state.loading = true;
        },
        registerSuccess: (state) => {
            state.loading = false;
        },
        registerFail: (state, action) => {
            state.loading = false;
            state.error = action.payload
        },

        loginRequest: (state) => {
            state.loading = true;
        },
        loginSuccess: (state) => {
            state.loading = false;
        },
        loginFail: (state, action) => {
            state.loading = false;
            state.error = action.payload
        },


        isLoginRequest: (state) => {
            state.isLogin = false
        },
        isLoginSuccess: (state, action) => {
            state.isLogin = action.payload
        },
        isLoginFail: (state) => {
            state.isLogin = false
        },


        userDetailsRequest: (state) => {
            state.loading = true;
        },
        userDetailsSuccess: (state, action) => {
            state.loading = false;
            state.userDetailsData = action.payload
        },
        userDetailsFail: (state, action) => {
            state.loading = false;
            state.error = action.payload
        },


        logOutClearState: (state) => {
            state.userDetailsData = {
                name: "",
                email: "",
                balance: 0,
                expense: 0,
                income: 0,
                createdAt: ""
            }
        }

    }
})



export const {
    registerRequest, registerSuccess, registerFail,
    loginRequest, loginSuccess, loginFail
    , isLoginRequest, isLoginSuccess, isLoginFail,
    userDetailsRequest, userDetailsSuccess, userDetailsFail,
    logOutClearState
} = UserSlice.actions

export default UserSlice.reducer