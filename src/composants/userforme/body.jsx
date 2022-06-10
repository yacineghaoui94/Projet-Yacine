import React, { useEffect } from "react";
import styled from "styled-components";
import { useState } from "react";
import axios from "axios";

const CustomForm = styled.form`
  flex-grow: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  gap: 5px;
  padding: 12px;
  width: 100%;
}
`;

const Label = styled.label`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #ffffff;
`;

const CustomInput = styled.input`
  width: 250px;
  height: 30px;
  background: #ffffff;
  border-radius: 8px;
`;

const ErrorMessage = styled.div`
  width: 250px;
  flex-grow: 100;
  font-family: "Roboto Bold", sans-serif;
  font-size: 15px;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.57;
  letter-spacing: 1px;
  text-align: center;
  font-weight: 700;
  color: #a94442;
  background-color: #f2dede;
  border-color: #ebccd1;
`;

const CustomButton = styled.button`
  width: 150px;
  height: 30px;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #000000;
  background: #f1f5fa;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  margin-top: 20px;
  &:disabled {
    color: grey;
  }
  &:hover {
    cursor: pointer;
  }
`;

function Body() {
  const [pwShown, setPwShown] = useState(false);
  const [alerte, setAlerte] = useState(false);

  useEffect(() => {
    const p = document.getElementById("pwd");
    p.setAttribute("type", pwShown ? "text" : "password");
  }, [pwShown]);

  const [name, setName] = useState("");
  const [mdp, setMdp] = useState("");

  const cheked = () => {
    setName("");
    setMdp("");

    console.log("yqcinnnnne");
    axios
      .post("http://localhost:3000/api/chekedUser/", {
        name,
        mdp,
      })
      .then((response) => {
        console.log(response);
        setAlerte(false);
      })
      .catch((error) => {
        console.log(error);
        setAlerte(true);
      });
  };

  return (
    <CustomForm>
      <Label>
        Identifiant
        <br />
        <CustomInput
          type="text"
          name=" identifiant"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </Label>
      <Label>
        Mot de passe
        <br />
        <CustomInput
          type="password"
          name2=" mot de passe"
          id="pwd"
          class="masked"
          value={mdp}
          onChange={(e) => setMdp(e.target.value)}
        />
      </Label>

      <ErrorMessage>
        {alerte && <div>Adresse email ou mot de passe non valide.</div>}
      </ErrorMessage>
      <CustomButton disabled={!name + !mdp} onClick={cheked}>
        {"connexion".toUpperCase()}
      </CustomButton>
    </CustomForm>
  );
}

export default Body;
