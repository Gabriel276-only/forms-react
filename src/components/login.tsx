import React, { useState } from "react";
import { useForm } from "react-hook-form";
import fundo from "../assets/img-1.jpg";
import Google from "../assets/google-icon-logo-svgrepo-com.svg";
import { motion } from 'framer-motion';

const Login = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const [isRegistering, setIsRegistering] = useState(false);

  const onSubmit = (data) => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    if (isRegistering) {
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
      const user = users.find(user => user.email === data.email && user.password === data.password);
      if (user) {
        alert("Login bem-sucedido!");
        window.location.href = "/rooms";
      } else {
        alert("Usuário não encontrado. Cadastre-se primeiro.");
      }
    }
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen w-full">
      {/* Imagem de fundo */}
      <div className="relative w-full md:w-1/2 h-64 md:h-screen">
        <img src={fundo} alt="Background" className="w-full h-full object-cover" />
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 1 }}
          className="absolute top-10 right-0 md:top-1/4 md:left-1/4 bg-orange-300 p-4 rounded-l-3xl shadow-lg opacity-85"
        >
          <h1 className="text-2xl md:text-4xl font-extrabold text-white">Torne seus sonhos realidade</h1>
          <p className="text-sm md:text-xl font-medium text-white mt-2">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi beatae nisi minus recusandae  voluptates.  
          </p>
        </motion.div>
      </div>

      {/* Formulário */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="w-full md:w-1/2 flex flex-col p-6 md:p-20 justify-center"
      >
        <h1 className="text-lg md:text-xl text-black font-semibold mb-6">* Interactive Brand</h1>

        <form onSubmit={handleSubmit(onSubmit)} className="w-full flex flex-col">
          <h2 className="text-xl md:text-2xl font-serif font-semibold mb-4">{isRegistering ? "Cadastro" : "Login"}</h2>
          <p className="text-sm mb-6">{isRegistering ? "Crie sua conta." : "Bem-vindo de volta!"}</p>

          <input 
            type="email"
            placeholder="Email"
            {...register("email", { required: "Email é obrigatório" })}
            className="w-full py-3 px-4 text-black border-b border-gray-300 outline-none focus:border-orange-400 transition-all mb-2"
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}

          <input 
            type="password"
            placeholder="Senha"
            {...register("password", { required: "Senha é obrigatória" })}
            className="w-full py-3 px-4 text-black border-b border-gray-300 outline-none focus:border-orange-400 transition-all mb-2"
          />
          {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}

          <div className="w-full flex flex-col items-center">
            <button type="submit" className="bg-black text-white w-full md:w-3/4 p-3 rounded-2xl m-2 hover:bg-gray-800">
              {isRegistering ? "Cadastrar" : "Login"}
            </button>
            <button type="button" onClick={() => setIsRegistering(!isRegistering)} className="border-2 text-black w-full md:w-3/4 p-3 rounded-2xl m-2 hover:bg-gray-200">
              {isRegistering ? "Já tem uma conta? Login" : "Criar Conta"}
            </button>

            <div className="w-full flex items-center justify-center relative py-2">
              <div className="w-full h-[1px] bg-black"></div>
              <p className="text-lg absolute bg-white px-2">ou</p>
            </div>
            
            <button type="button" className="border-2 text-black w-full sm:w-3/4 p-2 flex items-center justify-center rounded-2xl m-2 hover:bg-gray-200"> 
              <img src={Google} className="h-6 mr-2" alt="Google logo" />Login com Google
            </button>
            
            <div className="w-full flex items-center mt-2">
              <input type="checkbox" className="w-4 h-4 mr-2" />
              <p>Lembrar de mim?</p>
            </div>
            
            <p className="text-sm font-medium whitespace-nowrap cursor-pointer underline underline-offset-2 mt-2">Esqueceu a senha?</p>
          </div>

          <p className="text-sm text-black text-center m-4">
            {isRegistering ? "Já tem uma conta? " : "Não tem uma conta? "}
            <span className="font-semibold text-orange-500 cursor-pointer hover:underline" onClick={() => setIsRegistering(!isRegistering)}>
              {isRegistering ? "Faça login aqui" : "Cadastre-se aqui"}
            </span>
          </p>
        </form>
      </motion.div>
    </div>
  );
};

export default Login;
