import './App.css';
import * as React from "react";
import {Route, Routes} from 'react-router-dom'
import Feed from './Components/Feed/Feed'
import {Profile} from './Components/Profile/Profile'
import Recommended from './Components/Recommended/Recommended'
import About from './Components/About'
import Follows from './Components/Profile/Follows'
import Followers from './Components/Profile/Followers'
import LowBar from './Components/LowBar'
import Createpost from './Components/CreatePost/Createpost';


function App() {
  return (
    <div className="App">
      <Routes>  
        <Route exact path="/" element={[<Feed />, <LowBar/>]} />
        <Route path="/profile/:id" element={[<Profile />, <LowBar/>]} />
        <Route path="/recommended" element={[<Recommended />, <LowBar/>]} />
        <Route path="/about" element={<About />} />
        <Route path="/profile/:id/follows" element={[<Follows />, <LowBar/>]} />
        <Route path="/profile/:id/followers" element={[<Followers />, <LowBar/>]} />
        <Route path="/createpost" element={[<Createpost />, <LowBar/>]} />
      </Routes>
    </div>
  );
}

export default App;
