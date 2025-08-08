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
import { Container, Row, Col, Card, Badge, Button } from 'react-bootstrap';
import './DesenvolvimentoWeb.css';
function DesenvolvimentoWeb() {
  if (stryMutAct_9fa48("518")) {
    {}
  } else {
    stryCov_9fa48("518");
    const tecnologias = stryMutAct_9fa48("519") ? [] : (stryCov_9fa48("519"), [stryMutAct_9fa48("520") ? "" : (stryCov_9fa48("520"), "React"), stryMutAct_9fa48("521") ? "" : (stryCov_9fa48("521"), "Node.js"), stryMutAct_9fa48("522") ? "" : (stryCov_9fa48("522"), "Python"), stryMutAct_9fa48("523") ? "" : (stryCov_9fa48("523"), "PHP"), stryMutAct_9fa48("524") ? "" : (stryCov_9fa48("524"), "Laravel"), stryMutAct_9fa48("525") ? "" : (stryCov_9fa48("525"), "Vue.js"), stryMutAct_9fa48("526") ? "" : (stryCov_9fa48("526"), "Angular"), stryMutAct_9fa48("527") ? "" : (stryCov_9fa48("527"), "TypeScript"), stryMutAct_9fa48("528") ? "" : (stryCov_9fa48("528"), "JavaScript"), stryMutAct_9fa48("529") ? "" : (stryCov_9fa48("529"), "HTML5"), stryMutAct_9fa48("530") ? "" : (stryCov_9fa48("530"), "CSS3"), stryMutAct_9fa48("531") ? "" : (stryCov_9fa48("531"), "Sass"), stryMutAct_9fa48("532") ? "" : (stryCov_9fa48("532"), "Bootstrap"), stryMutAct_9fa48("533") ? "" : (stryCov_9fa48("533"), "Tailwind CSS"), stryMutAct_9fa48("534") ? "" : (stryCov_9fa48("534"), "Next.js"), stryMutAct_9fa48("535") ? "" : (stryCov_9fa48("535"), "Nuxt.js"), stryMutAct_9fa48("536") ? "" : (stryCov_9fa48("536"), "Express.js"), stryMutAct_9fa48("537") ? "" : (stryCov_9fa48("537"), "Django"), stryMutAct_9fa48("538") ? "" : (stryCov_9fa48("538"), "Flask")]);
    const projetos = stryMutAct_9fa48("539") ? [] : (stryCov_9fa48("539"), [stryMutAct_9fa48("540") ? {} : (stryCov_9fa48("540"), {
      title: stryMutAct_9fa48("541") ? "" : (stryCov_9fa48("541"), "E-commerce Completo"),
      description: stryMutAct_9fa48("542") ? "" : (stryCov_9fa48("542"), "Plataforma de vendas online com sistema de pagamentos, gestão de estoque e painel administrativo."),
      image: stryMutAct_9fa48("543") ? "" : (stryCov_9fa48("543"), "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&h=400&q=80"),
      tecnologias: stryMutAct_9fa48("544") ? [] : (stryCov_9fa48("544"), [stryMutAct_9fa48("545") ? "" : (stryCov_9fa48("545"), "React"), stryMutAct_9fa48("546") ? "" : (stryCov_9fa48("546"), "Node.js"), stryMutAct_9fa48("547") ? "" : (stryCov_9fa48("547"), "MongoDB"), stryMutAct_9fa48("548") ? "" : (stryCov_9fa48("548"), "Stripe")])
    }), stryMutAct_9fa48("549") ? {} : (stryCov_9fa48("549"), {
      title: stryMutAct_9fa48("550") ? "" : (stryCov_9fa48("550"), "Sistema de Gestão"),
      description: stryMutAct_9fa48("551") ? "" : (stryCov_9fa48("551"), "Aplicação web para gestão empresarial com módulos de RH, financeiro e operacional."),
      image: stryMutAct_9fa48("552") ? "" : (stryCov_9fa48("552"), "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&h=400&q=80"),
      tecnologias: stryMutAct_9fa48("553") ? [] : (stryCov_9fa48("553"), [stryMutAct_9fa48("554") ? "" : (stryCov_9fa48("554"), "Vue.js"), stryMutAct_9fa48("555") ? "" : (stryCov_9fa48("555"), "Laravel"), stryMutAct_9fa48("556") ? "" : (stryCov_9fa48("556"), "PostgreSQL"), stryMutAct_9fa48("557") ? "" : (stryCov_9fa48("557"), "Docker")])
    }), stryMutAct_9fa48("558") ? {} : (stryCov_9fa48("558"), {
      title: stryMutAct_9fa48("559") ? "" : (stryCov_9fa48("559"), "Portal Corporativo"),
      description: stryMutAct_9fa48("560") ? "" : (stryCov_9fa48("560"), "Portal interno para colaboradores com intranet, comunicação e ferramentas de trabalho."),
      image: stryMutAct_9fa48("561") ? "" : (stryCov_9fa48("561"), "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&h=400&q=80"),
      tecnologias: stryMutAct_9fa48("562") ? [] : (stryCov_9fa48("562"), [stryMutAct_9fa48("563") ? "" : (stryCov_9fa48("563"), "Angular"), stryMutAct_9fa48("564") ? "" : (stryCov_9fa48("564"), "C#"), stryMutAct_9fa48("565") ? "" : (stryCov_9fa48("565"), ".NET"), stryMutAct_9fa48("566") ? "" : (stryCov_9fa48("566"), "SQL Server")])
    })]);
    const beneficios = stryMutAct_9fa48("567") ? [] : (stryCov_9fa48("567"), [stryMutAct_9fa48("568") ? {} : (stryCov_9fa48("568"), {
      icon: stryMutAct_9fa48("569") ? "" : (stryCov_9fa48("569"), "🚀"),
      title: stryMutAct_9fa48("570") ? "" : (stryCov_9fa48("570"), "Performance Otimizada"),
      description: stryMutAct_9fa48("571") ? "" : (stryCov_9fa48("571"), "Aplicações rápidas e responsivas com carregamento otimizado")
    }), stryMutAct_9fa48("572") ? {} : (stryCov_9fa48("572"), {
      icon: stryMutAct_9fa48("573") ? "" : (stryCov_9fa48("573"), "📱"),
      title: stryMutAct_9fa48("574") ? "" : (stryCov_9fa48("574"), "Design Responsivo"),
      description: stryMutAct_9fa48("575") ? "" : (stryCov_9fa48("575"), "Sites que funcionam perfeitamente em todos os dispositivos")
    }), stryMutAct_9fa48("576") ? {} : (stryCov_9fa48("576"), {
      icon: stryMutAct_9fa48("577") ? "" : (stryCov_9fa48("577"), "🔒"),
      title: stryMutAct_9fa48("578") ? "" : (stryCov_9fa48("578"), "Segurança Avançada"),
      description: stryMutAct_9fa48("579") ? "" : (stryCov_9fa48("579"), "Implementação de melhores práticas de segurança web")
    }), stryMutAct_9fa48("580") ? {} : (stryCov_9fa48("580"), {
      icon: stryMutAct_9fa48("581") ? "" : (stryCov_9fa48("581"), "⚡"),
      title: stryMutAct_9fa48("582") ? "" : (stryCov_9fa48("582"), "SEO Otimizado"),
      description: stryMutAct_9fa48("583") ? "" : (stryCov_9fa48("583"), "Sites otimizados para motores de busca")
    })]);
    return <div className="desenvolvimento-web-page">
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
              <img src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1469&h=400&q=80" alt="Desenvolvimento Web" className="hero-image" />
            </div>
          </Col>
        </Row>

        {/* Tecnologias */}
        <Row className="g-4 mb-5">
          <Col>
            <h2 className="text-center mb-4">Tecnologias que Utilizamos</h2>
            <div className="tecnologias-grid">
              {tecnologias.map(stryMutAct_9fa48("584") ? () => undefined : (stryCov_9fa48("584"), (tech, index) => <Badge key={index} bg="primary" className="me-2 mb-2 fs-6">
                  {tech}
                </Badge>))}
            </div>
          </Col>
        </Row>

        {/* Benefícios */}
        <Row className="g-4 mb-5">
          <Col>
            <h2 className="text-center mb-4">Por que escolher nosso desenvolvimento web?</h2>
            <Row className="g-4">
              {beneficios.map(stryMutAct_9fa48("585") ? () => undefined : (stryCov_9fa48("585"), (beneficio, index) => <Col key={index} md={6} lg={3}>
                  <Card className="h-100 text-center beneficio-card">
                    <Card.Body>
                      <div className="beneficio-icon mb-3">{beneficio.icon}</div>
                      <h4 className="h5 mb-3">{beneficio.title}</h4>
                      <p className="text-muted">{beneficio.description}</p>
                    </Card.Body>
                  </Card>
                </Col>))}
            </Row>
          </Col>
        </Row>

        {/* Projetos */}
        <Row className="g-4 mb-5">
          <Col>
            <h2 className="text-center mb-4">Projetos em Destaque</h2>
            <Row className="g-4">
              {projetos.map(stryMutAct_9fa48("586") ? () => undefined : (stryCov_9fa48("586"), (projeto, index) => <Col key={index} lg={4}>
                  <Card className="h-100 projeto-card">
                    <div className="projeto-image-container">
                      <img src={projeto.image} alt={projeto.title} className="projeto-image" />
                    </div>
                    <Card.Body className="d-flex flex-column">
                      <h4 className="h5 mb-3">{projeto.title}</h4>
                      <p className="text-muted mb-3 flex-grow-1">{projeto.description}</p>
                      <div className="projeto-technologies">
                        {projeto.tecnologias.map(stryMutAct_9fa48("587") ? () => undefined : (stryCov_9fa48("587"), (tech, techIndex) => <Badge key={techIndex} bg="secondary" className="me-1 mb-1">
                            {tech}
                          </Badge>))}
                      </div>
                    </Card.Body>
                  </Card>
                </Col>))}
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
    </div>;
  }
}
export default DesenvolvimentoWeb;