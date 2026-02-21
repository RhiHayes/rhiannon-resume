import './App.css';
import { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from './utils/Themes';
import Navbar from './components/Navbar';
import  HeroSection  from "./components/HeroSection";
import Expirence from './components/Expirence';
import Skills from './components/Skills';
import Projects from './components/Projects';
import ProjectDetails from './components/ProjectDetails';
import Education from './components/Education';
import { BrowserRouter as Router } from 'react-router-dom';
import Contact from './components/Contact';
import Footer from './components/Footer';

const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  width: 100%;
  height: 100%;
  overflow-x: hidden;
`;

const Wrapper = styled.div`
  background: linear-gradient(
    38.73deg, 
    rgba(204, 0, 187, 0.15) 0%, 
    rgba(201, 32, 184, 0) 50%), 
    linear-gradient(
      141.27deg, 
      rgba(0, 70, 209, 0) 50%, 
      rgba(0, 70, 209, 0.15) 100%);
  width: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 100%,30% 98%, 0 100%);
`;


function App() {

  const [theme, setTheme] = useState(lightTheme); 
  const [openModal, setOpenModal] = useState({ state: false, project: null });

  const handleThemeClick = () => {
    if(theme == lightTheme) {
      setTheme(darkTheme);
    } else if(theme == darkTheme) {
      setTheme(lightTheme);
    }
  };

  return (
    <ThemeProvider theme={theme}>
    <Router>
      <Navbar updateTheme={handleThemeClick}/>
          <Body>
          <HeroSection />
            <Wrapper>
              <Skills />
              </Wrapper>
              <Wrapper>
              <Expirence />
            <Projects openModal={openModal} setOpenModal={setOpenModal}/>
            </Wrapper>
            <Wrapper>
            <Education />
            {openModal.state &&
            <ProjectDetails openModal={openModal} setOpenModal={setOpenModal} />
          }
          <Contact />
          </Wrapper>
          <Footer />
          </Body>
        </Router>
    </ThemeProvider>
  );
}

export default App;
