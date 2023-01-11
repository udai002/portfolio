import React from 'react'

const Project = () => {
  return (
    // <div className='h-[100vh]' >
    //   <h1 className='text-center my-72 font-bold text-lg text-gray-400'>Sorry!.. there are no Projects</h1>
    // </div>
    <div className='bg-gray-100  p-4'>
      <h1 className='font-bold text-xl font-serif'>Projects</h1>
      <div className="flex flex-row justify-start flex-wrap  p-4">

        {/* project container  */}
        <div className="box w-[300px] flex flex-col justify-center m-2 p-1 shadow-sm bg-white"  >
          <img src="snake1.png" alt="Not found" width="280px" height="400px" className='w-full' />
          <div className='bg-white p-2 w-full'>
            <h1 className='font-bold text-xl py-2' >Snake game</h1>
            <p className='py-1'>Snake game using HTML , CSS and javascript </p>
            <div className="flex">
              <div className='max-w-fit p-2 bg-gray-300 rounded-lg mr-1 mt-2'><p>HTML</p></div>
              <div className='max-w-fit p-2 bg-gray-300 rounded-lg mr-1 mt-2'><p>CSS</p></div>
              <div className='max-w-fit p-2 bg-gray-300 rounded-lg mr-1 mt-2'><p>Javascript</p></div>
            </div>
          </div>
        </div>

        <div className="box w-[300px] flex flex-col m-2  justify-center p-1 shadow-sm bg-white"  >
          <img src="logo192.png" alt="Not found" width="280px" height="400px" className='w-full' />
          <div className='bg-white p-2 w-full'>
            <h1 className='font-bold text-xl py-2' >Snake game</h1>
            <p className='py-1'>Snake game using HTML , CSS and javascript </p>
            <div className="flex">
              <div className='max-w-fit p-2 bg-gray-300 rounded-lg mr-1 mt-2'><p>HTML</p></div>
              <div className='max-w-fit p-2 bg-gray-300 rounded-lg mr-1 mt-2'><p>CSS</p></div>
              <div className='max-w-fit p-2 bg-gray-300 rounded-lg mr-1 mt-2'><p>Javascript</p></div>
            </div>
          </div>
        </div>



      </div>

    </div>
  )
}

export default Project
