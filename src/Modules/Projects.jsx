import React, { Fragment } from "react";
import CustomNav from "../Components/NavBar";
import { Container, Row, Col } from "react-bootstrap";
import { projectsList } from "../utils/helperList";

const Projects = () => {
  return (
    <>
      <CustomNav />
      <Container className="mt-5">
        {projectsList.map((proj) => (
          <Fragment key={proj.label}>
            <Row className="my-5 px-md-5" xs={1} md={2}>
              <Col>
                <a href={proj.src} target="_blank" rel="noopener noreferrer">
                  <iframe
                    width="380"
                    height="190"
                    src={`https://www.youtube.com/embed/${proj.imgSrc}`}
                    title={proj.label}
                    frameBorder="0"
                    allowFullScreen
                  ></iframe>
                </a>
              </Col>
              <Col className="pt-2">
                <h3 className="font-weight-bold color-customBlue ml-100 mb-0">
                  {proj.label}
                </h3>
                <br />
                {proj.description && (
                  <>
                    <span>{proj.description}</span>
                    <br />
                  </>
                )}
                <br />
                <br />
                {proj.githubSrc && (
                  <>
                    Source code:
                    <a
                      href={proj.githubSrc}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {proj.label}
                    </a>
                    <br />
                  </>
                )}
              </Col>
            </Row>
          </Fragment>
        ))}
      </Container>
    </>
  );
};

export default Projects;
