import React from 'react'
import { LiaRupeeSignSolid } from 'react-icons/lia'


export const TransactionCard = ({transaction}) => {

    function reverseDate(dateString) {
        let parts = dateString.split("-");
        return parts[2] + "-" + parts[1] + "-" + parts[0];
    }

    return (
        <>

            <div className='flex flex-col  w-full px-5 py-3 border shadow-sm shadow-gray-300'>
                <div className='flex justify-between '>
                    <div>
                        {transaction.description}
                    </div>
                    <div className='flex items-center justify-center'>
                        <LiaRupeeSignSolid/> {transaction.amount}
                    </div>

                </div>
                <div className='pt-2 flex justify-between'>
                    <div className='text-sm '>{reverseDate(transaction.createdAt.substr(0,10))}</div>
                    <div className={`text-sm ${transaction.category === "income" ? "text-green-600":"text-red-600" } `}>{transaction.category === "income" ? "Income":"Expense"}</div>
                </div>
            </div>


        </>
    )
}
