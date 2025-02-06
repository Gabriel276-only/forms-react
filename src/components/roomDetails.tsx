import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Wifi, ParkingCircle, Utensils, CigaretteOff } from "lucide-react";

const rooms = [
  {
    id: 1,
    name: "Hotel Simples em Salvador",
    location: "300m da praia",
    price: 250,
    description: "Esta pousada possui restaurante e fica perto da Praia das Dunas.",
    image: "/src/assets/quartos/quarto-1.jpg",
    amenities: [
      { icon: CigaretteOff, label: "Não é permitido fumar" },
      { icon: ParkingCircle, label: "Estacionamento grátis" },
      { icon: Wifi, label: "Wi-Fi grátis" },
      { icon: Utensils, label: "Restaurante" }
    ]
  },
  {
    id: 2,
    name: "Apartamento Luxo Vista Mar",
    location: "Vista para o mar",
    price: 450,
    description: "Apartamento sofisticado com vista para o mar e restaurante.",
    image: "/src/assets/quartos/quarto-2.jpg",
    amenities: [
      { icon: CigaretteOff, label: "Não é permitido fumar" },
      { icon: ParkingCircle, label: "Estacionamento grátis" },
      { icon: Wifi, label: "Wi-Fi grátis" },
      { icon: Utensils, label: "Restaurante" }
    ]
  },
  {
    id: 3,
    name: "Beira Mar",
    location: "Próximo ao centro",
    price: 180,
    description: "Apartamento sofisticado com vista para o mar e restaurante.",
    image: "/src/assets/quartos/quarto-3.jpg",
    amenities: [
      { icon: CigaretteOff, label: "Não é permitido fumar" },
      { icon: ParkingCircle, label: "Estacionamento grátis" },
      { icon: Wifi, label: "Wi-Fi grátis" },
      { icon: Utensils, label: "Restaurante" }
    ]
  },
  {
    id: 4,
    name: "Pousada Conforto",
    location: "Rio de Janeiro",
    description: "Apartamento sofisticado com vista para o mar e restaurante.",
    price: 350,
    image: "/src/assets/quartos/quarto-4.png",
    amenities: [
      { icon: CigaretteOff, label: "Não é permitido fumar" },
      { icon: ParkingCircle, label: "Estacionamento grátis" },
      { icon: Wifi, label: "Wi-Fi grátis" },
      { icon: Utensils, label: "Restaurante" }
    ]
  },
  {
    id: 5,
    name: "Hotel Executivo Quarto Vip",
    location: "São Paulo",
    description: "Apartamento sofisticado com vista para o mar e restaurante.",
    price: 580,
    image: "/src/assets/quartos/quarto-5.jpg",
    amenities: [
      { icon: CigaretteOff, label: "Não é permitido fumar" },
      { icon: ParkingCircle, label: "Estacionamento grátis" },
      { icon: Wifi, label: "Wi-Fi grátis" },
      { icon: Utensils, label: "Restaurante" }
    ]
  },


];

const RoomDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const room = rooms.find((room) => room.id === parseInt(id));

  if (!room) {
    return <h2 className="text-center text-xl mt-10">Quarto não encontrado!</h2>;
  }

  return (
    <div className="min-h-screen p-6 bg-gray-100 flex flex-col items-center">
      {/* Imagem */}
      <img src={room.image} alt={room.name} className="w-full max-w-3xl rounded-lg shadow-md" />

      {/* Informações do Quarto */}
      <h1 className="text-3xl font-bold mt-4">{room.name}</h1>
      <p className="text-gray-600">{room.location}</p>
      <p className="text-lg font-bold text-blue-600 mt-2">R$ {room.price}/noite</p>
      <p className="text-gray-700 mt-4 text-center max-w-xl">{room.description}</p>

      {/* Comodidades */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
        {room.amenities.map((amenity, index) => (
          <div key={index} className="flex items-center space-x-2 bg-white p-3 rounded-lg shadow-md">
            <amenity.icon className="w-6 h-6 text-blue-600" />
            <span>{amenity.label}</span>
          </div>
        ))}
      </div>

      {/* Botão de Voltar */}
      <button
        
        className="mt-6 px-4 py-2 bg-gray-800 text-white rounded-lg shadow-md hover:bg-gray-700"
      >
        Comprar
      </button>
      <button
        onClick={() => navigate(-1)}
        className="mt-6 px-4 py-2 bg-gray-800 text-white rounded-lg shadow-md hover:bg-gray-700"
      >
        Voltar
      </button>
    </div>
  );
};

export default RoomDetails;
