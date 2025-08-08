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
import { Container, Row, Col, Card, Badge } from 'react-bootstrap';
import { sobreData } from '../data/sobreData';
import './Sobre.css';
function Sobre() {
  if (stryMutAct_9fa48("708")) {
    {}
  } else {
    stryCov_9fa48("708");
    return <div className="sobre-page">
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
            <h2 className="text-center mb-4">Nossos Valores</h2>
            <Row className="g-3">
              {sobreData.valores.map(stryMutAct_9fa48("709") ? () => undefined : (stryCov_9fa48("709"), (valor, index) => <Col key={index} md={4}>
                  <Card className="h-100 text-center">
                    <Card.Body>
                      <div className="valor-icon mb-3">{valor.icon}</div>
                      <h4 className="h6 mb-2">{valor.title}</h4>
                      <p className="text-muted small">{valor.description}</p>
                    </Card.Body>
                  </Card>
                </Col>))}
            </Row>
          </Col>
        </Row>

        {/* Serviços */}
        <Row className="g-4 mb-5">
          <Col>
            <h2 className="text-center mb-4">Nossos Serviços</h2>
            <Row className="g-4">
              {sobreData.servicos.map(stryMutAct_9fa48("710") ? () => undefined : (stryCov_9fa48("710"), (servico, index) => <Col key={index} md={6}>
                  <Card className="h-100">
                    <Card.Body>
                      <h4 className="mb-3">{servico.title}</h4>
                      <p className="text-muted mb-3">{servico.description}</p>
                      <div className="tecnologias">
                        {servico.tecnologias.map(stryMutAct_9fa48("711") ? () => undefined : (stryCov_9fa48("711"), (tech, techIndex) => <Badge key={techIndex} bg="primary" className="me-1 mb-1">
                            {tech}
                          </Badge>))}
                      </div>
                    </Card.Body>
                  </Card>
                </Col>))}
            </Row>
          </Col>
        </Row>

        {/* Timeline */}
        <Row className="g-4 mb-5">
          <Col>
            <h2 className="text-center mb-4">Nossa História</h2>
            <div className="timeline-container">
              {sobreData.timeline.map(stryMutAct_9fa48("712") ? () => undefined : (stryCov_9fa48("712"), (item, index) => <div key={index} className="timeline-item">
                  <div className="timeline-year">
                    <span className="year-badge">{item.year}</span>
                  </div>
                  <div className="timeline-content">
                    <h5 className="mb-2">{item.title}</h5>
                    <p className="text-muted mb-0">{item.description}</p>
                  </div>
                </div>))}
            </div>
          </Col>
        </Row>

        {/* Tecnologias */}
        <Row className="g-4 mb-5">
          <Col>
            <h2 className="text-center mb-4">Tecnologias que Utilizamos</h2>
            <div className="tecnologias-grid">
              {sobreData.tecnologias.map(stryMutAct_9fa48("713") ? () => undefined : (stryCov_9fa48("713"), (tech, index) => <Badge key={index} bg="secondary" className="me-2 mb-2 fs-6">
                  {tech}
                </Badge>))}
            </div>
          </Col>
        </Row>

        {/* Metodologias */}
        <Row className="g-4 mb-5">
          <Col>
            <h2 className="text-center mb-4">Metodologias de Trabalho</h2>
            <div className="metodologias-grid">
              {sobreData.metodologias.map(stryMutAct_9fa48("714") ? () => undefined : (stryCov_9fa48("714"), (metodo, index) => <Badge key={index} bg="success" className="me-2 mb-2 fs-6">
                  {metodo}
                </Badge>))}
            </div>
          </Col>
        </Row>

        {/* Equipe */}
        <Row className="g-4">
          <Col>
            <h2 className="text-center mb-4">Nossa Equipe</h2>
            <p className="text-center text-muted mb-4">{sobreData.equipe.description}</p>
            <Row className="g-3">
              {sobreData.equipe.stats.map(stryMutAct_9fa48("715") ? () => undefined : (stryCov_9fa48("715"), (stat, index) => <Col key={index} md={3} className="text-center">
                  <div className="stat-item">
                    <h3 className="display-6 fw-bold text-primary">{stat.value}</h3>
                    <p className="text-muted">{stat.label}</p>
                  </div>
                </Col>))}
            </Row>
          </Col>
        </Row>
      </Container>
    </div>;
  }
}
export default Sobre;