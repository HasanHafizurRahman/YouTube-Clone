import './App.css';
import styled, { ThemeProvider } from "styled-components";
import Menu from './Components/Menu';
import Navbar from './Components/Navbar';
import { darkTheme, lightTheme } from './utils/Theme';
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Video from './pages/Video';

const Container = styled.div`
  display: flex;
`
const Main = styled.div`
  flex: 7; 
  background-color: ${({ theme }) => theme.bg};
  `;
const Wrapper = styled.div` 
padding: 22px 96px;
`


function App() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
    <Container>
      <Menu darkMode={darkMode} setDarkMode={setDarkMode} />
      <Main>
      <Navbar />
      <Wrapper>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/video/:id' element={<Video />} />
        </Routes>
      </Wrapper>
      </Main>
    </Container>
    </ThemeProvider>
  );
}


export default App;
