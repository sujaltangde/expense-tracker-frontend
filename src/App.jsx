import React, { useState, useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { Route, Routes } from 'react-router-dom'
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import { Home } from './pages/Home';
import { useDispatch, useSelector } from 'react-redux';
import { logOrNot, userDetails } from './actions/UserActions';
import { Analytics } from './pages/Analytics';


function App() {



  const dispatch = useDispatch()


  const { isLogin } = useSelector(state => state.user)


  useEffect(() => {

    dispatch(userDetails());

  }, [dispatch, isLogin]);


  useEffect(() => {
    const LogOrNot = () => {
      dispatch(logOrNot());
      // dispatch(getAllJobs())
    }
    LogOrNot()

  }, []);


  return (
    <>
      <Navbar />

      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/analytics" element={<Analytics />} />

      </Routes>




      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        className="mt-14 font-bold  "

      />


    </>
  )
}

export default App
