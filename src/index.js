import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from 'react-redux'
import store from './features/store';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Blog from './components/Blog'
import Project from './components/Project'
import Contact from './components/Contact'
import Header from './components/Header';
import Footer from './components/Footer';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <Router>
     <Header/>
      <Routes>
      <Route path='/' element={<App/>}/>
      <Route  path='/Blog' element = {<Blog/>} />
      <Route  path='/Projects' element = {<Project/>}/>
      <Route  path='/Contact' element = {<Contact/>}/>
    </Routes>
    <Footer/>
    </Router>
    </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
