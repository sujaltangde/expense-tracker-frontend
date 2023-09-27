import {registerRequest,registerSuccess, registerFail,loginRequest, loginSuccess, loginFail
    , isLoginRequest, isLoginSuccess, isLoginFail, userDetailsRequest,userDetailsSuccess,userDetailsFail
 } from '../slices/UserSlice'
import {toast} from 'react-toastify'
import axios from 'axios'

export const registerUser = (userData) => async (dispatch) => {
    try{
        dispatch(registerRequest())

        const {data} = await axios.post("https://expense-tracker-b.onrender.com/api/v1/register",userData) ;
        
        dispatch(registerSuccess())
        localStorage.setItem('token1',data.token)
        dispatch(logOrNot())
        toast.success("Registration successful !")

    }catch(err){
        dispatch(registerFail(err.response.data.message))
        if(err.response.data.message.includes("duplicate")){
            toast.error("User already exists.")
        }else{
            toast.error(err.response.data.message)
        }
    }
}


export const loginUser = (userData) => async (dispatch) => {
    try{
        dispatch(loginRequest())

        const {data} = await axios.post("https://expense-tracker-b.onrender.com/api/v1/login",userData) ;
        
        dispatch(loginSuccess())
        localStorage.setItem('token1',data.token)
        dispatch(logOrNot())
        toast.success("Login successful !")

    }catch(err){
        dispatch(loginFail(err.response.data.message))
        toast.error(err.response.data.message)
    }
}


export const logOrNot = () => async (dispatch) => {
    try{
        dispatch(isLoginRequest())
        const config = {
            headers:{
                Authorization: `Bearer ${localStorage.getItem('token1')}`
            }
        }

        const {data} = await axios.get("https://expense-tracker-b.onrender.com/api/v1/isLogin",config) ;
      
        dispatch(isLoginSuccess(data.isLogin))     

    }catch(err){
        dispatch(isLoginFail())
    }
}


export const userDetails = () => async (dispatch) => {
    try{
        dispatch(userDetailsRequest())
        const config = {
            headers:{
                Authorization: `Bearer ${localStorage.getItem('token1')}`
            }
        }

        const {data} = await axios.get("https://expense-tracker-b.onrender.com/api/v1/userDetails",config) ;
      
        dispatch(userDetailsSuccess(data.user))

    }catch(err){
        dispatch(userDetailsFail(err.response.data.message))
    }
}