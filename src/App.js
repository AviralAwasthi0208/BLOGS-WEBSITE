import React, { useContext, useEffect } from 'react'
import Pagination from './Components/Pagination';
import Header from './Components/Header';
import Blog from './Components/Blog';
import { AppContext } from './Context/AppContext';
import "./App.css";
const App = () => {

  const {fetchBlogPosts} =useContext(AppContext);
  useEffect(()=>{
    fetchBlogPosts();

  },[])
  return (
    <div className=" w-full h-full flex flex-col gap-y-1 justify-center items-center">
      <Header/>
      <Blog/>
      <Pagination/>
    </div>
  )
}

export default App