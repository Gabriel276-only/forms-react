import React, { useState } from "react";
import { useForm } from "react-hook-form";

const ReservaForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [resumo, setResumo] = useState(null);

  const onSubmit = (data) => {
    setResumo(data);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-200 to-blue-400 p-4">
      <div className="bg-white shadow-lg rounded-xl p-6 w-full max-w-lg">
        <h2 className="text-2xl font-semibold text-center text-gray-700 mb-6">Reserva de Quarto</h2>
        
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
          <label className="block">
            <span className="text-gray-700">Check-in:</span>
            <input 
              type="date" 
              {...register("checkin", { required: "Escolha a data de check-in" })} 
              className="border p-2 w-full rounded-lg mt-1 focus:ring-2 focus:ring-blue-400 focus:outline-none" 
            />
            {errors.checkin && <p className="text-red-500 text-sm mt-1">{errors.checkin.message}</p>}
          </label>

          <label className="block">
            <span className="text-gray-700">Check-out:</span>
            <input 
              type="date" 
              {...register("checkout", { required: "Escolha a data de check-out" })} 
              className="border p-2 w-full rounded-lg mt-1 focus:ring-2 focus:ring-blue-400 focus:outline-none" 
            />
            {errors.checkout && <p className="text-red-500 text-sm mt-1">{errors.checkout.message}</p>}
          </label>

          <label className="block">
            <span className="text-gray-700">Telefone:</span>
            <input 
              type="tel" 
              {...register("telefone", { required: "Informe o seu telefone"})} 
              className="border p-2 w-full rounded-lg mt-1 focus:ring-2 focus:ring-blue-400 focus:outline-none" 
            />
            {errors.telefone && <p className="text-red-500 text-sm mt-1">{errors.telefone.message}</p>}
          </label>

          <label className="block">
            <span className="text-gray-700">Hóspedes:</span>
            <input 
              type="number" 
              min="1" 
              {...register("hospedes", { required: "Informe o número de hóspedes", min: 1 })} 
              className="border p-2 w-full rounded-lg mt-1 focus:ring-2 focus:ring-blue-400 focus:outline-none" 
            />
            {errors.hospedes && <p className="text-red-500 text-sm mt-1">{errors.hospedes.message}</p>}
          </label>

          <label className="block">
            <span className="text-gray-700">Preferências:</span>
            <select {...register("preferencia")} className="border p-2 w-full rounded-lg mt-1 focus:ring-2 focus:ring-blue-400 focus:outline-none">
              <option value="">Nenhuma</option>
              <option value="vista">Vista para o mar</option>
              <option value="cafe">Café da manhã incluso</option>
              <option value="luxo">Quarto de luxo</option>
            </select>
          </label>

          <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold p-3 rounded-lg mt-4 transition-all">
            Confirmar Reserva
          </button>
        </form>

        {resumo && (
          <div className="mt-6 p-4 bg-gray-100 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold text-gray-700">Resumo da Reserva</h3>
            <p className="text-gray-600"><strong>Check-in:</strong> {resumo.checkin}</p>
            <p className="text-gray-600"><strong>Check-out:</strong> {resumo.checkout}</p>
            <p className="text-gray-600"><strong>Telefone:</strong> {resumo.telefone}</p>
            <p className="text-gray-600"><strong>Hóspedes:</strong> {resumo.hospedes}</p>
            <p className="text-gray-600"><strong>Preferência:</strong> {resumo.preferencia || "Nenhuma"}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ReservaForm;
