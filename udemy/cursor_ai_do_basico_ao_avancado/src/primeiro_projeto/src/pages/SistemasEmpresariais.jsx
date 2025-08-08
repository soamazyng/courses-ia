import React from 'react';
import { Container, Row, Col, Card, Badge, Button } from 'react-bootstrap';
import './SistemasEmpresariais.css';

function SistemasEmpresariais() {
  const tecnologias = [
    "Java", "Spring", "C#", ".NET", "PostgreSQL", "SQL Server", "Oracle", 
    "Microservices", "Docker", "Kubernetes", "AWS", "Azure", "Jenkins", 
    "Git", "JUnit", "Selenium", "REST API", "GraphQL", "Message Queues"
  ];

  const projetos = [
    {
      title: "ERP Completo",
      description: "Sistema integrado de gestão empresarial com módulos financeiro, RH, estoque e vendas.",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&h=400&q=80",
      tecnologias: ["Java", "Spring", "PostgreSQL", "Docker"]
    },
    {
      title: "CRM Avançado",
      description: "Sistema de gestão de relacionamento com clientes com automação de vendas e marketing.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&h=400&q=80",
      tecnologias: [".NET", "C#", "SQL Server", "Azure"]
    },
    {
      title: "Sistema de Vendas",
      description: "Plataforma completa de vendas com gestão de leads, orçamentos e comissões.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&h=400&q=80",
      tecnologias: ["Java", "Spring Boot", "MySQL", "Redis"]
    }
  ];

  const beneficios = [
    {
      icon: "⚡",
      title: "Performance Escalável",
      description: "Sistemas otimizados para crescer com seu negócio"
    },
    {
      icon: "🔒",
      title: "Segurança Empresarial",
      description: "Implementação de padrões de segurança corporativa"
    },
    {
      icon: "📊",
      title: "Relatórios Avançados",
      description: "Dashboards e relatórios em tempo real"
    },
    {
      icon: "🔄",
      title: "Integração Total",
      description: "Conectividade com sistemas existentes"
    }
  ];

  return (
    <div className="sistemas-empresariais-page">
      <Container className="py-5">
        {/* Hero Section */}
        <Row className="mb-5">
          <Col className="text-center">
            <h1 className="display-4 fw-bold mb-4 text-primary">
              Sistemas Empresariais
            </h1>
            <p className="lead fs-5 mb-4">
              Soluções personalizadas para otimizar processos internos 
              e aumentar a eficiência do seu negócio com sistemas robustos e escaláveis.
            </p>
            <div className="hero-image-container mb-4">
              <img 
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&h=400&q=80"
                alt="Sistemas Empresariais"
                className="hero-image"
              />
            </div>
          </Col>
        </Row>

        {/* Tecnologias */}
        <Row className="g-4 mb-5">
          <Col>
            <h2 className="text-center mb-4">Tecnologias Empresariais</h2>
            <div className="tecnologias-grid">
              {tecnologias.map((tech, index) => (
                <Badge key={index} bg="success" className="me-2 mb-2 fs-6">
                  {tech}
                </Badge>
              ))}
            </div>
          </Col>
        </Row>

        {/* Benefícios */}
        <Row className="g-4 mb-5">
          <Col>
            <h2 className="text-center mb-4">Benefícios dos nossos sistemas empresariais</h2>
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
            <h2 className="text-center mb-4">Sistemas em Destaque</h2>
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
              <h2 className="mb-4">Pronto para otimizar seus processos?</h2>
              <p className="lead mb-4">
                Entre em contato conosco e vamos discutir como podemos 
                criar o sistema empresarial perfeito para o seu negócio.
              </p>
              <Button variant="success" size="lg" className="me-3">
                Solicitar Orçamento
              </Button>
              <Button variant="outline-success" size="lg">
                Ver Mais Sistemas
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default SistemasEmpresariais; 