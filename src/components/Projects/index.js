import React from 'react'
import { useState } from 'react'
import ProjectCard from '../Cards/ProjectCards.js'
import { projects } from '../../data/constants'
import { Container, Wrapper, Title, Desc, CardContainer, ToggleButtonGroup, ToggleButton, Divider } from "./ProjectsStyle.js"

const Projects = ({openModal,setOpenModal}) => {
  const [toggle, setToggle] = useState('All');
  return (
    <Container id="projects">
      <Wrapper>
        <Title>Projects</Title>
        <ToggleButtonGroup >
          {toggle === 'All' ?
            <ToggleButton active value="All" onClick={() => setToggle('All')}>ALL</ToggleButton>
            :
            <ToggleButton value="All" onClick={() => setToggle('All')}>ALL</ToggleButton>
          }
          <Divider />
          {toggle === 'Web Development' ?
            <ToggleButton active value="Web Development" onClick={() => setToggle('Web Development')}>WEB DEVELOPMENT</ToggleButton>
            :
            <ToggleButton value="Web Development" onClick={() => setToggle('Web Development')}>WEB DEVELOPMENT</ToggleButton>
          }
          <Divider />
          {toggle === 'Personal Projects' ?
            <ToggleButton active value="Personal Projects" onClick={() => setToggle('Personal Projects')}>PERSONAL PROJECTS</ToggleButton>
            :
            <ToggleButton value="Personal Projects" onClick={() => setToggle('Personal Projects')}>PERSONAL PROJECTS</ToggleButton>
          }
          <Divider />
          {toggle === 'Misc' ?
            <ToggleButton active value="Misc" onClick={() => setToggle('Misc')}>MISCELLANEOUS</ToggleButton>
            :
            <ToggleButton value="Misc" onClick={() => setToggle('Misc')}>MISCELLANEOUS</ToggleButton>
          }
        </ToggleButtonGroup>
        <CardContainer>
          {toggle === 'All' && projects
            .map((project) => (
              <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal}/>
            ))}
          {projects
            .filter((item) => item.category == toggle)
            .map((project) => (
              <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal}/>
            ))}
        </CardContainer>
      </Wrapper>
    </Container>
  )
}

export default Projects