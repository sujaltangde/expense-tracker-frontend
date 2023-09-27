import { createSlice } from '@reduxjs/toolkit'


const TransactionSlice = createSlice({
    name: 'Transaction',
    initialState: {
        loading: false,
        transactionLoading: false,
        error: null,
        allTransactions: []
    },
    reducers: {

        makeTransactionRequest: (state) => {
            state.loading = true;
        },
        makeTransactionSuccess: (state) => {
            state.loading = false;
        },
        makeTransactionFail: (state, action) => {
            state.loading = false;
            state.error = action.payload
        },


        getAllTransactionsRequest: (state) => {
            state.transactionLoading = true
        },
        getAllTransactionsSuccess: (state, action) => {
            state.transactionLoading = false 
            state.allTransactions = action.payload
        },
        getAllTransactionsFail: (state, action) => {
            state.transactionLoading = false
            state.error = action.payload
        },

        logOutClearTransac: (state) => {
            state.allTransactions = []
        }
 


    }
})



export const { makeTransactionRequest, makeTransactionSuccess, makeTransactionFail,
    getAllTransactionsRequest, getAllTransactionsSuccess, getAllTransactionsFail,
    logOutClearTransac
    
} = TransactionSlice.actions

export default TransactionSlice.reducer