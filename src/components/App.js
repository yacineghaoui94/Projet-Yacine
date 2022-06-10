import Body from "./userforme/body.jsx";
import UserForm from "./userforme/UserForm.jsx";
import styled from "styled-components";

const Regroupement = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  gap: 16px;

  background: #27426b;
  border-radius: 50px 0px;
  position: absolute;
  top: 100px;
  left: 700px;
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
