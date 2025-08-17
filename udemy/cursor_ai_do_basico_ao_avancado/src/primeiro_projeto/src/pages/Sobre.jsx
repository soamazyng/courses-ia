import React from 'react';
import { Container, Row, Col, Card, Badge } from 'react-bootstrap';
import './Sobre.css';

function Sobre() {
  // Dados da página Sobre
  const sobreData = {
    hero: {
      title: "Sobre a Nova Código",
      subtitle:
        "Somos uma empresa de tecnologia que transforma ideias em soluções digitais que funcionam",
    },

    missao: {
      title: "Nossa Missão",
      description:
        "Criar soluções de software que resolvem problemas reais dos nossos clientes, usando tecnologia de ponta e código de qualidade para impulsionar seus negócios.",
    },

    visao: {
      title: "Nossa Visão",
      description:
        "Ser a empresa de tecnologia mais confiável do Brasil, conhecida por entregar projetos no prazo, com qualidade e que realmente resolvem os problemas dos clientes.",
    },

    valores: [
      {
        icon: "💻",
        title: "Código de Qualidade",
        description:
          "Escrevemos código limpo e bem estruturado que é fácil de manter e expandir",
      },
      {
        icon: "🚀",
        title: "Sempre Atualizados",
        description:
          "Usamos as tecnologias mais modernas e eficientes do mercado",
      },
      {
        icon: "🤝",
        title: "Trabalho em Equipe",
        description:
          "Colaboramos de perto com nossos clientes para entender exatamente o que precisam",
      },
      {
        icon: "📈",
        title: "Resultados Reais",
        description:
          "Nosso foco é entregar soluções que realmente melhoram o negócio do cliente",
      },
      {
        icon: "🎯",
        title: "Compromisso",
        description:
          "Cumprimos prazos e entregamos exatamente o que foi prometido",
      },
      {
        icon: "🌱",
        title: "Aprendizado Contínuo",
        description: "Nossa equipe está sempre estudando e se atualizando",
      },
    ],

    timeline: [
      {
        year: "2018",
        title: "Começamos",
        description:
          "Fundamos a Nova Código com o sonho de criar software que realmente funciona",
      },
      {
        year: "2019",
        title: "Primeiros Clientes",
        description:
          "Desenvolvemos nossos primeiros sites e aplicações para pequenas empresas",
      },
      {
        year: "2020",
        title: "Crescimento",
        description:
          "Nossa equipe cresceu e começamos a trabalhar com empresas maiores",
      },
      {
        year: "2021",
        title: "Especialização",
        description:
          "Nos tornamos especialistas em tecnologias modernas e metodologias ágeis",
      },
      {
        year: "2022",
        title: "Reconhecimento",
        description:
          "O mercado começou a nos reconhecer como uma empresa de qualidade",
      },
      {
        year: "2024",
        title: "Liderança",
        description:
          "Agora lideramos projetos inovadores e usamos as tecnologias mais avançadas",
      },
    ],

    equipe: {
      description:
        "Nossa equipe tem desenvolvedores experientes, designers criativos e especialistas em tecnologia. Trabalhamos de forma ágil e estamos sempre aprendendo as novidades do mercado.",
      stats: [
        { value: "25+", label: "Desenvolvedores" },
        { value: "8+", label: "Áreas de Especialização" },
        { value: "6+", label: "Anos de Experiência" },
        { value: "100+", label: "Projetos Entregues" },
      ],
    },
  };

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
            <h2 className="text-center mb-4">O Que Nos Move</h2>
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

        {/* Timeline */}
        <Row className="g-4 mb-5">
          <Col>
            <h2 className="text-center mb-4">Nossa Jornada</h2>
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

        {/* Equipe */}
        <Row className="g-4">
          <Col>
            <h2 className="text-center mb-4">Quem Somos</h2>
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