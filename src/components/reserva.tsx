import React, { useState } from "react";
import { useForm } from "react-hook-form";
import bg from "../assets/fundo-hotel.jpg";

const ReservaForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [resumo, setResumo] = useState(null);

  const onSubmit = (data) => {
    setResumo(data);
  };

  return (
    <div className="relative min-h-screen bg-cover bg-center" style={{ backgroundImage: `url(${bg})` }}>
      <div className="flex items-center justify-center min-h-screen">
        <div className="bg-white shadow-2xl shadow-black rounded-lg p-8 max-w-md w-full">
          <h2 className="text-2xl font-semibold mb-6 text-center">Reserva de Quarto</h2>

          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
            <label className="flex flex-col">
              Check-in:
              <input 
                type="date" 
                {...register("checkin", { required: "Escolha a data de check-in" })} 
                className="border p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
              />
              {errors.checkin && <p className="text-red-500 text-sm">{errors.checkin.message}</p>}
            </label>

            <label className="flex flex-col">
              Check-out:
              <input 
                type="date" 
                {...register("checkout", { required: "Escolha a data de check-out" })} 
                className="border p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
              />
              {errors.checkout && <p className="text-red-500 text-sm">{errors.checkout.message}</p>}
            </label>

            <label className="flex flex-col">
              Telefone:
              <input 
                type="tel" 
                {...register("telefone", { required: "Informe o seu telefone"})} 
                className="border p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
              />
              {errors.telefone && <p className="text-red-500 text-sm">{errors.telefone.message}</p>}
            </label>

            <label className="flex flex-col">
              Hóspedes:
              <input 
                type="number" 
                min="1" 
                {...register("hospedes", { required: "Informe o número de hóspedes", min: 1 })} 
                className="border p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
              />
              {errors.hospedes && <p className="text-red-500 text-sm">{errors.hospedes.message}</p>}
            </label>

            <label className="flex flex-col">
              Preferências:
              <select {...register("preferencia")} className="border p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option value="">Nenhuma</option>
                <option value="vista">Preferência 1</option>
                <option value="cafe">Preferência 2</option>
                <option value="luxo">Preferência 3</option>
              </select>
            </label>

            <button type="submit" className="bg-blue-600 text-white p-3 rounded-lg mt-4 hover:bg-blue-700 transition duration-200">Confirmar Reserva</button>
          </form>

          {resumo && (
            <div className="container mx-auto p-4">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/2 p-2">
                <h3 className="text-xl font-semibold">Resumo da Reserva</h3>
                <p><strong>Check-in:</strong> {resumo.checkin}</p>
                <p><strong>Check-out:</strong> {resumo.checkout}</p>
                <p><strong>Hóspedes:</strong> {resumo.hospedes}</p>
                <p><strong>Preferência:</strong> {resumo.preferencia || "Nenhuma"}</p>
              </div>
              <div className="md:w-1/2 p-2">
              </div>
            </div>
          </div>
  )}
        </div>
      </div>
    </div>
  );
};

export default ReservaForm;