import "../App.css";
import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

function Login() {
  const navigate = useNavigate();
  const [response, setResponse] = useState(0);
  const [email, setEmail] = useState(0);
  const [senha, setSenha] = useState(0);

  const onChangeEmail = (e) => {
    const { value } = e.target;
    setEmail(value);
  };

  const onChangeSenha = (e) => {
    const { value } = e.target;
    setSenha(value);
  };

  let logar = () => {
    axios
      .post("http://localhost:8080/projetonetflix/login", {
        email: email,
        senha: senha,
      })
      .then((resp) => {
        //gravando na sessão do cliente local (no frontend)
        localStorage.setItem("sessionID", resp?.data?.sessionID);
        localStorage.setItem("idade", resp?.data?.idade);
        console.log(resp.data);
      })
      .catch((error) => {
        console.log(error);
      });
    navigate("/Home");
  };

  return (
    <div className="App">
      <header className="App-header">
        <label>Email:</label> <input onChange={onChangeEmail}></input>
        <label>Senha:</label> <input onChange={onChangeSenha}></input>
        <button onClick={logar}>Logar</button>
        {response?.data?.nome}
      </header>
    </div>
  );
}

export default Login;
