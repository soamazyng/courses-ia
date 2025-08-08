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
import './AplicacoesMobile.css';
function AplicacoesMobile() {
  if (stryMutAct_9fa48("344")) {
    {}
  } else {
    stryCov_9fa48("344");
    const tecnologias = stryMutAct_9fa48("345") ? [] : (stryCov_9fa48("345"), [stryMutAct_9fa48("346") ? "" : (stryCov_9fa48("346"), "React Native"), stryMutAct_9fa48("347") ? "" : (stryCov_9fa48("347"), "Flutter"), stryMutAct_9fa48("348") ? "" : (stryCov_9fa48("348"), "Swift"), stryMutAct_9fa48("349") ? "" : (stryCov_9fa48("349"), "Kotlin"), stryMutAct_9fa48("350") ? "" : (stryCov_9fa48("350"), "Xamarin"), stryMutAct_9fa48("351") ? "" : (stryCov_9fa48("351"), "Ionic"), stryMutAct_9fa48("352") ? "" : (stryCov_9fa48("352"), "Firebase"), stryMutAct_9fa48("353") ? "" : (stryCov_9fa48("353"), "AWS Mobile"), stryMutAct_9fa48("354") ? "" : (stryCov_9fa48("354"), "Google Play Console"), stryMutAct_9fa48("355") ? "" : (stryCov_9fa48("355"), "App Store Connect"), stryMutAct_9fa48("356") ? "" : (stryCov_9fa48("356"), "Redux"), stryMutAct_9fa48("357") ? "" : (stryCov_9fa48("357"), "MobX"), stryMutAct_9fa48("358") ? "" : (stryCov_9fa48("358"), "GraphQL"), stryMutAct_9fa48("359") ? "" : (stryCov_9fa48("359"), "REST API"), stryMutAct_9fa48("360") ? "" : (stryCov_9fa48("360"), "Push Notifications")]);
    const projetos = stryMutAct_9fa48("361") ? [] : (stryCov_9fa48("361"), [stryMutAct_9fa48("362") ? {} : (stryCov_9fa48("362"), {
      title: stryMutAct_9fa48("363") ? "" : (stryCov_9fa48("363"), "App de Delivery"),
      description: stryMutAct_9fa48("364") ? "" : (stryCov_9fa48("364"), "Aplicativo completo de delivery com geolocalização, pagamentos e rastreamento em tempo real."),
      image: stryMutAct_9fa48("365") ? "" : (stryCov_9fa48("365"), "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&h=400&q=80"),
      tecnologias: stryMutAct_9fa48("366") ? [] : (stryCov_9fa48("366"), [stryMutAct_9fa48("367") ? "" : (stryCov_9fa48("367"), "React Native"), stryMutAct_9fa48("368") ? "" : (stryCov_9fa48("368"), "Firebase"), stryMutAct_9fa48("369") ? "" : (stryCov_9fa48("369"), "Google Maps"), stryMutAct_9fa48("370") ? "" : (stryCov_9fa48("370"), "Stripe")])
    }), stryMutAct_9fa48("371") ? {} : (stryCov_9fa48("371"), {
      title: stryMutAct_9fa48("372") ? "" : (stryCov_9fa48("372"), "App Financeiro"),
      description: stryMutAct_9fa48("373") ? "" : (stryCov_9fa48("373"), "Aplicativo de gestão financeira pessoal com gráficos, relatórios e sincronização em nuvem."),
      image: stryMutAct_9fa48("374") ? "" : (stryCov_9fa48("374"), "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&h=400&q=80"),
      tecnologias: stryMutAct_9fa48("375") ? [] : (stryCov_9fa48("375"), [stryMutAct_9fa48("376") ? "" : (stryCov_9fa48("376"), "Flutter"), stryMutAct_9fa48("377") ? "" : (stryCov_9fa48("377"), "Dart"), stryMutAct_9fa48("378") ? "" : (stryCov_9fa48("378"), "SQLite"), stryMutAct_9fa48("379") ? "" : (stryCov_9fa48("379"), "Charts")])
    }), stryMutAct_9fa48("380") ? {} : (stryCov_9fa48("380"), {
      title: stryMutAct_9fa48("381") ? "" : (stryCov_9fa48("381"), "App Corporativo"),
      description: stryMutAct_9fa48("382") ? "" : (stryCov_9fa48("382"), "Aplicativo interno para colaboradores com acesso a sistemas empresariais e comunicação."),
      image: stryMutAct_9fa48("383") ? "" : (stryCov_9fa48("383"), "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&h=400&q=80"),
      tecnologias: stryMutAct_9fa48("384") ? [] : (stryCov_9fa48("384"), [stryMutAct_9fa48("385") ? "" : (stryCov_9fa48("385"), "Swift"), stryMutAct_9fa48("386") ? "" : (stryCov_9fa48("386"), "Kotlin"), stryMutAct_9fa48("387") ? "" : (stryCov_9fa48("387"), "Azure"), stryMutAct_9fa48("388") ? "" : (stryCov_9fa48("388"), "Microsoft Graph")])
    })]);
    const beneficios = stryMutAct_9fa48("389") ? [] : (stryCov_9fa48("389"), [stryMutAct_9fa48("390") ? {} : (stryCov_9fa48("390"), {
      icon: stryMutAct_9fa48("391") ? "" : (stryCov_9fa48("391"), "📱"),
      title: stryMutAct_9fa48("392") ? "" : (stryCov_9fa48("392"), "Nativo e Híbrido"),
      description: stryMutAct_9fa48("393") ? "" : (stryCov_9fa48("393"), "Desenvolvimento nativo para performance máxima ou híbrido para economia")
    }), stryMutAct_9fa48("394") ? {} : (stryCov_9fa48("394"), {
      icon: stryMutAct_9fa48("395") ? "" : (stryCov_9fa48("395"), "🚀"),
      title: stryMutAct_9fa48("396") ? "" : (stryCov_9fa48("396"), "Performance Otimizada"),
      description: stryMutAct_9fa48("397") ? "" : (stryCov_9fa48("397"), "Apps rápidos e fluidos com otimização para cada plataforma")
    }), stryMutAct_9fa48("398") ? {} : (stryCov_9fa48("398"), {
      icon: stryMutAct_9fa48("399") ? "" : (stryCov_9fa48("399"), "🔒"),
      title: stryMutAct_9fa48("400") ? "" : (stryCov_9fa48("400"), "Segurança Avançada"),
      description: stryMutAct_9fa48("401") ? "" : (stryCov_9fa48("401"), "Implementação de criptografia e autenticação biométrica")
    }), stryMutAct_9fa48("402") ? {} : (stryCov_9fa48("402"), {
      icon: stryMutAct_9fa48("403") ? "" : (stryCov_9fa48("403"), "📊"),
      title: stryMutAct_9fa48("404") ? "" : (stryCov_9fa48("404"), "Analytics Integrado"),
      description: stryMutAct_9fa48("405") ? "" : (stryCov_9fa48("405"), "Monitoramento completo do uso e performance dos apps")
    })]);
    return <div className="aplicacoes-mobile-page">
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
              <img src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&h=400&q=80" alt="Aplicações Mobile" className="hero-image" />
            </div>
          </Col>
        </Row>

        {/* Tecnologias */}
        <Row className="g-4 mb-5">
          <Col>
            <h2 className="text-center mb-4">Tecnologias Mobile</h2>
            <div className="tecnologias-grid">
              {tecnologias.map(stryMutAct_9fa48("406") ? () => undefined : (stryCov_9fa48("406"), (tech, index) => <Badge key={index} bg="info" className="me-2 mb-2 fs-6">
                  {tech}
                </Badge>))}
            </div>
          </Col>
        </Row>

        {/* Benefícios */}
        <Row className="g-4 mb-5">
          <Col>
            <h2 className="text-center mb-4">Vantagens dos nossos apps mobile</h2>
            <Row className="g-4">
              {beneficios.map(stryMutAct_9fa48("407") ? () => undefined : (stryCov_9fa48("407"), (beneficio, index) => <Col key={index} md={6} lg={3}>
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
            <h2 className="text-center mb-4">Apps em Destaque</h2>
            <Row className="g-4">
              {projetos.map(stryMutAct_9fa48("408") ? () => undefined : (stryCov_9fa48("408"), (projeto, index) => <Col key={index} lg={4}>
                  <Card className="h-100 projeto-card">
                    <div className="projeto-image-container">
                      <img src={projeto.image} alt={projeto.title} className="projeto-image" />
                    </div>
                    <Card.Body className="d-flex flex-column">
                      <h4 className="h5 mb-3">{projeto.title}</h4>
                      <p className="text-muted mb-3 flex-grow-1">{projeto.description}</p>
                      <div className="projeto-technologies">
                        {projeto.tecnologias.map(stryMutAct_9fa48("409") ? () => undefined : (stryCov_9fa48("409"), (tech, techIndex) => <Badge key={techIndex} bg="secondary" className="me-1 mb-1">
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
    </div>;
  }
}
export default AplicacoesMobile;