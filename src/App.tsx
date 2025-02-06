import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/login";
import Booking from "./components/rooms";
import RoomDetails from "./components/roomDetails";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/rooms" element={<Booking />} />
        <Route path="/room/:id" element={<RoomDetails />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;