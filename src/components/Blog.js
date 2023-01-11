import React from 'react'

const Blog = () => {
  return (
    <div className='h-[100vh] bg-gray-100' >
      {/* <h1 className='text-center my-72 font-bold text-lg text-gray-400'>Sorry!.. there are no Blogs</h1> */}
      <h1 className='text-2xl font-bold font-serif p-4'>Blogs</h1>
      <div className="flex flex-col p-4 ">
        
          <div className=" md:w-[60vw]  h-fit p-4 bg-white shadow-sm mt-4">
            <h1 className='font-bold text-xl  hover:text-black cursor-pointer'>How to download linux in windows</h1>
            <p>The best way to download linux in windows is using virtual machine ...</p>
          </div>

          <div className=" md:w-[60vw]  h-fit p-4 bg-white shadow-sm mt-4">
            <h1 className='font-bold text-xl  hover:text-black cursor-pointer'>How to download linux in windows</h1>
            <p>The best way to download linux in windows is using virtual machine ...</p>
          </div>
      </div>
      </div>
  )
}

export default Blog
