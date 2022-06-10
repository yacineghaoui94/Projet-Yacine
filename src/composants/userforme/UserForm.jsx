import React from "react";
import styled from "styled-components";

const Titre = styled.div`
  width: 250px;
  height: 62px;
  flex-grow: 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 4px;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  line-height: 38px;
  color: #ffffff;
  text-align: center;
`;

function UserForm() {
  return <Titre>{"Authentification"}</Titre>;
}

export default UserForm;

