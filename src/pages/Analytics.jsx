import React,{useEffect} from 'react'
import CountUp from 'react-countup';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import {Loader} from '../components/Loader'
import { FinanceChart } from '../components/FinanceChart';


export const Analytics = () => {    

    const { isLogin, loading, userDetailsData } = useSelector(state => state.user)
    const navigate = useNavigate();

    useEffect(() => {
        if (isLogin === false) {
            navigate("/login")
        }
    }, [isLogin])


    return (
        <>

            <div className='min-h-screen  pt-14 '>
            {
                loading? <Loader/> :
                <div>
             
                    <div className='pt-6'>
                       <div className='grid md:grid-cols-3 grid-cols-1 md:gap-10 gap-3 px-3'>
                       <div className='bg-blue-800 text-white py-2 flex justify-center items-center text-xl '>
                            <p>Expenses: <CountUp start={0} end={userDetailsData && userDetailsData.expense} /> Rs</p>
                        </div>
                        <div className='bg-blue-800 text-white py-2 flex justify-center items-center text-xl '>

                            <p>Balance: <CountUp start={0} end={userDetailsData && userDetailsData.balance} /> Rs</p>
                        </div>
                        <div className='bg-blue-800 text-white py-2 flex justify-center items-center text-xl '>

                            <p>Income: <CountUp start={0} end={userDetailsData && userDetailsData.income} /> Rs</p>
                        </div>
                       </div>

                       <div className='pt-6 flex justify-center items-center w-full'>
                        <div className=' h-[27rem] w-[25rem] '>
                        <FinanceChart expense={userDetailsData && userDetailsData.expense} income={userDetailsData && userDetailsData.income} 
                        balance={userDetailsData && userDetailsData.balance}/>
                        </div>

                       </div>
                    </div>
                </div>
            }
            </div>

        </>
    )
}
