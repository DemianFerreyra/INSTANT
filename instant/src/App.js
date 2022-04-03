import './App.css';
import * as React from "react";
import {Route, Routes} from 'react-router-dom'
import Feed from './Components/Feed/Feed'
import Profile from './Components/Profile/Profile.jsx'
import Recommended from './Components/Recommended/Recommended'
import About from './Components/About'
import Chat from './Components/Chat'


function App() {
  return (
    <div className="App">
      <Routes>  
        <Route exact path="/" element={<Feed />} />
        <Route path="/profile/:id" element={<Profile />} />
        <Route path="/recommended" element={<Recommended />} />
        <Route path="/about" element={<About />} />
        <Route path="/chats" element={<Chat />} />
      </Routes>
    </div>
  );
}

export default App;
