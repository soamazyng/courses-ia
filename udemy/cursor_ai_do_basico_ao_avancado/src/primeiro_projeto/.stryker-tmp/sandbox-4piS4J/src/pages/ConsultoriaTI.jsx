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
import './ConsultoriaTI.css';
function ConsultoriaTI() {
  if (stryMutAct_9fa48("410")) {
    {}
  } else {
    stryCov_9fa48("410");
    const tecnologias = stryMutAct_9fa48("411") ? [] : (stryCov_9fa48("411"), [stryMutAct_9fa48("412") ? "" : (stryCov_9fa48("412"), "Arquitetura"), stryMutAct_9fa48("413") ? "" : (stryCov_9fa48("413"), "DevOps"), stryMutAct_9fa48("414") ? "" : (stryCov_9fa48("414"), "Cloud"), stryMutAct_9fa48("415") ? "" : (stryCov_9fa48("415"), "AWS"), stryMutAct_9fa48("416") ? "" : (stryCov_9fa48("416"), "Azure"), stryMutAct_9fa48("417") ? "" : (stryCov_9fa48("417"), "Google Cloud"), stryMutAct_9fa48("418") ? "" : (stryCov_9fa48("418"), "Docker"), stryMutAct_9fa48("419") ? "" : (stryCov_9fa48("419"), "Kubernetes"), stryMutAct_9fa48("420") ? "" : (stryCov_9fa48("420"), "Jenkins"), stryMutAct_9fa48("421") ? "" : (stryCov_9fa48("421"), "GitLab CI"), stryMutAct_9fa48("422") ? "" : (stryCov_9fa48("422"), "Terraform"), stryMutAct_9fa48("423") ? "" : (stryCov_9fa48("423"), "Microservices"), stryMutAct_9fa48("424") ? "" : (stryCov_9fa48("424"), "API Gateway"), stryMutAct_9fa48("425") ? "" : (stryCov_9fa48("425"), "Service Mesh"), stryMutAct_9fa48("426") ? "" : (stryCov_9fa48("426"), "Monitoring"), stryMutAct_9fa48("427") ? "" : (stryCov_9fa48("427"), "Logging"), stryMutAct_9fa48("428") ? "" : (stryCov_9fa48("428"), "Security"), stryMutAct_9fa48("429") ? "" : (stryCov_9fa48("429"), "Compliance"), stryMutAct_9fa48("430") ? "" : (stryCov_9fa48("430"), "Performance")]);
    const projetos = stryMutAct_9fa48("431") ? [] : (stryCov_9fa48("431"), [stryMutAct_9fa48("432") ? {} : (stryCov_9fa48("432"), {
      title: stryMutAct_9fa48("433") ? "" : (stryCov_9fa48("433"), "Migração para Cloud"),
      description: stryMutAct_9fa48("434") ? "" : (stryCov_9fa48("434"), "Migração completa de infraestrutura on-premise para AWS com otimização de custos."),
      image: stryMutAct_9fa48("435") ? "" : (stryCov_9fa48("435"), "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&h=400&q=80"),
      tecnologias: stryMutAct_9fa48("436") ? [] : (stryCov_9fa48("436"), [stryMutAct_9fa48("437") ? "" : (stryCov_9fa48("437"), "AWS"), stryMutAct_9fa48("438") ? "" : (stryCov_9fa48("438"), "Docker"), stryMutAct_9fa48("439") ? "" : (stryCov_9fa48("439"), "Terraform"), stryMutAct_9fa48("440") ? "" : (stryCov_9fa48("440"), "Jenkins")])
    }), stryMutAct_9fa48("441") ? {} : (stryCov_9fa48("441"), {
      title: stryMutAct_9fa48("442") ? "" : (stryCov_9fa48("442"), "Arquitetura de Microserviços"),
      description: stryMutAct_9fa48("443") ? "" : (stryCov_9fa48("443"), "Redesenho de arquitetura monolítica para microserviços com alta disponibilidade."),
      image: stryMutAct_9fa48("444") ? "" : (stryCov_9fa48("444"), "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&h=400&q=80"),
      tecnologias: stryMutAct_9fa48("445") ? [] : (stryCov_9fa48("445"), [stryMutAct_9fa48("446") ? "" : (stryCov_9fa48("446"), "Kubernetes"), stryMutAct_9fa48("447") ? "" : (stryCov_9fa48("447"), "Docker"), stryMutAct_9fa48("448") ? "" : (stryCov_9fa48("448"), "API Gateway"), stryMutAct_9fa48("449") ? "" : (stryCov_9fa48("449"), "Monitoring")])
    }), stryMutAct_9fa48("450") ? {} : (stryCov_9fa48("450"), {
      title: stryMutAct_9fa48("451") ? "" : (stryCov_9fa48("451"), "DevOps Implementation"),
      description: stryMutAct_9fa48("452") ? "" : (stryCov_9fa48("452"), "Implementação completa de pipeline CI/CD com automação de deploy e testes."),
      image: stryMutAct_9fa48("453") ? "" : (stryCov_9fa48("453"), "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&h=400&q=80"),
      tecnologias: stryMutAct_9fa48("454") ? [] : (stryCov_9fa48("454"), [stryMutAct_9fa48("455") ? "" : (stryCov_9fa48("455"), "Jenkins"), stryMutAct_9fa48("456") ? "" : (stryCov_9fa48("456"), "GitLab"), stryMutAct_9fa48("457") ? "" : (stryCov_9fa48("457"), "Docker"), stryMutAct_9fa48("458") ? "" : (stryCov_9fa48("458"), "Kubernetes")])
    })]);
    const beneficios = stryMutAct_9fa48("459") ? [] : (stryCov_9fa48("459"), [stryMutAct_9fa48("460") ? {} : (stryCov_9fa48("460"), {
      icon: stryMutAct_9fa48("461") ? "" : (stryCov_9fa48("461"), "🏗️"),
      title: stryMutAct_9fa48("462") ? "" : (stryCov_9fa48("462"), "Arquitetura Robusta"),
      description: stryMutAct_9fa48("463") ? "" : (stryCov_9fa48("463"), "Design de sistemas escaláveis e resilientes")
    }), stryMutAct_9fa48("464") ? {} : (stryCov_9fa48("464"), {
      icon: stryMutAct_9fa48("465") ? "" : (stryCov_9fa48("465"), "🚀"),
      title: stryMutAct_9fa48("466") ? "" : (stryCov_9fa48("466"), "DevOps Automatizado"),
      description: stryMutAct_9fa48("467") ? "" : (stryCov_9fa48("467"), "Implementação de pipelines CI/CD completos")
    }), stryMutAct_9fa48("468") ? {} : (stryCov_9fa48("468"), {
      icon: stryMutAct_9fa48("469") ? "" : (stryCov_9fa48("469"), "☁️"),
      title: stryMutAct_9fa48("470") ? "" : (stryCov_9fa48("470"), "Cloud Native"),
      description: stryMutAct_9fa48("471") ? "" : (stryCov_9fa48("471"), "Migração e otimização para cloud computing")
    }), stryMutAct_9fa48("472") ? {} : (stryCov_9fa48("472"), {
      icon: stryMutAct_9fa48("473") ? "" : (stryCov_9fa48("473"), "🔒"),
      title: stryMutAct_9fa48("474") ? "" : (stryCov_9fa48("474"), "Segurança Avançada"),
      description: stryMutAct_9fa48("475") ? "" : (stryCov_9fa48("475"), "Implementação de padrões de segurança corporativa")
    })]);
    return <div className="consultoria-ti-page">
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
              <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&h=400&q=80" alt="Consultoria em TI" className="hero-image" />
            </div>
          </Col>
        </Row>

        {/* Tecnologias */}
        <Row className="g-4 mb-5">
          <Col>
            <h2 className="text-center mb-4">Áreas de Consultoria</h2>
            <div className="tecnologias-grid">
              {tecnologias.map(stryMutAct_9fa48("476") ? () => undefined : (stryCov_9fa48("476"), (tech, index) => <Badge key={index} bg="warning" className="me-2 mb-2 fs-6">
                  {tech}
                </Badge>))}
            </div>
          </Col>
        </Row>

        {/* Benefícios */}
        <Row className="g-4 mb-5">
          <Col>
            <h2 className="text-center mb-4">Vantagens da nossa consultoria</h2>
            <Row className="g-4">
              {beneficios.map(stryMutAct_9fa48("477") ? () => undefined : (stryCov_9fa48("477"), (beneficio, index) => <Col key={index} md={6} lg={3}>
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
            <h2 className="text-center mb-4">Projetos de Consultoria</h2>
            <Row className="g-4">
              {projetos.map(stryMutAct_9fa48("478") ? () => undefined : (stryCov_9fa48("478"), (projeto, index) => <Col key={index} lg={4}>
                  <Card className="h-100 projeto-card">
                    <div className="projeto-image-container">
                      <img src={projeto.image} alt={projeto.title} className="projeto-image" />
                    </div>
                    <Card.Body className="d-flex flex-column">
                      <h4 className="h5 mb-3">{projeto.title}</h4>
                      <p className="text-muted mb-3 flex-grow-1">{projeto.description}</p>
                      <div className="projeto-technologies">
                        {projeto.tecnologias.map(stryMutAct_9fa48("479") ? () => undefined : (stryCov_9fa48("479"), (tech, techIndex) => <Badge key={techIndex} bg="secondary" className="me-1 mb-1">
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
    </div>;
  }
}
export default ConsultoriaTI;