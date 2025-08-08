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
import './SistemasEmpresariais.css';
function SistemasEmpresariais() {
  if (stryMutAct_9fa48("638")) {
    {}
  } else {
    stryCov_9fa48("638");
    const tecnologias = stryMutAct_9fa48("639") ? [] : (stryCov_9fa48("639"), [stryMutAct_9fa48("640") ? "" : (stryCov_9fa48("640"), "Java"), stryMutAct_9fa48("641") ? "" : (stryCov_9fa48("641"), "Spring"), stryMutAct_9fa48("642") ? "" : (stryCov_9fa48("642"), "C#"), stryMutAct_9fa48("643") ? "" : (stryCov_9fa48("643"), ".NET"), stryMutAct_9fa48("644") ? "" : (stryCov_9fa48("644"), "PostgreSQL"), stryMutAct_9fa48("645") ? "" : (stryCov_9fa48("645"), "SQL Server"), stryMutAct_9fa48("646") ? "" : (stryCov_9fa48("646"), "Oracle"), stryMutAct_9fa48("647") ? "" : (stryCov_9fa48("647"), "Microservices"), stryMutAct_9fa48("648") ? "" : (stryCov_9fa48("648"), "Docker"), stryMutAct_9fa48("649") ? "" : (stryCov_9fa48("649"), "Kubernetes"), stryMutAct_9fa48("650") ? "" : (stryCov_9fa48("650"), "AWS"), stryMutAct_9fa48("651") ? "" : (stryCov_9fa48("651"), "Azure"), stryMutAct_9fa48("652") ? "" : (stryCov_9fa48("652"), "Jenkins"), stryMutAct_9fa48("653") ? "" : (stryCov_9fa48("653"), "Git"), stryMutAct_9fa48("654") ? "" : (stryCov_9fa48("654"), "JUnit"), stryMutAct_9fa48("655") ? "" : (stryCov_9fa48("655"), "Selenium"), stryMutAct_9fa48("656") ? "" : (stryCov_9fa48("656"), "REST API"), stryMutAct_9fa48("657") ? "" : (stryCov_9fa48("657"), "GraphQL"), stryMutAct_9fa48("658") ? "" : (stryCov_9fa48("658"), "Message Queues")]);
    const projetos = stryMutAct_9fa48("659") ? [] : (stryCov_9fa48("659"), [stryMutAct_9fa48("660") ? {} : (stryCov_9fa48("660"), {
      title: stryMutAct_9fa48("661") ? "" : (stryCov_9fa48("661"), "ERP Completo"),
      description: stryMutAct_9fa48("662") ? "" : (stryCov_9fa48("662"), "Sistema integrado de gestão empresarial com módulos financeiro, RH, estoque e vendas."),
      image: stryMutAct_9fa48("663") ? "" : (stryCov_9fa48("663"), "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&h=400&q=80"),
      tecnologias: stryMutAct_9fa48("664") ? [] : (stryCov_9fa48("664"), [stryMutAct_9fa48("665") ? "" : (stryCov_9fa48("665"), "Java"), stryMutAct_9fa48("666") ? "" : (stryCov_9fa48("666"), "Spring"), stryMutAct_9fa48("667") ? "" : (stryCov_9fa48("667"), "PostgreSQL"), stryMutAct_9fa48("668") ? "" : (stryCov_9fa48("668"), "Docker")])
    }), stryMutAct_9fa48("669") ? {} : (stryCov_9fa48("669"), {
      title: stryMutAct_9fa48("670") ? "" : (stryCov_9fa48("670"), "CRM Avançado"),
      description: stryMutAct_9fa48("671") ? "" : (stryCov_9fa48("671"), "Sistema de gestão de relacionamento com clientes com automação de vendas e marketing."),
      image: stryMutAct_9fa48("672") ? "" : (stryCov_9fa48("672"), "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&h=400&q=80"),
      tecnologias: stryMutAct_9fa48("673") ? [] : (stryCov_9fa48("673"), [stryMutAct_9fa48("674") ? "" : (stryCov_9fa48("674"), ".NET"), stryMutAct_9fa48("675") ? "" : (stryCov_9fa48("675"), "C#"), stryMutAct_9fa48("676") ? "" : (stryCov_9fa48("676"), "SQL Server"), stryMutAct_9fa48("677") ? "" : (stryCov_9fa48("677"), "Azure")])
    }), stryMutAct_9fa48("678") ? {} : (stryCov_9fa48("678"), {
      title: stryMutAct_9fa48("679") ? "" : (stryCov_9fa48("679"), "Sistema de Vendas"),
      description: stryMutAct_9fa48("680") ? "" : (stryCov_9fa48("680"), "Plataforma completa de vendas com gestão de leads, orçamentos e comissões."),
      image: stryMutAct_9fa48("681") ? "" : (stryCov_9fa48("681"), "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&h=400&q=80"),
      tecnologias: stryMutAct_9fa48("682") ? [] : (stryCov_9fa48("682"), [stryMutAct_9fa48("683") ? "" : (stryCov_9fa48("683"), "Java"), stryMutAct_9fa48("684") ? "" : (stryCov_9fa48("684"), "Spring Boot"), stryMutAct_9fa48("685") ? "" : (stryCov_9fa48("685"), "MySQL"), stryMutAct_9fa48("686") ? "" : (stryCov_9fa48("686"), "Redis")])
    })]);
    const beneficios = stryMutAct_9fa48("687") ? [] : (stryCov_9fa48("687"), [stryMutAct_9fa48("688") ? {} : (stryCov_9fa48("688"), {
      icon: stryMutAct_9fa48("689") ? "" : (stryCov_9fa48("689"), "⚡"),
      title: stryMutAct_9fa48("690") ? "" : (stryCov_9fa48("690"), "Performance Escalável"),
      description: stryMutAct_9fa48("691") ? "" : (stryCov_9fa48("691"), "Sistemas otimizados para crescer com seu negócio")
    }), stryMutAct_9fa48("692") ? {} : (stryCov_9fa48("692"), {
      icon: stryMutAct_9fa48("693") ? "" : (stryCov_9fa48("693"), "🔒"),
      title: stryMutAct_9fa48("694") ? "" : (stryCov_9fa48("694"), "Segurança Empresarial"),
      description: stryMutAct_9fa48("695") ? "" : (stryCov_9fa48("695"), "Implementação de padrões de segurança corporativa")
    }), stryMutAct_9fa48("696") ? {} : (stryCov_9fa48("696"), {
      icon: stryMutAct_9fa48("697") ? "" : (stryCov_9fa48("697"), "📊"),
      title: stryMutAct_9fa48("698") ? "" : (stryCov_9fa48("698"), "Relatórios Avançados"),
      description: stryMutAct_9fa48("699") ? "" : (stryCov_9fa48("699"), "Dashboards e relatórios em tempo real")
    }), stryMutAct_9fa48("700") ? {} : (stryCov_9fa48("700"), {
      icon: stryMutAct_9fa48("701") ? "" : (stryCov_9fa48("701"), "🔄"),
      title: stryMutAct_9fa48("702") ? "" : (stryCov_9fa48("702"), "Integração Total"),
      description: stryMutAct_9fa48("703") ? "" : (stryCov_9fa48("703"), "Conectividade com sistemas existentes")
    })]);
    return <div className="sistemas-empresariais-page">
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
              <img src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&h=400&q=80" alt="Sistemas Empresariais" className="hero-image" />
            </div>
          </Col>
        </Row>

        {/* Tecnologias */}
        <Row className="g-4 mb-5">
          <Col>
            <h2 className="text-center mb-4">Tecnologias Empresariais</h2>
            <div className="tecnologias-grid">
              {tecnologias.map(stryMutAct_9fa48("704") ? () => undefined : (stryCov_9fa48("704"), (tech, index) => <Badge key={index} bg="success" className="me-2 mb-2 fs-6">
                  {tech}
                </Badge>))}
            </div>
          </Col>
        </Row>

        {/* Benefícios */}
        <Row className="g-4 mb-5">
          <Col>
            <h2 className="text-center mb-4">Benefícios dos nossos sistemas empresariais</h2>
            <Row className="g-4">
              {beneficios.map(stryMutAct_9fa48("705") ? () => undefined : (stryCov_9fa48("705"), (beneficio, index) => <Col key={index} md={6} lg={3}>
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
            <h2 className="text-center mb-4">Sistemas em Destaque</h2>
            <Row className="g-4">
              {projetos.map(stryMutAct_9fa48("706") ? () => undefined : (stryCov_9fa48("706"), (projeto, index) => <Col key={index} lg={4}>
                  <Card className="h-100 projeto-card">
                    <div className="projeto-image-container">
                      <img src={projeto.image} alt={projeto.title} className="projeto-image" />
                    </div>
                    <Card.Body className="d-flex flex-column">
                      <h4 className="h5 mb-3">{projeto.title}</h4>
                      <p className="text-muted mb-3 flex-grow-1">{projeto.description}</p>
                      <div className="projeto-technologies">
                        {projeto.tecnologias.map(stryMutAct_9fa48("707") ? () => undefined : (stryCov_9fa48("707"), (tech, techIndex) => <Badge key={techIndex} bg="secondary" className="me-1 mb-1">
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
    </div>;
  }
}
export default SistemasEmpresariais;