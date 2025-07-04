import { Routes, Route } from "react-router-dom";
import NavBar from './components/NavBar';
import Home from './pages/home';
import Destinations from "./pages/Destinations";
import TripTypesPage from "./pages/TripTypes";
import ContactUs from "./pages/ContactUs";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destinations" element={<Destinations />} />
        <Route path="/trip-types" element={<TripTypesPage />} />
        <Route path="/contact" element={<ContactUs />} />

      </Routes>
    </>
  );
}

export default App
