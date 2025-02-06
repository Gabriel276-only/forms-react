import React from "react";
import { Link } from "react-router-dom";
const rooms = [
  {
    id: 1,
    name: "Hotel Simples em Salvador",
    location: "300m da praia",
    price: 250,
    image: "/src/assets/quartos/quarto-1.jpg"
  },
  {
    id: 2,
    name: "Apartamento Luxo Vista Mar",
    location: "Vista para o mar",
    price: 450,
    image: "/src/assets/quartos/quarto-2.jpg"

  },
  {
    id: 3,
    name: "Pousada Conforto",
    location: "Centro da cidade",
    price: 180,
    image: "/src/assets/quartos/quarto-3.jpg"

  },

  {
    id: 4,
    name: "Pousada Conforto",
    location: "Rio de Janeiro",
    price: 180,
    image: "/src/assets/quartos/quarto-4.png"
  },
  {
    id: 5,
    name: "Pousada Conforto",
    location: "Centro da cidade",
    price: 180,
    image: "/src/assets/quartos/quarto-5.jpg"

  },


  
];

const Booking = () => {
  return (
    <div className="min-h-screen p-6 bg-gray-100">
      <div className="bg-blue-600 p-4 text-white flex justify-center rounded-lg ">
        <input
          type="text"
          placeholder="Destino"
          className="p-2 rounded-md text-black w-1/3 mr-2 bg-gray-50"
        />
        <input
          type="date"
          className="p-2 rounded-md text-black w-1/4 mr-2  bg-gray-50"
        />
        <button className="bg-yellow-400 px-6 py-2 rounded-md font-semibold hover:scale-105">
          Pesquisar
        </button>
      </div>

    <div className="min-h-screen p-6 bg-gray-100">
      <h1 className="text-3xl font-bold mb-6 text-center">Quartos Disponíveis</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 ">
        {rooms.map((room) => (
          <div key={room.id} className="bg-white p-4 rounded-lg shadow-md">
            <img src={room.image} alt={room.name} className="w-full rounded-md" />
            <h2 className="text-xl font-bold mt-2">{room.name}</h2>
            <p className="text-gray-600">{room.location}</p>
            <p className="font-bold mt-2 text-blue-600">R$ {room.price}/noite</p>
            <Link to={`/room/${room.id}`} className="bg-blue-600 text-white w-full py-2 rounded-md mt-2 block text-center">
              Ver detalhes
            </Link>
          </div>
        ))}
      </div>
      </div>
      </div>
  )};


export default Booking;
