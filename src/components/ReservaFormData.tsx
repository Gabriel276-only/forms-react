import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

interface ReservaFormData {
  checkin: string;
  checkout: string;
  telefone: string;
  hospedes: number;
  preferencia: string;
}

const ReservaForm = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm<ReservaFormData>();
  const navigate = useNavigate();
  const [resumo, setResumo] = useState<ReservaFormData | null>(null);

  const checkin = watch("checkin");

  const onSubmit = (data: ReservaFormData) => {
    // Salva a reserva no localStorage
    localStorage.setItem("reserva", JSON.stringify(data));

    setResumo(data);
    Swal.fire({
      title: "Reserva Confirmada!",
      text: "Sua reserva foi realizada com sucesso.",
      icon: "success",
      confirmButtonText: "OK",
    }).then(() => {
      navigate(`/confirmacao`, { state: { ...data } });
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-200 to-blue-400 p-4">
      <div className="bg-white shadow-lg rounded-xl p-6 w-full max-w-lg">
        <h2 className="text-2xl font-semibold text-center text-gray-700 mb-6">Reserva de Quarto</h2>

        {!resumo ? (
          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
            {/* Form fields */}
          </form>
        ) : (
          <div className="text-center bg-green-100 p-4 rounded-lg">
            <h3 className="text-lg font-semibold">Reserva Confirmada!</h3>
            <p>A sua reserva foi confirmada com sucesso.</p>
            <p><strong>Check-in:</strong> {resumo.checkin}</p>
            <p><strong>Check-out:</strong> {resumo.checkout}</p>
            <p><strong>Telefone:</strong> {resumo.telefone}</p>
            <p><strong>Hóspedes:</strong> {resumo.hospedes}</p>
            <p><strong>Preferência:</strong> {resumo.preferencia || "Nenhuma"}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ReservaForm;