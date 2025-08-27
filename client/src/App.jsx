import React from 'react'
import Navbar from './components/Navbar'
import { Route, Routes, useLocation } from 'react-router-dom'
import Movies from './pages/movies'
import Home from './pages/home'
import Moviedetails from './pages/Moviedetails'
import Seatlayout from './pages/Seatlayout'
import MyBookings from './pages/MyBookings'
import Favorite from './pages/Favorite'
import { Toaster } from 'react-hot-toast'
import Footer from './components/Footer'
import Layout from './pages/admin/Layout'
import Dashboard from './pages/admin/Dashboard'
import AddShows from './pages/admin/AddShows'
import ListShows from './pages/admin/ListShows'
import ListBookings from './pages/admin/ListBookings'


const App = () => {

  const isAdminRoute = useLocation().pathname.startsWith('/admin')

  return (
    <> 
    <Toaster />
    { !isAdminRoute && <Navbar/>}
      <Routes>  
        <Route path='/' element={<Home/>} />
        <Route path='/movies' element={<Movies/>} />
        <Route path='/movies/:id' element={<Moviedetails/>} />
        <Route path='/movies/:id/:date' element={<Seatlayout/>} />
        <Route path='/my-bookings' element={<MyBookings/>} />
        <Route path='/favorite' element={<Favorite/>} />
        <Route path='/admin/*' element={<Layout/>}>
        <Route index element={<Dashboard />} />
        <Route path='add-shows' element={<AddShows />} />
        <Route path='list-shows' element={<ListShows />} />
        <Route path='list-bookings' element={<ListBookings />} />
       </Route>
      </Routes>
       { !isAdminRoute && <Footer />}
    </>
  )
}

export default App
