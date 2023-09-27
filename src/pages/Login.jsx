import React,{useEffect,useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { loginUser } from '../actions/UserActions';
import { useDispatch, useSelector } from 'react-redux';
import {BiLoaderAlt} from 'react-icons/bi'



export const Login = () => {

  const [email, setEmail] = useState("") ;
  const [password, setPassword] = useState("") ;
  const {isLogin,loading} = useSelector(state => state.user)

  const dispatch = useDispatch() ;
  const navigate = useNavigate() ;

  const loginHandler = (e) => {
    e.preventDefault()
    const data = {
      email,password
    }
    dispatch(loginUser(data)) ;
    
  }


  useEffect(()=>{
    if(isLogin === true){
      navigate("/")
    }
  },[isLogin])


  return (
    <>
      <div className='pt-14 min-h-screen  '>

        <div className='flex flex-col gap-3 justify-center  pt-20 items-center'>
          <form onSubmit={loginHandler} className='md:w-1/4 md:px-0 px-2 flex flex-col gap-3'>
            <div className='text-3xl text-center '>Login</div>
            <div className='border border-gray-600 '>
              <input required value={email} onChange={(e)=>setEmail(e.target.value)} type="text" placeholder='Email' className='outline-none px-3 w-full py-1.5' />
            </div>
            <div className='border border-gray-600 '>
              <input required value={password} onChange={(e)=>setPassword(e.target.value)} type="password" placeholder='Password' className='outline-none px-3 w-full py-1.5' />
            </div>
            <div className='w-full'>
            <button disabled={loading} className={` bg-blue-800 flex justify-center items-center hover:bg-blue-900 text-white w-full py-2`}>{loading?
              <BiLoaderAlt className='animate-spin' size={24}/>:"Login"}</button>
            </div>
            <div>
              <p className=' text-center'>Don't have an account <Link to="/register" className='underline text-blue-700'>register</Link> here</p>
            </div>
          </form>

        </div>



      </div>

    </>
  )
}
