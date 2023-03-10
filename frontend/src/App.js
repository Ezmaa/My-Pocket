import styled from "styled-components";
import Background from "./components/Background/Background";
import { MainLayout } from "./styles/Layouts";
// import image 

function App() {

  return (
    <AppStyled className="App">
      <Background></Background>
      <MainLayout>
        
      </MainLayout>
    </AppStyled>
  );
}

const AppStyled = styled.div`
height: 100vh;
background-image: url({});
position: relative;
main{
  flex: 1;
  background: rgba(252, 246, 249, 0.78);
  border: 3px solid #FFFFFF;
  backdrop-filter: blur(4.5px);
  border-radius: 32px;
  overflow-x: hidden;
  &::-webkit-scrollbar{
    width: 0;
  }
}
`

export default App;
