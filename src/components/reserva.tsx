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
            <label className="block">
              <span className="text-gray-700">Check-in:</span>
              <input
                type="date"
                {...register("checkin", { required: "Escolha a data de check-in" })}
                className="border p-2 w-full rounded-lg mt-1 focus:ring-2 focus:ring-blue-400 focus:outline-none"
              />
              {errors.checkin && <p className="text-red-500 text-sm mt-1">{(errors.checkin as any).message}</p>}
            </label>

            <label className="block">
              <span className="text-gray-700">Check-out:</span>
              <input
                type="date"
                {...register("checkout", {
                  required: "Escolha a data de check-out",
                  validate: (value) => new Date(value) > new Date(checkin) || "A data de check-out deve ser após o check-in",
                })}
                className="border p-2 w-full rounded-lg mt-1 focus:ring-2 focus:ring-blue-400 focus:outline-none"
              />
              {errors.checkout && <p className="text-red-500 text-sm mt-1">{(errors.checkout as any).message}</p>}
            </label>

            <label className="block">
              <span className="text-gray-700">Telefone:</span>
              <input
                type="tel"
                {...register("telefone", { required: "Informe o seu telefone" })}
                className="border p-2 w-full rounded-lg mt-1 focus:ring-2 focus:ring-blue-400 focus:outline-none"
              />
              {errors.telefone && <p className="text-red-500 text-sm mt-1">{(errors.telefone as any).message}</p>}
            </label>

            <label className="block">
              <span className="text-gray-700">Hóspedes:</span>
              <input
                type="number"
                min="1"
                {...register("hospedes", { required: "Informe o número de hóspedes", min: 1 })}
                className="border p-2 w-full rounded-lg mt-1 focus:ring-2 focus:ring-blue-400 focus:outline-none"
              />
              {errors.hospedes && <p className="text-red-500 text-sm mt-1">{(errors.hospedes as any).message}</p>}
            </label>

            <label className="block">
              <span className="text-gray-700">Preferências:</span>
              <select
                {...register("preferencia")}
                className="border p-2 w-full rounded-lg mt-1 focus:ring-2 focus:ring-blue-400 focus:outline-none"
              >
                <option value="">Nenhuma</option>
                <option value="vista">Vista para o mar</option>
                <option value="cafe">Café da manhã incluso</option>
                <option value="luxo">Quarto de luxo</option>
              </select>
            </label>

            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold p-3 rounded-lg mt-4 transition-all"
            >
              Confirmar Reserva
            </button>
          </form>
        ) : (
          <div className="text-center bg-green-100 p-4 rounded-lg">
            <h3 className="text-lg font-semibold">Reserva Confirmada!</h3>
            <p>A sua reserva foi confirmada com sucesso.</p>
            <p>
              <strong>Check-in:</strong> {resumo.checkin}
            </p>
            <p>
              <strong>Check-out:</strong> {resumo.checkout}
            </p>
            <p>
              <strong>Telefone:</strong> {resumo.telefone}
            </p>
            <p>
              <strong>Hóspedes:</strong> {resumo.hospedes}
            </p>
            <p>
              <strong>Preferência:</strong> {resumo.preferencia || "Nenhuma"}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ReservaForm;