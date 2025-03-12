import { useLocation, useNavigate } from "react-router-dom";

const PaymentPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dadosReserva = location.state;

  const handleConfirmarPagamento = () => {
    // Simulação de processo de pagamento
    alert("Pagamento confirmado!");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-200 to-blue-400 p-4">
      <div className="bg-white shadow-lg rounded-xl p-6 w-full max-w-lg">
        <h2 className="text-2xl font-semibold text-center text-gray-700 mb-6">
          Página de Pagamento
        </h2>

        <div className="p-4 bg-gray-100 rounded-lg shadow-sm mb-6">
          <h3 className="text-xl font-semibold">Resumo da Reserva</h3>
          <p><strong>Check-in:</strong> {dadosReserva.checkin}</p>
          <p><strong>Check-out:</strong> {dadosReserva.checkout}</p>
          <p><strong>Telefone:</strong> {dadosReserva.telefone}</p>
          <p><strong>Hóspedes:</strong> {dadosReserva.hospedes}</p>
          <p><strong>Preferência:</strong> {dadosReserva.preferencia || "Nenhuma"}</p>
        </div>

        <div className="p-4 bg-gray-100 rounded-lg shadow-sm">
          <h3 className="text-xl font-semibold">Detalhes de Pagamento</h3>
          <input
            type="text"
            placeholder="Número do cartão"
            className="p-2 mb-4 w-full border rounded"
          />
          <input
            type="text"
            placeholder="Data de validade (MM/AA)"
            className="p-2 mb-4 w-full border rounded"
          />
          <input
            type="text"
            placeholder="CVV"
            className="p-2 mb-4 w-full border rounded"
          />

          <button
            onClick={() => {
              handleConfirmarPagamento();
              navigate('/');
            }}
            className="w-full p-2 bg-green-600 text-white rounded-lg"
            
          >
            Confirmar Pagamento
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;
