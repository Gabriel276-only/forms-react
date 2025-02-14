import React, { useState } from "react";
import { Link } from "react-router-dom";

const rooms = [
  {
    id: 1,
    name: "Hotel Simples 300m da praia",
    location: "Salvador",
    price: 250,
    rating: 5, 
    image: "/src/assets/quartos/quarto-1.jpg"
  },
  {
    id: 2,
    name: "Apartamento Luxo Vista Mar",
    location: "Recife",
    price: 450,
    rating: 4.5, 
    image: "/src/assets/quartos/quarto-2.jpg"
  },
  {
    id: 3,
    name: "Quarto Frente ao Mar",
    location: "Florianópolis",
    price: 180,
    rating: 3.5, 
    image: "/src/assets/quartos/quarto-3.jpg"
  },
  {
    id: 4,
    name: "Pousada Conforto",
    location: "Rio de Janeiro",
    price: 350,
    rating: 4, 
    image: "/src/assets/quartos/quarto-4.png"
  },
  {
    id: 5,
    name: "Hotel Executivo Quarto Vip",
    location: "São Paulo",
    price: 580,
    rating: 5, 
    image: "/src/assets/quartos/quarto-5.jpg"
  }
];

const StarRating = ({ rating }) => {
  const maxStars = 5;
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 !== 0;
  const emptyStars = maxStars - fullStars - (halfStar ? 1 : 0);

  return (
    <div className="flex">
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


const Booking = () => {
  const [destino, setDestino] = useState("");
  const [data, setData] = useState("");
  const [filteredRooms, setFilteredRooms] = useState(rooms);

  const normalizeString = (str) => {
    return str
      .normalize("NFD") 
      .replace(/[\u0300-\u036f]/g, "") 
      .toLowerCase(); 
  };
  
  const procurarQuarto = () => {
    const destinoNormalizado = normalizeString(destino);
  
    const quartosFiltrados = rooms.filter(room =>
      normalizeString(room.location).includes(destinoNormalizado)
    );
  
    setFilteredRooms(quartosFiltrados);
  };
  

  return (
    <div className="min-h-screen p-6 bg-gray-100">
      <div className="bg-blue-600 p-4 text-white flex justify-center rounded-lg">
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
          className="bg-yellow-400 px-6 py-2 rounded-md font-semibold hover:scale-105"
        >
          Pesquisar
        </button>
      </div>

      <div className="min-h-screen p-6 bg-gray-100">
        <h1 className="text-3xl font-bold mb-6 text-center">Quartos Disponíveis</h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredRooms.map((room) => (
            <div key={room.id} className="bg-white p-4 rounded-lg shadow-md">
              <img src={room.image} alt={room.name} className="w-full rounded-md" />
              <h2 className="text-xl font-bold mt-2">{room.name}</h2>
              <p className="text-gray-600">{room.location}</p>
              <StarRating rating={room.rating} />
              <p className="font-bold mt-2 text-blue-600">R$ {room.price}/noite</p>
              <Link
                to={`/room/${room.id}`}
                className="bg-blue-600 text-white w-full py-2 rounded-md mt-2 block text-center"
              >
                Ver detalhes
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Booking;
