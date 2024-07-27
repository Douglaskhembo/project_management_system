import './App.css';
import { Routes, Route } from 'react-router';
import About from './components/About'; 
import Home from './components/Home';
import Create from './components/create';

function App() {
  return (
    <div className="App">
      <Routes>
          <Route path='' element={<Home/>}/>
          <Route path='/About' element={<About/>}/>
          <Route path='/Create' element={<Create/>}/>
      </Routes>
    </div>
  );
}

export default App;
