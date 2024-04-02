import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from "../pages/Home";
import Profile from "../pages/Profile";
import MyJob from "../pages/Myjob";
function RoutesApp() {
    return (
        <Router>
            <Routes>

                <Route path="/" element={<Home />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/myjob" element={<MyJob />} />

            </Routes>
        </Router>
    )
}
export default RoutesApp