import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Boton from '../components/Button';
import Home from "../pages/Home";
import Profile from "../pages/Profile";
import MyJob from "../pages/Myjob";
import { useTheme } from '../themes/ThemeContext';

function RoutesApp() {
    const tema= useTheme();
    return (
        
        <Router>
            <section className={`App ${tema}`}></section>
                <Navbar></Navbar>
                
            <Routes>
         
        
                <Route path="/" element={<Home />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/myjob" element={<MyJob />} />

            </Routes>
        </Router>
    )
}
export default RoutesApp

function Navbar() {
    return (
      <nav>
            <Link to="/">Home</Link>
            <Link to="/profile">Profile</Link>
            <Link to="/myjob">MyJob</Link>
            <Boton></Boton>
      </nav>
    )
  }