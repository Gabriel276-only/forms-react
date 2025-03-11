import { useLocation, useNavigate } from "react-router-dom";

const Confirmacao = () => {
  const location = useLocation();
  const dados = location.state;
  const navigate = useNavigate(); // Use navigate hook

  const reservaExistente = localStorage.getItem("reserva") ? JSON.parse(localStorage.getItem("reserva") as string) : null;

  if (reservaExistente) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-red-200 to-red-400 p-4">
        <div className="bg-white shadow-lg rounded-xl p-6 w-full max-w-lg">
          <h2 className="text-2xl font-semibold text-center text-gray-700 mb-6">
            Aviso: Já existe uma reserva em seu nome
          </h2>
          <div className="p-4 bg-gray-100 rounded-lg shadow-sm">
            <p className="text-gray-600"><strong>Check-in:</strong> {reservaExistente.checkin}</p>
            <p className="text-gray-600"><strong>Check-out:</strong> {reservaExistente.checkout}</p>
            <p className="text-gray-600"><strong>Telefone:</strong> {reservaExistente.telefone}</p>
            <p className="text-gray-600"><strong>Hóspedes:</strong> {reservaExistente.hospedes}</p>
            <p className="text-gray-600"><strong>Preferência:</strong> {reservaExistente.preferencia || "Nenhuma"}</p>
          </div>
        </div>

        <button
          onClick={() => navigate('/')} // Navega para a página inicial
          className="mt-6 px-4 py-2 bg-gray-800 text-white rounded-lg shadow-md hover:bg-gray-700"
        >
          Voltar ao Início
        </button>
      </div>
    );
  }

  if (!dados) {
    return <p className="text-center text-gray-700">Nenhuma reserva encontrada.</p>;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-green-200 to-green-400 p-4">
      <div className="bg-white shadow-lg rounded-xl p-6 w-full max-w-lg">
        <h2 className="text-2xl font-semibold text-center text-gray-700 mb-6">
          Confirmação da Reserva
        </h2>
        <div className="p-4 bg-gray-100 rounded-lg shadow-sm">
          <p className="text-gray-600"><strong>Check-in:</strong> {dados.checkin}</p>
          <p className="text-gray-600"><strong>Check-out:</strong> {dados.checkout}</p>
          <p className="text-gray-600"><strong>Telefone:</strong> {dados.telefone}</p>
          <p className="text-gray-600"><strong>Hóspedes:</strong> {dados.hospedes}</p>
          <p className="text-gray-600"><strong>Preferência:</strong> {dados.preferencia || "Nenhuma"}</p>
        </div>
      </div>

      <button
        onClick={() => navigate('/')} // Navega para a página inicial
        className="mt-6 px-4 py-2 bg-gray-800 text-white rounded-lg shadow-md hover:bg-gray-700"
      >
        Voltar ao Início
      </button>
    </div>
  );
};

export default Confirmacao;
