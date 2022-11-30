import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import './App.css';
import Blogs from './Blogs';
import MainNavigation from './MainNavigation';
import NotFound from './NotFound';
import QAPics from './QAPics';
import NewBlog from './NewBlog';
import { AppContext } from './Context';
import {useState} from 'react';

function App() {
  const[theme,setTheme]=useState("spring");
  return (
    <div>
      <AppContext.Provider value={{theme}}>
      <MainNavigation />
      <Routes>
        <Route path='/' element={<Blogs />} />
        <Route path="/new-blog" element={<NewBlog />} />
        <Route path="/new" element={<NewBlog />} />
        <Route path="/qa/pics/:id" element={<QAPics />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      </AppContext.Provider>
    </div>)
}
export default App;