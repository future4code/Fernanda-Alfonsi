import React, { useEffect, useState } from "react";
import { useHistory } from 'react-router-dom';
import axios from "axios";

function LoginPage() {
  const [admEmail, setAdmEmail] = useState("");
  const [admPassword, setAdmPassword] = useState("");
  const history = useHistory();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      history.push("/admList");
    }
    
  }, [history]);

  const handleEmail = (event) => {
    setAdmEmail(event.target.value);
  };

  const handlePassword = (event) => {
    setAdmPassword(event.target.value);
  };

  const login = () => {
    const body = {
      email: admEmail,
      password: admPassword
    };

    axios
      .post(
        "https://us-central1-labenu-apis.cloudfunctions.net/labeX/fernanda-dumont/login",
        body
      )
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        history.push("/admList");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <p>Login</p>
      <input value={admEmail} onChange={handleEmail} />
      <input value={admPassword} onChange={handlePassword} />
      <button onClick={login}>Fazer login</button>
    </div>
  );
}

  // const history=useHistory()

  // const goToCreateTrip=()=>{
  //   history.push('/createTrip')
  // }

  // const goToTripDetails=()=>{
  //   history.push('/tripDetails')
  // }

  // const goToListTrip=()=>{
  //   history.push('/listTrips')
  // }

  // const goToHome=()=>{
  //   history.push('/')
  // }
  // return (
  //   <div>
  //     <p>LoginPage</p>
  //     <button onClick={goToCreateTrip}>Criar Viagem</button>
  //     <button onClick={goToTripDetails}>Detalhes das Viagens</button>
  //     <button onClick={goToListTrip}>Listar Viagens</button>
  //     <button onClick={goToHome}>Voltar para Home</button>
      
  //   </div>
  // );
// }

export default LoginPage;
