// import logo from './logo.svg';
import './App.css';
import { addtoCart, EmptyCart, projectData, removeFromCart } from "./features/action";
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

function App() {
  const dispatch = useDispatch();
  const Selector = useSelector((state) => state.projects);
  console.log("this is called from app.js " + Selector)
  const data = {
    name: "I phone",
    type: "Mobile",
    price: 10000,
  }

  useEffect(() => {
    dispatch(projectData());
  }, [])

  return (
    <div>
      <div className="Home h-[100vh] bg-black text-white flex flex-col-reverse md:flex-row md:flex-wrap justify-center" >
        <div className="text-center md:w-1/2 md:my-56  " id='slide2'>
          <div className='text-center md:text-left md:w-1/2 md:m-auto'>
            <h1 className='text-4xl font-bold'>Udai sai Karumuri</h1>
            <p className='text-lg m-1'>I am a Full stact developer and a programmer </p>
            <button className="want-website px-4 py-2 text-white bg-red-600 m-2  border-white border-2 hover:bg-white hover:text-black">Want a Website</button>
            <button className="want-website px-4 py-2 text-white bg-black border-white border-2 m-2 hover:bg-white hover:text-black"><Link to="/Projects">Explore projects</Link></button>
          </div>
        </div>
        <div className="text-center mx-auto  w-1/2" id='slide1'>
          <img src="/udaisai.png" alt="" />
        </div>
      </div>

      <div className='h-[50vh] p-5'>
        <h1 className='text-red-600 text-2xl font-bold'>About me</h1>
        <div className="text-center">
          <p className='text-xl italic my-20'>&#8220;Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem cumque quam nesciunt et, iure eius voluptate dolores eum beatae maxime perferendis ullam expedita!&#8221; </p>
        </div>
      </div>
       

      <div className='p-5'>
        <h1 className='text-red-600 text-2xl font-bold'>Projects</h1>
        <div className="flex flex-row flex-wrap justify-around py-10">




          {Selector.map((item) => <div key={item.id} className="max-w-sm rounded overflow-hidden shadow-lg mt-2">
            <img className="w-full h-40" src={item.photo} alt="Sunset in the mountains" />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{item.name}</div>
              <p className="text-gray-700 text-base">
                {item.description}
              </p>
            </div>
            <div className="px-6 pt-4 pb-2">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
            </div>
          </div>)}

        </div>
      </div>
    </div>
  );
}

export default App;
