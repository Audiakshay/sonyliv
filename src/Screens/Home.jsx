import React, { useEffect } from 'react'
import Header from '../Components/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../Components/Footer'
import FetchSlider from '../Redux/Actions/FetchSlider';
import { useDispatch } from 'react-redux';


const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(FetchSlider());
  }, []);
  return (
    <>
    <div style={{position: 'sticky', top: 0, zIndex: '1'}}>
    <Header />
    </div>
    <Outlet />
    <Footer />
    </>
  )
}

export default Home