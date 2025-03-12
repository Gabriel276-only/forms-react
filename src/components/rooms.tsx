import { useState } from "react";
import { Link } from "react-router-dom";
import { FaWifi, FaCoffee, FaParking, FaSwimmer, FaConciergeBell, FaAddressCard, FaMountain, FaSpa } from "react-icons/fa";

const rooms = [
  { id: 1, name: "Hotel Simples 300m da praia", location: "Salvador", price: 250, rating: 5, image: "/src/assets/quartos/quarto-1.jpg" },
  { id: 2, name: "Apartamento Luxo Vista Mar", location: "Recife", price: 450, rating: 4.5, image: "/src/assets/quartos/quarto-2.jpg" },
  { id: 3, name: "Quarto Frente ao Mar", location: "Florianópolis", price: 180, rating: 3.5, image: "/src/assets/quartos/quarto-3.jpg" },
  { id: 4, name: "Pousada Conforto", location: "Rio de Janeiro", price: 350, rating: 4, image: "/src/assets/quartos/quarto-4.png" },
  { id: 5, name: "Hotel Executivo Quarto Vip", location: "São Paulo", price: 580, rating: 5, image: "/src/assets/quartos/quarto-5.jpg" }
];

const StarRating = ({ rating }) => {
  const maxStars = 5;
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 !== 0;
  const emptyStars = maxStars - fullStars - (halfStar ? 1 : 0);

  return (
    <div className="flex" aria-label={`Avaliação: ${rating} de 5 estrelas`}>
      {Array(fullStars).fill(0).map((_, i) => (
        <span key={i} className="text-yellow-400 text-xl">★</span>
      ))}
      {halfStar && <span className="text-yellow-400 text-xl">☆</span>}
      {Array(emptyStars).fill(0).map((_, i) => (
        <span key={i + fullStars} className="text-gray-400 text-xl">★</span>
      ))}
    </div>
  );
};

const services = [
  { icon: <FaWifi className="text-2xl text-blue-500" />, text: "Wi-Fi gratuito em todos os quartos" },
  { icon: <FaCoffee className="text-2xl text-brown-500" />, text: "Café da manhã incluso" },
  { icon: <FaParking className="text-2xl text-gray-700" />, text: "Estacionamento gratuito" },
  { icon: <FaSwimmer className="text-2xl text-blue-600" />, text: "Piscina disponível" },
  { icon: <FaConciergeBell className="text-2xl text-yellow-500" />, text: "Atendimento 24h" },
  { icon: <FaAddressCard className="text-2xl text-green-500" />, text: "Cartão De identificação" },
  { icon: <FaMountain className="text-2xl text-green-500" />, text: "Passeios e Aventuras" },
  { icon: <FaSpa className="text-2xl text-green-500" />, text: "Serviços de Spa" }



];

const RoomCard = ({ room }) => (
  <div className="bg-white p-4 rounded-lg shadow-md">
    <img src={room.image} alt={room.name} className="w-full h-60 object-cover rounded-md" onError={(e) => e.target.src = "/src/assets/quartos/default.jpg"} />
    <h2 className="text-xl font-bold mt-2">{room.name}</h2>
    <p className="text-gray-600">{room.location}</p>
    <StarRating rating={room.rating} />
    <p className="font-bold mt-2 text-green-600">R$ {room.price}/noite</p>
    <Link to={`/room/${room.id}`} className="bg-green-600 text-white w-full py-2 rounded-md mt-2 block text-center hover:bg-green-700">
      Ver detalhes
    </Link>
  </div>
);

const Booking = () => {
  const [destino, setDestino] = useState("");
  const [data, setData] = useState("");
  const [filteredRooms, setFilteredRooms] = useState(rooms);

  const normalizeString = (str) => str.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase();
  
  const procurarQuarto = () => {
    const destinoNormalizado = normalizeString(destino);
    setFilteredRooms(rooms.filter(room => normalizeString(room.location).includes(destinoNormalizado)));
  };

  return (
    <div className="min-h-screen">
      <div className="bg-yellow-500 p-4 text-white flex justify-center rounded-lg">
        <input
          type="text"
          placeholder="Destino"
          value={destino}
          onChange={(e) => setDestino(e.target.value)}
          className="p-2 rounded-md text-black w-1/3 mr-2 bg-gray-50"
        />
        <input
          type="date"
          value={data}
          onChange={(e) => setData(e.target.value)}
          className="p-2 rounded-md text-black w-1/4 mr-2 bg-gray-50"
        />
        <button
          onClick={procurarQuarto}
          className="bg-yellow-300 px-6 py-2 rounded-md font-semibold hover:scale-105"
        >
          Pesquisar
        </button>
      </div>

      <div className="min-h-screen p-6 bg-gray-100">
        <h1 className="text-3xl font-bold mb-6 text-center">Quartos Disponíveis</h1>
        
        <div className="mb-8 p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4 text-center">Nossos Serviços</h2>
          <div className="flex gap-6 justify-center">
            {services.map((service, index) => (
              <div key={index} className="flex flex-col items-center group">
                {service.icon}
                <span className="text-sm text-gray-600 mt-2  text-center">{service.text}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredRooms.length > 0 ? filteredRooms.map(room => <RoomCard key={room.id} room={room} />) : <p className="text-center text-gray-500">Nenhum quarto encontrado.</p>}
        </div>
      </div>
    </div>
  );
};

export default Booking;
