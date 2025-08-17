import React from 'react';
import { Container, Row, Col, Card, Button, Badge } from 'react-bootstrap';
import BlogNews from '../components/Home/BlogNews';
import './Home.css';

function Home() {
  // Dados da página Home
  const homeData = {
    hero: {
      title: "Bem-vindo à Nova Código",
      subtitle:
        "Transformando ideias em realidade através do desenvolvimento de software inovador e soluções digitais de alta qualidade",
    },

    features: [
      {
        icon: "💻",
        title: "Desenvolvimento Web",
        description: "Sites responsivos, aplicações web modernas e sistemas complexos com as melhores tecnologias",
      },
      {
        icon: "📱",
        title: "Apps Mobile",
        description: "Aplicações nativas e híbridas para iOS e Android com experiência de usuário excepcional",
      },
      {
        icon: "⚡",
        title: "Sistemas Empresariais",
        description: "Soluções personalizadas para otimizar processos e aumentar a eficiência do seu negócio",
      },
    ],

    stats: [
      { value: "100+", label: "Projetos Entregues" },
      { value: "25+", label: "Desenvolvedores" },
      { value: "6+", label: "Anos de Experiência" },
      { value: "50+", label: "Clientes Satisfeitos" },
    ],
  };

  const servicos = [
    {
      title: "Sites e Aplicações Web",
      description: "Criamos sites responsivos e aplicações web modernas que funcionam perfeitamente em qualquer dispositivo.",
      icon: "💻",
      tecnologias: ["React", "Node.js", "Python", "Laravel", "Vue.js"]
    },
    {
      title: "Apps para Celular",
      description: "Desenvolvemos aplicativos para iPhone e Android que seus clientes vão adorar usar.",
      icon: "📱",
      tecnologias: ["React Native", "Flutter", "Swift", "Kotlin"]
    },
    {
      title: "Sistemas para Empresas",
      description: "Criamos sistemas personalizados que organizam e automatizam os processos da sua empresa.",
      icon: "⚡",
      tecnologias: ["Java", "Spring", "C#", ".NET", "PostgreSQL"]
    },
    {
      title: "Consultoria e Planejamento",
      description: "Ajudamos você a escolher as melhores tecnologias e planejar como a tecnologia pode melhorar seu negócio.",
      icon: "🏢",
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
            <h2 className="text-center mb-4">Como Podemos Ajudar Você</h2>
            <Row className="g-4">
              {servicos.map((servico, index) => (
                <Col key={index} lg={6}>
                  <Card className="h-100 service-card text-center">
                    <Card.Body>
                      <div className="service-icon mb-3">
                        <span className="display-4">{servico.icon}</span>
                      </div>
                      <h3 className="h4 mb-3">{servico.title}</h3>
                      <p className="text-muted mb-3">{servico.description}</p>
                      <div className="service-technologies">
                        {servico.tecnologias.map((tech, techIndex) => (
                          <Badge key={techIndex} bg="light" text="dark" className="me-1 mb-1">
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