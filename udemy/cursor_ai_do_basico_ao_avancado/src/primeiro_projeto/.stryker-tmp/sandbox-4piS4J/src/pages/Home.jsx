// @ts-nocheck
function stryNS_9fa48() {
  var g = typeof globalThis === 'object' && globalThis && globalThis.Math === Math && globalThis || new Function("return this")();
  var ns = g.__stryker__ || (g.__stryker__ = {});
  if (ns.activeMutant === undefined && g.process && g.process.env && g.process.env.__STRYKER_ACTIVE_MUTANT__) {
    ns.activeMutant = g.process.env.__STRYKER_ACTIVE_MUTANT__;
  }
  function retrieveNS() {
    return ns;
  }
  stryNS_9fa48 = retrieveNS;
  return retrieveNS();
}
stryNS_9fa48();
function stryCov_9fa48() {
  var ns = stryNS_9fa48();
  var cov = ns.mutantCoverage || (ns.mutantCoverage = {
    static: {},
    perTest: {}
  });
  function cover() {
    var c = cov.static;
    if (ns.currentTestId) {
      c = cov.perTest[ns.currentTestId] = cov.perTest[ns.currentTestId] || {};
    }
    var a = arguments;
    for (var i = 0; i < a.length; i++) {
      c[a[i]] = (c[a[i]] || 0) + 1;
    }
  }
  stryCov_9fa48 = cover;
  cover.apply(null, arguments);
}
function stryMutAct_9fa48(id) {
  var ns = stryNS_9fa48();
  function isActive(id) {
    if (ns.activeMutant === id) {
      if (ns.hitCount !== void 0 && ++ns.hitCount > ns.hitLimit) {
        throw new Error('Stryker: Hit count limit reached (' + ns.hitCount + ')');
      }
      return true;
    }
    return false;
  }
  stryMutAct_9fa48 = isActive;
  return isActive(id);
}
import React from 'react';
import { Container, Row, Col, Card, Button, Badge } from 'react-bootstrap';
import { homeData } from '../data/homeData';
import BlogNews from '../components/Home/BlogNews';
import './Home.css';
function Home() {
  if (stryMutAct_9fa48("588")) {
    {}
  } else {
    stryCov_9fa48("588");
    const servicos = stryMutAct_9fa48("589") ? [] : (stryCov_9fa48("589"), [stryMutAct_9fa48("590") ? {} : (stryCov_9fa48("590"), {
      title: stryMutAct_9fa48("591") ? "" : (stryCov_9fa48("591"), "Desenvolvimento Web"),
      description: stryMutAct_9fa48("592") ? "" : (stryCov_9fa48("592"), "Criamos sites responsivos, aplicações web modernas e sistemas complexos com as melhores tecnologias do mercado."),
      icon: stryMutAct_9fa48("593") ? "" : (stryCov_9fa48("593"), "💻"),
      image: stryMutAct_9fa48("594") ? "" : (stryCov_9fa48("594"), "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&h=400&q=80"),
      tecnologias: stryMutAct_9fa48("595") ? [] : (stryCov_9fa48("595"), [stryMutAct_9fa48("596") ? "" : (stryCov_9fa48("596"), "React"), stryMutAct_9fa48("597") ? "" : (stryCov_9fa48("597"), "Node.js"), stryMutAct_9fa48("598") ? "" : (stryCov_9fa48("598"), "Python"), stryMutAct_9fa48("599") ? "" : (stryCov_9fa48("599"), "Laravel"), stryMutAct_9fa48("600") ? "" : (stryCov_9fa48("600"), "Vue.js")])
    }), stryMutAct_9fa48("601") ? {} : (stryCov_9fa48("601"), {
      title: stryMutAct_9fa48("602") ? "" : (stryCov_9fa48("602"), "Aplicações Mobile"),
      description: stryMutAct_9fa48("603") ? "" : (stryCov_9fa48("603"), "Desenvolvemos apps nativos e híbridos para iOS e Android com experiência de usuário excepcional."),
      icon: stryMutAct_9fa48("604") ? "" : (stryCov_9fa48("604"), "📱"),
      image: stryMutAct_9fa48("605") ? "" : (stryCov_9fa48("605"), "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&h=400&q=80"),
      tecnologias: stryMutAct_9fa48("606") ? [] : (stryCov_9fa48("606"), [stryMutAct_9fa48("607") ? "" : (stryCov_9fa48("607"), "React Native"), stryMutAct_9fa48("608") ? "" : (stryCov_9fa48("608"), "Flutter"), stryMutAct_9fa48("609") ? "" : (stryCov_9fa48("609"), "Swift"), stryMutAct_9fa48("610") ? "" : (stryCov_9fa48("610"), "Kotlin")])
    }), stryMutAct_9fa48("611") ? {} : (stryCov_9fa48("611"), {
      title: stryMutAct_9fa48("612") ? "" : (stryCov_9fa48("612"), "Sistemas Empresariais"),
      description: stryMutAct_9fa48("613") ? "" : (stryCov_9fa48("613"), "Soluções personalizadas para otimizar processos internos e aumentar a eficiência do seu negócio."),
      icon: stryMutAct_9fa48("614") ? "" : (stryCov_9fa48("614"), "⚡"),
      image: stryMutAct_9fa48("615") ? "" : (stryCov_9fa48("615"), "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&h=400&q=80"),
      tecnologias: stryMutAct_9fa48("616") ? [] : (stryCov_9fa48("616"), [stryMutAct_9fa48("617") ? "" : (stryCov_9fa48("617"), "Java"), stryMutAct_9fa48("618") ? "" : (stryCov_9fa48("618"), "Spring"), stryMutAct_9fa48("619") ? "" : (stryCov_9fa48("619"), "C#"), stryMutAct_9fa48("620") ? "" : (stryCov_9fa48("620"), ".NET"), stryMutAct_9fa48("621") ? "" : (stryCov_9fa48("621"), "PostgreSQL")])
    }), stryMutAct_9fa48("622") ? {} : (stryCov_9fa48("622"), {
      title: stryMutAct_9fa48("623") ? "" : (stryCov_9fa48("623"), "Consultoria em TI"),
      description: stryMutAct_9fa48("624") ? "" : (stryCov_9fa48("624"), "Análise, arquitetura e planejamento de soluções tecnológicas para impulsionar seu negócio."),
      icon: stryMutAct_9fa48("625") ? "" : (stryCov_9fa48("625"), "🏢"),
      image: stryMutAct_9fa48("626") ? "" : (stryCov_9fa48("626"), "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&h=400&q=80"),
      tecnologias: stryMutAct_9fa48("627") ? [] : (stryCov_9fa48("627"), [stryMutAct_9fa48("628") ? "" : (stryCov_9fa48("628"), "Arquitetura"), stryMutAct_9fa48("629") ? "" : (stryCov_9fa48("629"), "DevOps"), stryMutAct_9fa48("630") ? "" : (stryCov_9fa48("630"), "Cloud"), stryMutAct_9fa48("631") ? "" : (stryCov_9fa48("631"), "AWS"), stryMutAct_9fa48("632") ? "" : (stryCov_9fa48("632"), "Azure")])
    })]);
    return <div className="home-page">
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
                  {homeData.stats.map(stryMutAct_9fa48("633") ? () => undefined : (stryCov_9fa48("633"), (stat, index) => <Col key={index} md={3} className="text-center">
                      <div className="banner-stat">
                        <h3 className="display-6 fw-bold text-primary mb-1">{stat.value}</h3>
                        <p className="text-muted mb-0">{stat.label}</p>
                      </div>
                    </Col>))}
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
              {servicos.map(stryMutAct_9fa48("634") ? () => undefined : (stryCov_9fa48("634"), (servico, index) => <Col key={index} lg={6}>
                  <Card className="h-100 service-card">
                    <div className="service-image-container">
                      <img src={servico.image} alt={servico.title} className="service-image" />
                      <div className="service-icon-overlay">
                        <span className="service-icon">{servico.icon}</span>
                      </div>
                    </div>
                    <Card.Body className="d-flex flex-column">
                      <h3 className="h4 mb-3">{servico.title}</h3>
                      <p className="text-muted mb-3 flex-grow-1">{servico.description}</p>
                      <div className="service-technologies">
                        {servico.tecnologias.map(stryMutAct_9fa48("635") ? () => undefined : (stryCov_9fa48("635"), (tech, techIndex) => <Badge key={techIndex} bg="primary" className="me-1 mb-1">
                            {tech}
                          </Badge>))}
                      </div>
                    </Card.Body>
                  </Card>
                </Col>))}
            </Row>
          </Col>
        </Row>

        {/* Features Section */}
        <Row className="g-4 mb-5">
          <h2 className="text-center mb-4">Por que escolher a Nova Código?</h2>
          {homeData.features.map(stryMutAct_9fa48("636") ? () => undefined : (stryCov_9fa48("636"), (feature, index) => <Col key={index} md={4}>
              <Card className="h-100 text-center feature-card">
                <Card.Body>
                  <div className="feature-icon mb-3">{feature.icon}</div>
                  <h3 className="h5 mb-3">{feature.title}</h3>
                  <p className="text-muted">{feature.description}</p>
                </Card.Body>
              </Card>
            </Col>))}
        </Row>

        {/* Stats Section */}
        <Row className="g-4">
          <h2 className="text-center mb-4">Números que Importam</h2>
          {homeData.stats.map(stryMutAct_9fa48("637") ? () => undefined : (stryCov_9fa48("637"), (stat, index) => <Col key={index} md={3} className="text-center">
              <div className="stat-item">
                <h3 className="display-6 fw-bold text-primary">{stat.value}</h3>
                <p className="text-muted">{stat.label}</p>
              </div>
            </Col>))}
        </Row>
      </Container>

      {/* Blog News Section */}
      <BlogNews />
    </div>;
  }
}
export default Home;