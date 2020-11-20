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

  

export default LoginPage;
