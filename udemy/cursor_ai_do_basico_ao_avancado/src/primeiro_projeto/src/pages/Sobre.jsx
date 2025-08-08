import React from 'react';
import { Container, Row, Col, Card, Badge } from 'react-bootstrap';
import { sobreData } from '../data/sobreData';
import './Sobre.css';

function Sobre() {
  return (
    <div className="sobre-page">
      <Container className="py-5">
        {/* Hero Section */}
        <Row className="mb-5">
          <Col className="text-center">
            <h1 className="display-4 fw-bold mb-4">{sobreData.hero.title}</h1>
            <p className="lead">{sobreData.hero.subtitle}</p>
          </Col>
        </Row>

        {/* Missão e Visão */}
        <Row className="g-4 mb-5">
          <Col md={6}>
            <Card className="h-100">
              <Card.Body className="text-center">
                <h3 className="mb-3">{sobreData.missao.title}</h3>
                <p className="text-muted">{sobreData.missao.description}</p>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6}>
            <Card className="h-100">
              <Card.Body className="text-center">
                <h3 className="mb-3">{sobreData.visao.title}</h3>
                <p className="text-muted">{sobreData.visao.description}</p>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Valores */}
        <Row className="g-4 mb-5">
          <Col>
            <h2 className="text-center mb-4">Nossos Valores</h2>
            <Row className="g-3">
              {sobreData.valores.map((valor, index) => (
                <Col key={index} md={4}>
                  <Card className="h-100 text-center">
                    <Card.Body>
                      <div className="valor-icon mb-3">{valor.icon}</div>
                      <h4 className="h6 mb-2">{valor.title}</h4>
                      <p className="text-muted small">{valor.description}</p>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>

        {/* Serviços */}
        <Row className="g-4 mb-5">
          <Col>
            <h2 className="text-center mb-4">Nossos Serviços</h2>
            <Row className="g-4">
              {sobreData.servicos.map((servico, index) => (
                <Col key={index} md={6}>
                  <Card className="h-100">
                    <Card.Body>
                      <h4 className="mb-3">{servico.title}</h4>
                      <p className="text-muted mb-3">{servico.description}</p>
                      <div className="tecnologias">
                        {servico.tecnologias.map((tech, techIndex) => (
                          <Badge key={techIndex} bg="primary" className="me-1 mb-1">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>

        {/* Timeline */}
        <Row className="g-4 mb-5">
          <Col>
            <h2 className="text-center mb-4">Nossa História</h2>
            <div className="timeline-container">
              {sobreData.timeline.map((item, index) => (
                <div key={index} className="timeline-item">
                  <div className="timeline-year">
                    <span className="year-badge">{item.year}</span>
                  </div>
                  <div className="timeline-content">
                    <h5 className="mb-2">{item.title}</h5>
                    <p className="text-muted mb-0">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </Col>
        </Row>

        {/* Tecnologias */}
        <Row className="g-4 mb-5">
          <Col>
            <h2 className="text-center mb-4">Tecnologias que Utilizamos</h2>
            <div className="tecnologias-grid">
              {sobreData.tecnologias.map((tech, index) => (
                <Badge key={index} bg="secondary" className="me-2 mb-2 fs-6">
                  {tech}
                </Badge>
              ))}
            </div>
          </Col>
        </Row>

        {/* Metodologias */}
        <Row className="g-4 mb-5">
          <Col>
            <h2 className="text-center mb-4">Metodologias de Trabalho</h2>
            <div className="metodologias-grid">
              {sobreData.metodologias.map((metodo, index) => (
                <Badge key={index} bg="success" className="me-2 mb-2 fs-6">
                  {metodo}
                </Badge>
              ))}
            </div>
          </Col>
        </Row>

        {/* Equipe */}
        <Row className="g-4">
          <Col>
            <h2 className="text-center mb-4">Nossa Equipe</h2>
            <p className="text-center text-muted mb-4">{sobreData.equipe.description}</p>
            <Row className="g-3">
              {sobreData.equipe.stats.map((stat, index) => (
                <Col key={index} md={3} className="text-center">
                  <div className="stat-item">
                    <h3 className="display-6 fw-bold text-primary">{stat.value}</h3>
                    <p className="text-muted">{stat.label}</p>
                  </div>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Sobre; 