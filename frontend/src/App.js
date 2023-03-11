import React, { useState, useMemo } from 'react'
import styled from "styled-components";
import { MainLayout } from './styles/Layouts'
import Background from './components/Background/Background'
import Navigation from './components/Navigation/Navigation'




function App() {
  const [active, setActive] = useState(1)

  const backgroundMemo = useMemo(() => {
    return <Background/>
  },[])

  return (
    <AppStyled bg={""} className="App">
      {backgroundMemo}
      <MainLayout>
        <Navigation active={active} setActive={setActive} />
      </MainLayout>
    </AppStyled>
  );
}

const AppStyled = styled.div`
  height: 100vh;
  background-image: url();
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
`;

export default App;