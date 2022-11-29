import './App.css';
import { Route, Routes } from "react-router-dom"
import NavBar from './components/NavBar';
import Home from './components/Home';
import Courses from './components/Courses';
import Students from './components/Students';
import Lecturers from './components/Lecturers';

function App() {
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
