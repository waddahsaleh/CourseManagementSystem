import './App.css';
import { Route, Routes } from "react-router-dom"
import NavBar from './components/NavBar';
import Home from './components/Home';
import Courses from './components/Courses';
import Students from './components/Students';
import Lecturers from './components/Lecturers';
import Axios from 'axios'
import { useEffect, useState } from 'react';
function App() {
  const [chop, setChop] = useState("")

  useEffect(() => {
    Axios.post('http://localhost:5000/api').then((response) => {
      setChop(response.data)
    }).catch(error => {
      console.log(error.response)
    });
    
 
  }, [])

  return (
    <div>
      <NavBar />
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/students" element={<Students />} />
        <Route path="/lecturers" element={<Lecturers />} />

      </Routes>
    </div>
  );
}

export default App;
