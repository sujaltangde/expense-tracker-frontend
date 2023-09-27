import React,{useEffect,useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { registerUser } from '../actions/UserActions';
import { useDispatch, useSelector } from 'react-redux';
import {BiLoaderAlt} from 'react-icons/bi'


export const Register = () => {

  const [name, setName] = useState("") ;
  const [email, setEmail] = useState("") ;
  const [password, setPassword] = useState("") ;
  const navigate = useNavigate() ;
  const dispatch = useDispatch()
  const {isLogin, loading} = useSelector(state => state.user)

  const registerHandler = (e) => {
    e.preventDefault()
    
    const data = {
      name,email,password
    }
    dispatch(registerUser(data))
    
    
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
          <form onSubmit={registerHandler} className='md:w-1/4 md:px-0 px-2  flex flex-col gap-3'>
            <div className='text-3xl text-center '>Register</div>
            <div className='border border-gray-600 '>
              <input required value={name} onChange={(e)=>setName(e.target.value)} type="text" placeholder='Name' className='outline-none px-3 w-full py-1.5' />
            </div>
            <div className='border border-gray-600 '>
              <input required value={email} onChange={(e)=>setEmail(e.target.value)} type="text" placeholder='Email' className='outline-none px-3 w-full py-1.5' />
            </div>
            <div className='border border-gray-600 '>
              <input required value={password} onChange={(e)=>setPassword(e.target.value)}  type="password" placeholder='Password' className='outline-none w-full px-3 py-1.5' />
            </div>
            <div className='w-full'>
              <button disabled={loading} className={` bg-blue-800 flex justify-center items-center hover:bg-blue-900 text-white w-full py-2`}>{loading?
              <BiLoaderAlt className='animate-spin' size={24}/>:"Register"}</button>
            </div>
            <div>
              <p className=' text-center'>Already have a account <Link to="/login" className='underline text-blue-700'>login</Link> here</p>
            </div>
          </form>

        </div>



      </div>

    </>
  )
}
