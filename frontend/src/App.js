import './App.css';
import { Routes, Route } from 'react-router';
import About from './components/About'; 
import Home from './components/Home';
import Create from './components/Create';
import Navbar from './components/Navbar';

function App() {
  const myWidth = 220
  return (
    <div className="App">
      <Navbar 
        drawerWidth={myWidth}
        content={
          <Routes>
            <Route path='' element={<Home/>}/>
            <Route path='/About' element={<About/>}/>
            <Route path='/Create' element={<Create/>}/>
          </Routes>
        }/>
    </div>
  );
}

export default App;
