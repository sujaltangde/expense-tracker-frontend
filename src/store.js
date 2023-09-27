import {configureStore} from '@reduxjs/toolkit'
import UserReducer from './slices/UserSlice' ;
import TransactionReducer from './slices/TransactionSlice' ;


export const store = configureStore({
	reducer:{
		user: UserReducer,			
		transaction: TransactionReducer,			
	}
})