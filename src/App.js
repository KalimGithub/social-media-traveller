import './App.css';
import Header from './Components/Header';
import Home from './Components/Home'
import DetailsPage from './Components/DetailsPage';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home name='Home'/>} />
        <Route path='/item' element={<DetailsPage />}/>
      </Routes>
    </div>
  );
}

export default App;
