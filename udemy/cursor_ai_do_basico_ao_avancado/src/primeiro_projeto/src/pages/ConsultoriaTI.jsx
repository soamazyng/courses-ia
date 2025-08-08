import React from 'react';
import { Container, Row, Col, Card, Badge, Button } from 'react-bootstrap';
import './ConsultoriaTI.css';

function ConsultoriaTI() {
  const tecnologias = [
    "Arquitetura", "DevOps", "Cloud", "AWS", "Azure", "Google Cloud", 
    "Docker", "Kubernetes", "Jenkins", "GitLab CI", "Terraform", 
    "Microservices", "API Gateway", "Service Mesh", "Monitoring", 
    "Logging", "Security", "Compliance", "Performance"
  ];

  const projetos = [
    {
      title: "Migração para Cloud",
      description: "Migração completa de infraestrutura on-premise para AWS com otimização de custos.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&h=400&q=80",
      tecnologias: ["AWS", "Docker", "Terraform", "Jenkins"]
    },
    {
      title: "Arquitetura de Microserviços",
      description: "Redesenho de arquitetura monolítica para microserviços com alta disponibilidade.",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&h=400&q=80",
      tecnologias: ["Kubernetes", "Docker", "API Gateway", "Monitoring"]
    },
    {
      title: "DevOps Implementation",
      description: "Implementação completa de pipeline CI/CD com automação de deploy e testes.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&h=400&q=80",
      tecnologias: ["Jenkins", "GitLab", "Docker", "Kubernetes"]
    }
  ];

  const beneficios = [
    {
      icon: "🏗️",
      title: "Arquitetura Robusta",
      description: "Design de sistemas escaláveis e resilientes"
    },
    {
      icon: "🚀",
      title: "DevOps Automatizado",
      description: "Implementação de pipelines CI/CD completos"
    },
    {
      icon: "☁️",
      title: "Cloud Native",
      description: "Migração e otimização para cloud computing"
    },
    {
      icon: "🔒",
      title: "Segurança Avançada",
      description: "Implementação de padrões de segurança corporativa"
    }
  ];

  return (
    <div className="consultoria-ti-page">
      <Container className="py-5">
        {/* Hero Section */}
        <Row className="mb-5">
          <Col className="text-center">
            <h1 className="display-4 fw-bold mb-4 text-primary">
              Consultoria em TI
            </h1>
            <p className="lead fs-5 mb-4">
              Análise, arquitetura e planejamento de soluções tecnológicas 
              para impulsionar seu negócio com estratégias inovadoras.
            </p>
            <div className="hero-image-container mb-4">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&h=400&q=80"
                alt="Consultoria em TI"
                className="hero-image"
              />
            </div>
          </Col>
        </Row>

        {/* Tecnologias */}
        <Row className="g-4 mb-5">
          <Col>
            <h2 className="text-center mb-4">Áreas de Consultoria</h2>
            <div className="tecnologias-grid">
              {tecnologias.map((tech, index) => (
                <Badge key={index} bg="warning" className="me-2 mb-2 fs-6">
                  {tech}
                </Badge>
              ))}
            </div>
          </Col>
        </Row>

        {/* Benefícios */}
        <Row className="g-4 mb-5">
          <Col>
            <h2 className="text-center mb-4">Vantagens da nossa consultoria</h2>
            <Row className="g-4">
              {beneficios.map((beneficio, index) => (
                <Col key={index} md={6} lg={3}>
                  <Card className="h-100 text-center beneficio-card">
                    <Card.Body>
                      <div className="beneficio-icon mb-3">{beneficio.icon}</div>
                      <h4 className="h5 mb-3">{beneficio.title}</h4>
                      <p className="text-muted">{beneficio.description}</p>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>

        {/* Projetos */}
        <Row className="g-4 mb-5">
          <Col>
            <h2 className="text-center mb-4">Projetos de Consultoria</h2>
            <Row className="g-4">
              {projetos.map((projeto, index) => (
                <Col key={index} lg={4}>
                  <Card className="h-100 projeto-card">
                    <div className="projeto-image-container">
                      <img 
                        src={projeto.image} 
                        alt={projeto.title}
                        className="projeto-image"
                      />
                    </div>
                    <Card.Body className="d-flex flex-column">
                      <h4 className="h5 mb-3">{projeto.title}</h4>
                      <p className="text-muted mb-3 flex-grow-1">{projeto.description}</p>
                      <div className="projeto-technologies">
                        {projeto.tecnologias.map((tech, techIndex) => (
                          <Badge key={techIndex} bg="secondary" className="me-1 mb-1">
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

        {/* CTA */}
        <Row className="g-4">
          <Col className="text-center">
            <div className="cta-section">
              <h2 className="mb-4">Pronto para transformar sua TI?</h2>
              <p className="lead mb-4">
                Entre em contato conosco e vamos discutir como podemos 
                otimizar sua infraestrutura e processos de TI.
              </p>
              <Button variant="warning" size="lg" className="me-3">
                Solicitar Consultoria
              </Button>
              <Button variant="outline-warning" size="lg">
                Ver Mais Projetos
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ConsultoriaTI; 