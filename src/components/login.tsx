import React, { useState } from "react";
import { useForm } from "react-hook-form";
import fundo from "../assets/img-1.jpg";
import Google from "../assets/google-icon-logo-svgrepo-com.svg";
import { Booking } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const [isRegistering, setIsRegistering] = useState(false);

  const onSubmit = (data) => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    if (isRegistering) {
      // Cadastro
      if (users.some(user => user.email === data.email)) {
        alert("Usuário já existe!");
      } else {
        users.push(data);
        localStorage.setItem("users", JSON.stringify(users));
        alert("Conta criada com sucesso!");
        setIsRegistering(false);
        reset();
      }
    } else {
      // Login
      const user = users.find((user: { email: string; password: string }) => user.email === data.email && user.password === data.password);
      if (user) {
        alert("Login bem-sucedido!");
        window.location.href = "/rooms";
      } else {
        alert("Usuário não encontrado. Cadastre-se primeiro.");
      }
    }
  };

  return (
    <div className="w-full min-h-screen flex">
      {/* Imagem de fundo */}
      <div className="relative w-1/2 h-screen flex flex-col">
        <img src={fundo} alt="Background" className="w-full h-full object-cover" />
        <div className="absolute top-[25%] left-[20%] bg-orange-300 p-4 rounded-l-2xl shadow-lg opacity-85 animate-slide-left">
          <h1 className="text-4xl font-extrabold text- text-white">Turn your ideas into Reality</h1>
          <p className="text-xl font-medium text-white mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
      </div>

      {/* Formulário */}
      <div className="w-1/2 h-screen flex flex-col p-20 justify-center">
        <h1 className="text-xl text-black font-semibold mb-6">* Interactive Brand</h1>
        
        <form onSubmit={handleSubmit(onSubmit)} className="w-full flex flex-col">
          <h2 className="text-2xl font-serif font-semibold mb-4">{isRegistering ? "Cadastro" : "Login"}</h2>
          <p className="text-sm mb-6">{isRegistering ? "Crie sua conta." : "Bem-vindo de volta!"}</p>
          
          {/* Campo de e-mail */}
          <input 
            type="email"
            placeholder="Email"
            {...register("email", { required: "Email é obrigatório" })}
            className="w-full py-3 px-4 text-black border-b border-gray-300 outline-none focus:border-orange-400 transition-all mb-2"
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}

          {/* Campo de senha */}
          <input 
            type="password"
            placeholder="Senha"
            {...register("password", { required: "Senha é obrigatória" })}
            className="w-full py-3 px-4 text-black border-b border-gray-300 outline-none focus:border-orange-400 transition-all mb-2"
          />
          {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}

          {/* Botões */}
          <div className="w-full flex flex-col items-center">
            <button type="submit" className="bg-black text-white w-full p-3 rounded-2xl m-2 hover:bg-gray-800">
              {isRegistering ? "Cadastrar" : "Login"}
            </button>
            <button type="button" onClick={() => setIsRegistering(!isRegistering)} className="border-2 text-black w-full p-3 rounded-2xl m-2 hover:bg-gray-200">
              {isRegistering ? "Já tem uma conta? Login" : "Criar Conta"}
            </button>

            <div className="w-full flex items-center justify-center relative py-2">
              <div className="w-full h-[1px] bg-black"></div>
              <p className="text-lg absolute bg-white px-2">ou</p>
            </div>
            
            {/* Login com Google */}
            <button type="button" className="border-2 text-black w-full p-2 flex items-center justify-center rounded-2xl m-2 hover:bg-gray-200"> 
              <img src={Google} className="h-6 mr-2" alt="Google logo" />Login com Google
            </button>
            
            {/* Lembrar de mim */}
            <div className="w-full flex items-center mt-2">
              <input type="checkbox" className="w-4 h-4 mr-2" />
              <p>Lembrar de mim?</p>
            </div>
            
            {/* Esqueci a senha */}
            <p className="text-sm font-medium whitespace-nowrap cursor-pointer underline underline-offset-2 mt-2">Esqueceu a senha?</p>
          </div>

          <p className="text-sm text-black text-center m-4">
            {isRegistering ? "Já tem uma conta? " : "Não tem uma conta? "}
            <span className="font-semibold text-orange-500 cursor-pointer hover:underline" onClick={() => setIsRegistering(!isRegistering)}>
              {isRegistering ? "Faça login aqui" : "Cadastre-se aqui"}
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
