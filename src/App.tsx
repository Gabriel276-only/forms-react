import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/login";
import Booking from "./components/rooms";
import RoomDetails from "./components/roomDetails";
import ReservaForm from "./components/reserva";
import Confirmacao from "./components/confirmacao";


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/rooms" element={<Booking />} />
        <Route path="/room/:id" element={<RoomDetails />} />
        <Route path="room/:id/reserva" element={<ReservaForm/>}/>
        <Route path="/confirmacao" element={<Confirmacao />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;