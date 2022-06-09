import React, { useEffect } from "react";
import styled from "styled-components";
import { useState } from "react";
import axios from "axios";

const CustomButton = styled.button`
  width: 120px;
  height: 50px;
  flex-grow: 0;
  font-family: "Roboto Regular", sans-serif;
  font-size: 13px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
  letter-spacing: normal;
  text-align: centre;
  background-color: #aad500;
  color: #;
`;

const Container = styled.div`
  width: 1000px;
  height: 150px;
  flex-grow: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  gap: 10px;
  padding: 12px;
  //   background-color: #27416b;
  //   border-radius: 30px;
`;

const Titre = styled.div`
  height: 333px;
  flex-grow: 100;
  font-family: "Roboto Bold", sans-serif;
  font-size: 15px;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.57;
  letter-spacing: 1px;
  text-align: left;
  color: #000000;
  font-weight: 700;
`;
function Body() {
  const [pwShown, setPwShown] = useState(false);

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
      });
  };

  return (
    <div>
      <form>
        <Container>
          <Titre>
            Identifiant
            <br />
            <input
              type="text"
              name=" identifiant"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Titre>
          <Titre>
            Mot de passe
            <br />
            <input
              type="password"
              name2=" mot de passe"
              id="pwd"
              class="masked"
              value={mdp}
              onChange={(e) => setMdp(e.target.value)}
            />
          </Titre>
          <button type="button" onClick={() => setPwShown(!pwShown)} id="eye">
            <img
              src="https://eticweb.info/wp-content/uploads/1641742046_686_Affichermasquer-le-mot-de-passe-en-cliquant-sur-le-bouton.png"
              alt="eye"
            />
          </button>
        </Container>

        <div>
          <Container>
            <CustomButton disabled={!name + !mdp} onClick={cheked}>
              {"connexion".toUpperCase()}
            </CustomButton>
          </Container>
        </div>
      </form>
    </div>
  );
}

export default Body;
