import React from 'react';
import { Container, Row, Col, Card, Button, Badge } from 'react-bootstrap';
import { homeData } from '../data/homeData';
import BlogNews from '../components/Home/BlogNews';
import './Home.css';

function Home() {
  const servicos = [
    {
      title: "Desenvolvimento Web",
      description: "Criamos sites responsivos, aplicações web modernas e sistemas complexos com as melhores tecnologias do mercado.",
      icon: "💻",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&h=400&q=80",
      tecnologias: ["React", "Node.js", "Python", "Laravel", "Vue.js"]
    },
    {
      title: "Aplicações Mobile",
      description: "Desenvolvemos apps nativos e híbridos para iOS e Android com experiência de usuário excepcional.",
      icon: "📱",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&h=400&q=80",
      tecnologias: ["React Native", "Flutter", "Swift", "Kotlin"]
    },
    {
      title: "Sistemas Empresariais",
      description: "Soluções personalizadas para otimizar processos internos e aumentar a eficiência do seu negócio.",
      icon: "⚡",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&h=400&q=80",
      tecnologias: ["Java", "Spring", "C#", ".NET", "PostgreSQL"]
    },
    {
      title: "Consultoria em TI",
      description: "Análise, arquitetura e planejamento de soluções tecnológicas para impulsionar seu negócio.",
      icon: "🏢",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&h=400&q=80",
      tecnologias: ["Arquitetura", "DevOps", "Cloud", "AWS", "Azure"]
    }
  ];

  return (
    <div className="home-page">
      <Container className="py-5">
        {/* Banner de Apresentação */}
        <Row className="mb-5">
          <Col className="text-center">
            <div className="banner-section">
              <h1 className="display-3 fw-bold mb-4 text-primary">
                {homeData.hero.title}
              </h1>
              <p className="lead mb-4 fs-4">
                {homeData.hero.subtitle}
              </p>
              <div className="banner-stats mb-4">
                <Row className="g-3">
                  {homeData.stats.map((stat, index) => (
                    <Col key={index} md={3} className="text-center">
                      <div className="banner-stat">
                        <h3 className="display-6 fw-bold text-primary mb-1">{stat.value}</h3>
                        <p className="text-muted mb-0">{stat.label}</p>
                      </div>
                    </Col>
                  ))}
                </Row>
              </div>
              <Button variant="primary" size="lg" className="me-3">
                Conheça Nossos Projetos
              </Button>
              <Button variant="outline-primary" size="lg">
                Entre em Contato
              </Button>
            </div>
          </Col>
        </Row>

        {/* Seção de Serviços */}
        <Row className="g-4 mb-5">
          <Col>
            <h2 className="text-center mb-5">Nossos Principais Serviços</h2>
            <Row className="g-4">
              {servicos.map((servico, index) => (
                <Col key={index} lg={6}>
                  <Card className="h-100 service-card">
                    <div className="service-image-container">
                      <img 
                        src={servico.image} 
                        alt={servico.title}
                        className="service-image"
                      />
                      <div className="service-icon-overlay">
                        <span className="service-icon">{servico.icon}</span>
                      </div>
                    </div>
                    <Card.Body className="d-flex flex-column">
                      <h3 className="h4 mb-3">{servico.title}</h3>
                      <p className="text-muted mb-3 flex-grow-1">{servico.description}</p>
                      <div className="service-technologies">
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

        {/* Features Section */}
        <Row className="g-4 mb-5">
          <h2 className="text-center mb-4">Por que escolher a Nova Código?</h2>
          {homeData.features.map((feature, index) => (
            <Col key={index} md={4}>
              <Card className="h-100 text-center feature-card">
                <Card.Body>
                  <div className="feature-icon mb-3">{feature.icon}</div>
                  <h3 className="h5 mb-3">{feature.title}</h3>
                  <p className="text-muted">{feature.description}</p>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        {/* Stats Section */}
        <Row className="g-4">
          <h2 className="text-center mb-4">Números que Importam</h2>
          {homeData.stats.map((stat, index) => (
            <Col key={index} md={3} className="text-center">
              <div className="stat-item">
                <h3 className="display-6 fw-bold text-primary">{stat.value}</h3>
                <p className="text-muted">{stat.label}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Blog News Section */}
      <BlogNews />
    </div>
  );
}

export default Home; 