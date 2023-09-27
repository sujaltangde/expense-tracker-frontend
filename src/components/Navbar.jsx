import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import { logOutClearState } from '../slices/UserSlice'
import { logOrNot } from '../actions/UserActions'
import { logOutClearTransac } from '../slices/TransactionSlice'
import { HiBars3 } from 'react-icons/hi2'


export const Navbar = () => {

  const dispatch = useDispatch()
  const { isLogin } = useSelector(state => state.user)

  const [toggle, setToggle] = useState(false)

  const logOut = () => {
    toast.success("Logout SuccessFull !")
    localStorage.removeItem("token1")
    dispatch(logOrNot())
    dispatch(logOutClearState())
    dispatch(logOutClearTransac())
  }


  return (

    <>

      <div className='fixed w-full '>
        <div className='bg-gray-900 py-2 text-center flex justify-between md:px-8 px-2 items-center text-white '>

          <div className='flex gap-3 items-center'>
            <button onClick={()=>setToggle(!toggle)} className='md:hidden ml-2 flex border rounded'>
              <HiBars3 size={23} />
            </button>
            <Link to="/" className='md:text-2xl text-lg py-0 font-semibold'>Expense Tracker</Link>
          </div>

          <div className='text-lg font-semibold flex  md:gap-3 gap-3 py-0'>
            <Link to="/" className='md:text-xl text-xl py-0 md:flex hidden font-semibold'>Home</Link>
            <Link to="/analytics" className='md:text-xl text-xl md:flex hidden py-0 font-semibold md:mx-5'>Analytics</Link>
            {
              !isLogin ?
                <>
                  <Link to="/login" className='flex justify-center items-center  text-sm text-center p' >
                    <span className='bg-blue-800 px-3 py-0'>Login</span>
                  </Link>
                  <Link to="/register" className='flex justify-center items-center  text-sm text-center p' >
                    <span className='bg-blue-800 px-3 py-0'>Register</span>
                  </Link>
                </> : <button onClick={() => logOut()} className='bg-blue-800 px-4  text-sm py-0 ' >Logout</button>
            }
          </div>


        </div>
        <div className={` border-b  ${toggle? "flex":"hidden"} flex-col md:hidden  w-full gap-3 bg-gray-800 text-white pl-8 pb-3 pt-2`}>
          <Link onClick={()=>setToggle(!toggle)}  to="/" > <span className='bg-blue-700 px-[4rem] py-1 text-sm' >Home</span> </Link>
          <Link onClick={()=>setToggle(!toggle)} to="/analytics" > <span className='bg-blue-700 px-[3.3rem] py-1 text-sm' >Analytics</span> </Link>
        </div>
      </div>



    </>
  )
}
