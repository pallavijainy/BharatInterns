import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Login from '../component/Login'
import Signup from '../component/Signup'
import Home from '../component/Home'
import CreatePost from '../component/CreatePost'
import ShowPost from '../component/ShowPost'
import PostPage from '../component/PostPage'

const RoutePage = () => {
  return (
   <Routes>
      
      <Route path='/' element={<Home/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/signup' element={<Signup/>}></Route>
      <Route path='/createpost' element={<CreatePost/>}></Route>
      <Route path='/showpost' element={<ShowPost/>}></Route>
      <Route path='/post/:id' element={<PostPage/>}></Route>
    </Routes>
  )
}

export default RoutePage