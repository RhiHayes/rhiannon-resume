import React from "react";
import { useTheme } from 'styled-components';
import { ImBrightnessContrast } from "react-icons/im";
import { FaBars, FaGithub } from 'react-icons/fa';
import { Bio } from "../../data/constants";
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavItems, NavLink, ButtonContainer, GitHubButton, MobileMenu, MobileLink, BrightButton } from "./NavbarStyle.js"

const Navbar = (props) => {

const [isOpen, setIsOpen] = React.useState(false);
const theme = useTheme()

const handleClick = () => {
  // Call the function received from the parent and pass data
  props.updateTheme();
};

    return (
        <Nav>
            <NavbarContainer>
              <NavLogo to='/'>
                <a style={{ display: "flex", alignItems: "center", color: "white", marginBottom: '20;'}}>
                </a>
                <BrightButton><ImBrightnessContrast onClick={handleClick} size="25px"></ImBrightnessContrast></BrightButton>
              </NavLogo>
                <MobileIcon>
                <FaBars onClick={() => {
                  setIsOpen(!isOpen)
                }} />
                </MobileIcon>
                <NavItems>
          <NavLink href="#about">About</NavLink>
          <NavLink href='#skills'>Skills</NavLink>
          <NavLink href='#experience'>Experience</NavLink>
          <NavLink href='#projects'>Projects</NavLink>
          <NavLink href='#education'>Education</NavLink>
        </NavItems>
        <ButtonContainer>
          <GitHubButton href={Bio.github} target="_blank"><FaGithub /></GitHubButton>
        </ButtonContainer>
        {
          isOpen &&
          <MobileMenu isOpen={isOpen}>
            <MobileLink href="#about" onClick={() => {
              setIsOpen(!isOpen)
            }}>About</MobileLink>
            <MobileLink href='#skills' onClick={() => {
              setIsOpen(!isOpen)
            }}>Skills</MobileLink>
            <MobileLink href='#experience' onClick={() => {
              setIsOpen(!isOpen)
            }}>Experience</MobileLink>
            <MobileLink href='#projects' onClick={() => {
              setIsOpen(!isOpen)
            }}>Projects</MobileLink>
            <MobileLink href='#education' onClick={() => {
              setIsOpen(!isOpen)
            }}>Education</MobileLink>
            <GitHubButton style={{padding: '10px 16px',background: `${theme.primary}`, color: 'white',width: 'max-content', marginTop: "15px"}} href={Bio.github} target="_blank">Github Profile</GitHubButton>
          </MobileMenu>
        }
      </NavbarContainer>
    </Nav>
        )
}

export default Navbar;