import Body from "./userforme/body.jsx";
import UserForm from "./userforme/UserForm.jsx";
import styled from "styled-components";

const Regroupement = styled.div`
  width: 500px;
  height: 500px;

  flex-grow: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 40px;
  // padding: 110px;
  background-color: #27416b;
  border-radius: 100px;
  position: absolute;
  top: 10px;
  left: 250px;
`;

function App() {
  return (
    <Regroupement>
      <UserForm />
      <Body />
    </Regroupement>
  );
}

export default App;
