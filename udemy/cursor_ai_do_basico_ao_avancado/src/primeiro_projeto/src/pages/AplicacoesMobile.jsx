import React from 'react';
import { Container, Row, Col, Card, Badge, Button } from 'react-bootstrap';
import './AplicacoesMobile.css';

function AplicacoesMobile() {
  const tecnologias = [
    "React Native", "Flutter", "Swift", "Kotlin", "Xamarin", "Ionic", 
    "Firebase", "AWS Mobile", "Google Play Console", "App Store Connect",
    "Redux", "MobX", "GraphQL", "REST API", "Push Notifications"
  ];

  const projetos = [
    {
      title: "App de Delivery",
      description: "Aplicativo completo de delivery com geolocalização, pagamentos e rastreamento em tempo real.",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&h=400&q=80",
      tecnologias: ["React Native", "Firebase", "Google Maps", "Stripe"]
    },
    {
      title: "App Financeiro",
      description: "Aplicativo de gestão financeira pessoal com gráficos, relatórios e sincronização em nuvem.",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&h=400&q=80",
      tecnologias: ["Flutter", "Dart", "SQLite", "Charts"]
    },
    {
      title: "App Corporativo",
      description: "Aplicativo interno para colaboradores com acesso a sistemas empresariais e comunicação.",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&h=400&q=80",
      tecnologias: ["Swift", "Kotlin", "Azure", "Microsoft Graph"]
    }
  ];

  const beneficios = [
    {
      icon: "📱",
      title: "Nativo e Híbrido",
      description: "Desenvolvimento nativo para performance máxima ou híbrido para economia"
    },
    {
      icon: "🚀",
      title: "Performance Otimizada",
      description: "Apps rápidos e fluidos com otimização para cada plataforma"
    },
    {
      icon: "🔒",
      title: "Segurança Avançada",
      description: "Implementação de criptografia e autenticação biométrica"
    },
    {
      icon: "📊",
      title: "Analytics Integrado",
      description: "Monitoramento completo do uso e performance dos apps"
    }
  ];

  return (
    <div className="aplicacoes-mobile-page">
      <Container className="py-5">
        {/* Hero Section */}
        <Row className="mb-5">
          <Col className="text-center">
            <h1 className="display-4 fw-bold mb-4 text-primary">
              Aplicações Mobile
            </h1>
            <p className="lead fs-5 mb-4">
              Desenvolvemos apps nativos e híbridos para iOS e Android 
              com experiência de usuário excepcional e performance otimizada.
            </p>
            <div className="hero-image-container mb-4">
              <img 
                src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&h=400&q=80"
                alt="Aplicações Mobile"
                className="hero-image"
              />
            </div>
          </Col>
        </Row>

        {/* Tecnologias */}
        <Row className="g-4 mb-5">
          <Col>
            <h2 className="text-center mb-4">Tecnologias Mobile</h2>
            <div className="tecnologias-grid">
              {tecnologias.map((tech, index) => (
                <Badge key={index} bg="info" className="me-2 mb-2 fs-6">
                  {tech}
                </Badge>
              ))}
            </div>
          </Col>
        </Row>

        {/* Benefícios */}
        <Row className="g-4 mb-5">
          <Col>
            <h2 className="text-center mb-4">Vantagens dos nossos apps mobile</h2>
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
            <h2 className="text-center mb-4">Apps em Destaque</h2>
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
              <h2 className="mb-4">Pronto para criar seu app mobile?</h2>
              <p className="lead mb-4">
                Entre em contato conosco e vamos discutir como podemos 
                criar o app perfeito para o seu negócio.
              </p>
              <Button variant="info" size="lg" className="me-3">
                Solicitar Orçamento
              </Button>
              <Button variant="outline-info" size="lg">
                Ver Mais Apps
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default AplicacoesMobile; 