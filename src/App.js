import './App.css';
import { Routes,Route } from 'react-router-dom';
import Home from './Home'
import Singlepage from './Singlepage';
import Error from './Error';


function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='movie/:id' element={<Singlepage />}/>
        <Route path='*' element={<Error/>}/>
      </Routes>
    </div>
  );
}

export default App;
