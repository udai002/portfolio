import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';


const Header = () => {
  const result = useSelector((state) => state);
  console.log("redux data in header", result)

  const [Sidebar , setSidebar] = useState(false);

  const openSide = ()=>{
    setSidebar(true);
  }
  return (
    <div className='bg-black text-white py-3'>

      {/* button to open side bar */}
      <ul className='flex flex-row'>
        <li className='text-red-600 mx-4 ml-10 my-2 md:hidden ' onClick={openSide}>
          <div className="w-6 border-b-2 ml-1 my-1 border-white"></div>
          <div className="w-6 border-b-2 ml-1 my-1 border-white"></div>
          <div className="w-6 border-b-2 ml-1 my-1 border-white"></div>
        </li>
      </ul>


      {/* creating a side bar */}
      {Sidebar?<div className="sidebar p-10 fixed h-[100vh] w-[250px] md:hidden top-0 bg-black duration-700 -translate-x-[0] transition-all">
      <ul className='text-2xl'>
        <li className=' py-2 text-red-600'>Home</li>
        <li className='text-white py-6'>Blogs</li>
        <li className='text-white py-6'>Projects</li>
        <li className='text-white py-6'>Services</li>
        <li className='text-white py-6'>contact us</li>
        <li className='text-white py-6'><button className='px-4 py-1 bg-blue-500 rounded text-white'>Resume</button></li>
        <li className='text-white py-6'><button className='px-4 py-1 bg-red-500 rounded text-white'>Signin</button></li>
      </ul>
      </div>:""}
      




      <nav className=' md:flex md:flex-row  justify-between hidden'>

        <ul className='flex flex-row'>

          <li className='text-red-600 mx-4 ml-10'><Link to=''> Home </Link></li>
          <li className='mx-2'><Link to="/Blog">Blogs</Link></li>
          <li className='mx-2'><Link to="/Projects">Projects</Link></li>
          <li className='mx-2'><Link to="/Projects">Service</Link></li>
          <li className='mx-2'><Link to="/Contact">Contact us</Link></li>

        </ul>
        <ul className='flex flex-row '>
          <li className='mx-2 '><Link to="/Contact"> <button className='px-4 py-1 bg-black border-2 border-white rounded text-white'>Resume</button> </Link></li>
          <li className='mx-2 '><Link to="/Contact"> <button className='px-4 py-1 bg-red-500 rounded text-white'>Signin</button> </Link></li>
          {/* <li className='mx-10'>blog:{result.length}</li> */}
        </ul>
      </nav>


      {/* creating a pop to signin  */}
      <div className="Popup md:w-[30vw] translate-x-full ml-20 h-[70vh] border-2 border-white mt-10 fixed text-center bg-black">
        <h1 className='font-bold text-2xl mt-5' >Userlogin</h1>
        <form action="">
          <input type="text" />
        </form>

      </div>
    </div>
  )
}

export default Header
