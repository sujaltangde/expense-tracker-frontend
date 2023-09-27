import { makeTransactionRequest, makeTransactionSuccess, makeTransactionFail,
    getAllTransactionsRequest, getAllTransactionsSuccess, getAllTransactionsFail } from '../slices/TransactionSlice'
import {userDetails} from '../actions/UserActions'
import {toast} from 'react-toastify'
import axios from 'axios'



export const makeTransaction = (userData) => async (dispatch) => {
    try{
        dispatch(makeTransactionRequest())

        const config = {
            headers:{
                Authorization: `Bearer ${localStorage.getItem('token1')}`
            }
        }

        const {data} = await axios.post("https://expense-tracker-b.onrender.com/api/v1/make/transaction",userData,config) ;
        
        dispatch(makeTransactionSuccess())
        dispatch(getAllTransactions())
        dispatch(userDetails())
        toast.success("Transaction Added !")

    }catch(err){
        dispatch(makeTransactionFail(err.response.data.message))
            toast.error(err.response.data.message)
    }
}



export const getAllTransactions = () => async (dispatch) => {
    try{
        dispatch(getAllTransactionsRequest())

        const config = {
            headers:{
                Authorization: `Bearer ${localStorage.getItem('token1')}`
            }
        }

        const {data} = await axios.get("https://expense-tracker-b.onrender.com/api/v1/getAllTransactions",config) ;
        
        
       
        dispatch(getAllTransactionsSuccess(data.Transactions))


    }catch(err){
        dispatch(getAllTransactionsFail(err.response.data.message))
    }
}


