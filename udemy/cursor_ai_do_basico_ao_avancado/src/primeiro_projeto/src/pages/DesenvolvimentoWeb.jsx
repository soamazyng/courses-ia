import React from 'react';
import { Container, Row, Col, Card, Badge, Button } from 'react-bootstrap';
import './DesenvolvimentoWeb.css';

function DesenvolvimentoWeb() {
  const tecnologias = [
    "React", "Node.js", "Python", "PHP", "Laravel", "Vue.js", "Angular", 
    "TypeScript", "JavaScript", "HTML5", "CSS3", "Sass", "Bootstrap", 
    "Tailwind CSS", "Next.js", "Nuxt.js", "Express.js", "Django", "Flask"
  ];

  const projetos = [
    {
      title: "E-commerce Completo",
      description: "Plataforma de vendas online com sistema de pagamentos, gestão de estoque e painel administrativo.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&h=400&q=80",
      tecnologias: ["React", "Node.js", "MongoDB", "Stripe"]
    },
    {
      title: "Sistema de Gestão",
      description: "Aplicação web para gestão empresarial com módulos de RH, financeiro e operacional.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&h=400&q=80",
      tecnologias: ["Vue.js", "Laravel", "PostgreSQL", "Docker"]
    },
    {
      title: "Portal Corporativo",
      description: "Portal interno para colaboradores com intranet, comunicação e ferramentas de trabalho.",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&h=400&q=80",
      tecnologias: ["Angular", "C#", ".NET", "SQL Server"]
    }
  ];

  const beneficios = [
    {
      icon: "🚀",
      title: "Performance Otimizada",
      description: "Aplicações rápidas e responsivas com carregamento otimizado"
    },
    {
      icon: "📱",
      title: "Design Responsivo",
      description: "Sites que funcionam perfeitamente em todos os dispositivos"
    },
    {
      icon: "🔒",
      title: "Segurança Avançada",
      description: "Implementação de melhores práticas de segurança web"
    },
    {
      icon: "⚡",
      title: "SEO Otimizado",
      description: "Sites otimizados para motores de busca"
    }
  ];

  return (
    <div className="desenvolvimento-web-page">
      <Container className="py-5">
        {/* Hero Section */}
        <Row className="mb-5">
          <Col className="text-center">
            <h1 className="display-4 fw-bold mb-4 text-primary">
              Desenvolvimento Web
            </h1>
            <p className="lead fs-5 mb-4">
              Criamos sites responsivos, aplicações web modernas e sistemas complexos 
              com as melhores tecnologias do mercado para impulsionar seu negócio.
            </p>
            <div className="hero-image-container mb-4">
              <img 
                src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1469&h=400&q=80"
                alt="Desenvolvimento Web"
                className="hero-image"
              />
            </div>
          </Col>
        </Row>

        {/* Tecnologias */}
        <Row className="g-4 mb-5">
          <Col>
            <h2 className="text-center mb-4">Tecnologias que Utilizamos</h2>
            <div className="tecnologias-grid">
              {tecnologias.map((tech, index) => (
                <Badge key={index} bg="primary" className="me-2 mb-2 fs-6">
                  {tech}
                </Badge>
              ))}
            </div>
          </Col>
        </Row>

        {/* Benefícios */}
        <Row className="g-4 mb-5">
          <Col>
            <h2 className="text-center mb-4">Por que escolher nosso desenvolvimento web?</h2>
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
            <h2 className="text-center mb-4">Projetos em Destaque</h2>
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
              <h2 className="mb-4">Pronto para transformar sua presença digital?</h2>
              <p className="lead mb-4">
                Entre em contato conosco e vamos discutir como podemos 
                criar a solução web perfeita para o seu negócio.
              </p>
              <Button variant="primary" size="lg" className="me-3">
                Solicitar Orçamento
              </Button>
              <Button variant="outline-primary" size="lg">
                Ver Mais Projetos
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default DesenvolvimentoWeb; 