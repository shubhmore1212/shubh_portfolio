import React from 'react';
import CustomNav from '../Components/NavBar';
import { Container, Row } from 'react-bootstrap';
import IconCard from '../Components/IconCard';
import { skillsList } from '../utils/helperList';

const Skills = () => {
  return(
    <>
      <CustomNav />
      <Container className="mt-5">
            <Row className="justify-content-evenly">
              {skillsList.map(s => (
                <IconCard key={s.label} src={s.src} />
              ))}
            </Row>
      </Container>
    </>
  )
};

export default Skills;
