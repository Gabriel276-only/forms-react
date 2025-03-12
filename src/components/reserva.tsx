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
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-500 to-indigo-800 p-6">
      <div className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-lg">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Reserva de Quarto</h2>
        {!resumo ? (
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            <div>
              <label className="block text-gray-700 font-semibold">Check-in</label>
              <input type="date" {...register("checkin", { required: "Escolha a data de check-in" })}
                className="mt-1 w-full p-3 border border-gray-300 rounded-lg focus:ring-4 focus:ring-blue-300 outline-none transition" />
              {errors.checkin && <p className="text-red-500 text-sm mt-1">{errors.checkin.message}</p>}
            </div>

            <div>
              <label className="block text-gray-700 font-semibold">Check-out</label>
              <input type="date" {...register("checkout", {
                required: "Escolha a data de check-out",
                validate: value => new Date(value) > new Date(checkin) || "A data de check-out deve ser após o check-in",
              })} className="mt-1 w-full p-3 border border-gray-300 rounded-lg focus:ring-4 focus:ring-blue-300 outline-none transition" />
              {errors.checkout && <p className="text-red-500 text-sm mt-1">{errors.checkout.message}</p>}
            </div>

            <div>
              <label className="block text-gray-700 font-semibold">Telefone</label>
              <input type="tel" {...register("telefone", { required: "Informe o seu telefone" })}
                className="mt-1 w-full p-3 border border-gray-300 rounded-lg focus:ring-4 focus:ring-blue-300 outline-none transition" />
              {errors.telefone && <p className="text-red-500 text-sm mt-1">{errors.telefone.message}</p>}
            </div>

            <div>
              <label className="block text-gray-700 font-semibold">Hóspedes</label>
              <input type="number" min="1" {...register("hospedes", { required: "Informe o número de hóspedes", min: 1 })}
                className="mt-1 w-full p-3 border border-gray-300 rounded-lg focus:ring-4 focus:ring-blue-300 outline-none transition" />
              {errors.hospedes && <p className="text-red-500 text-sm mt-1">{errors.hospedes.message}</p>}
            </div>

            <div>
              <label className="block text-gray-700 font-semibold">Preferências</label>
              <select {...register("preferencia")} className="mt-1 w-full p-3 border border-gray-300 rounded-lg focus:ring-4 focus:ring-blue-300 outline-none transition">
                <option value="">Nenhuma</option>
                <option value="vista">Vista para o mar</option>
                <option value="cafe">Café da manhã incluso</option>
                <option value="luxo">Quarto de luxo</option>
              </select>
            </div>

            <button type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold p-3 rounded-lg mt-4 transition-all transform hover:scale-105">Confirmar Reserva</button>
          </form>
        ) : (
          <div className="text-center bg-green-100 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold">Reserva Confirmada!</h3>
            <p className="text-gray-600 mt-2">Sua reserva foi realizada com sucesso.</p>
            <div className="mt-4 text-gray-800">
              <p><strong>Check-in:</strong> {resumo.checkin}</p>
              <p><strong>Check-out:</strong> {resumo.checkout}</p>
              <p><strong>Telefone:</strong> {resumo.telefone}</p>
              <p><strong>Hóspedes:</strong> {resumo.hospedes}</p>
              <p><strong>Preferência:</strong> {resumo.preferencia || "Nenhuma"}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ReservaForm;
