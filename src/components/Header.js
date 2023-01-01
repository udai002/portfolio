import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';


const Header = () => {
  const result = useSelector((state) => state);
  console.log("redux data in header", result)

  const [Sidebar , setSidebar] = useState(false);
  const [Popup , setPopup] = useState(false);

  const openSide = ()=>{
    setSidebar(true);
  }

  const openPop=()=>{
    setPopup(true)
  }

  const ClosePop = ()=>{
    setPopup(false)
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
        <li className='text-white py-6'><button className='px-4 py-1 bg-red-500 rounded text-white' onClick={openPop}>Signin</button></li>
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
          <li className='mx-2 ' onClick={openPop}><button className='px-4 py-1 bg-red-500 rounded text-white'  >Signin</button></li>
          {/* <li className='mx-10'>blog:{result.length}</li> */}
        </ul>
      </nav>


      {/* creating a pop to signin  */}
      {Popup?<div className="Popup md:w-[350px] translate-x-1/2 right-1/2 w-[300px] shadow-xl  h-[60vh] border-2 border-white mt-20 fixed text-center bg-black  px-2" >
        <div className='font-bold rounded-xl bg-slate-900 fixed -top-3 -right-3 border-2 w-[27px] text-white '><button onClick={ClosePop}>X</button></div>
        <h1 className='font-bold text-2xl mt-5' >USERLOGIN</h1>
        <form action="" className='flex flex-col justify-around '>
          <div className="flex flex-col justify-between">
            <div className='mt-10'>
          <input type="text" placeholder='Username' className='py-2 px-1 w-full bg-gray-900 border-[2px] border-b-0 border-white'/>
          </div>
          <div>
          <input type="text" placeholder='Password'  className='py-2 px-1 w-full bg-gray-900 border-[2px] border-white'/>
          </div>
          <button className='px-4 py-2 my-4 rounded-lg bg-red-600 text-white'>Sign in</button>
          </div>
        </form>

        <hr />
        <button className='px-4 py-2 my-4 w-full rounded-lg bg-red-600 text-white'>Sign up</button>

      </div>:""}

        </div>
  )
  }
export default Header
