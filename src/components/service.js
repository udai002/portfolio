import React from 'react'
import {MdWebAsset} from 'react-icons/md'

const service = () => {
  return (
    <div className='bg-gray-100 text-center'>
      <h1 className='text-3xl font-bold py-2'>Our Services</h1>
      <div className="flex flex-row flex-wrap">
        <div className="text-center flex flex-col justify-around w-[300px] h-[250px] shadow-md m-4 bg-white hover:bg-red-500 duration-75 hover:text-white">
          <div className='flex justify-center'><MdWebAsset className='text-3xl text-red-600'/></div>
          <h1 className='font-bold text-xl '>Web development edtied in github</h1>
          <p className='font-serif text-lg'>Developing a web Application like Ecommerce website , blogs , bussiness websites and Education websites using PHP , Reactjs</p>
        </div>

        <div className="text-center flex flex-col justify-around w-[300px] h-[250px] shadow m-4  bg-white hover:bg-red-500 duration-75 hover:text-white">
          <div className='flex justify-center'><MdWebAsset className='text-3xl text-red-600'/></div>
          <h1 className='font-bold text-xl '>Web development</h1>
          <p className='font-serif text-lg'>Developing a web Application like Ecommerce website , blogs , bussiness websites and Education websites using PHP , Reactjs</p>
        </div>
      </div>
      
    </div>
  )
}

export default service
