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
    <div className="relative min-h-screen bg-slate-200 ">
      <div className= "max-w-40">
        <h2 className="text-2xl font-semibold mb-4">Reserva de Quarto</h2>

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
          <label>
            Check-in:
            <input 
              type="date" 
              {...register("checkin", { required: "Escolha a data de check-in" })} 
              className="border p-2 w-full" 
            />
            {errors.checkin && <p className="text-red-500 text-sm">{errors.checkin.message}</p>}
          </label>

          <label>
            Check-out:
            <input 
              type="date" 
              {...register("checkout", { required: "Escolha a data de check-out" })} 
              className="border p-2 w-full" 
            />
            {errors.checkout && <p className="text-red-500 text-sm">{errors.checkout.message}</p>}
          </label>

          <label>
            Telefone:
            <input 
              type="tel" 
              {...register("telefone", { required: "Informe o seu telefone"})} 
              className="border p-2 w-full" 
            />
            {errors.hospedes && <p className="text-red-500 text-sm">{errors.hospedes.message}</p>}
          </label>

          <label>
            Hóspedes:
            <input 
              type="number" 
              min="1" 
              {...register("hospedes", { required: "Informe o número de hóspedes", min: 1 })} 
              className="border p-2 w-full" 
            />
            {errors.hospedes && <p className="text-red-500 text-sm">{errors.hospedes.message}</p>}
          </label>

          <label>
            Preferências:
            <select {...register("preferencia")} className="border p-2 w-full">
              <option value="">Nenhuma</option>
              <option value="vista">preferencia 1</option>
              <option value="cafe">preferencia 2</option>
              <option value="luxo">preferencia 3</option>
            </select>
          </label>

          <button type="submit" className="bg-blue-600 text-white p-3 rounded-lg mt-4">Confirmar Reserva</button>
        </form>

        {resumo && (
          <div className="mt-6 p-4 bg-gray-100 rounded-lg">
            <h3 className="text-xl font-semibold">Resumo da Reserva</h3>
            <p><strong>Check-in:</strong> {resumo.checkin}</p>
            <p><strong>Check-out:</strong> {resumo.checkout}</p>
            <p><strong>Hóspedes:</strong> {resumo.hospedes}</p>
            <p><strong>Preferência:</strong> {resumo.preferencia || "Nenhuma"}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ReservaForm;
