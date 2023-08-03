import {Routes , Route} from 'react-router-dom'
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Courses from './components/Courses';
import Psychology from './components/Psycology';
import Disclamer from './components/Disclaimer';
import ContactMe from './components/ContactMe';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/about-me' element={<About/>}></Route>
      <Route path='/courses' element={<Courses/>}></Route>
      <Route path='/psychology' element={<Psychology/>}></Route>
      <Route path='/contact-me' element={<ContactMe/>}></Route>
      <Route path='/disclaimer' element={<Disclamer/>}></Route>
    </Routes>
  );
}

export default App;
