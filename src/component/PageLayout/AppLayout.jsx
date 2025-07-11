import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import { Outlet } from 'react-router-dom'
const AppLayout = () => {
  return (
    <>
        <Header/>
        <div className='main'>
        <Outlet />
        </div>
        <Footer/>
    </>
  )
}

export default AppLayout