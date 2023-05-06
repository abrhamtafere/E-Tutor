import './App.css';
import {Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Contactus from './pages/Contactus';
import Courses from './pages/Courses';
import Discussion from './pages/Discussion';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
         <Route path='/' element={ <Home /> }/>
         <Route path='/courses' element={ <Courses /> }/>
         <Route path='/discussion' element={ <Discussion /> }/>
         <Route path='/contact' element={ <Contactus /> }/>
       </Routes>
    </div>
  );
}

export default App;
