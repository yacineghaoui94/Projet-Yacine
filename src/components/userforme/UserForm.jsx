import React from "react";
import styled from "styled-components";
const Regroupement = styled.div`
  width: 400px;
  height: 1000px;
  flex-grow: 0;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  gap: 4px;
  padding: 20px;
  // background-color: #27416b;
  // border-radius: 25% 10%;
`;
const Titre = styled.div`
  height: 5px;
  flex-grow: 1;
  font-family: "Roboto Bold", sans-serif;
  font-size: 30px;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: centre;
  color: #000000;
`;
function UserForm() {
  return (
    <Regroupement>
      <Titre>{"Contact Form".toUpperCase()}</Titre>
    </Regroupement>
  );
}

export default UserForm;
