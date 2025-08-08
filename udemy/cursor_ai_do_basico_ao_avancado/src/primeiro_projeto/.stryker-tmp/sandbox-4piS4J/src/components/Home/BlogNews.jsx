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
import { Card, Row, Col, Badge, Button } from 'react-bootstrap';
import './BlogNews.css';
function BlogNews() {
  if (stryMutAct_9fa48("1")) {
    {}
  } else {
    stryCov_9fa48("1");
    // Dados simulados das últimas notícias do blog
    const blogNews = stryMutAct_9fa48("2") ? [] : (stryCov_9fa48("2"), [stryMutAct_9fa48("3") ? {} : (stryCov_9fa48("3"), {
      id: 1,
      title: stryMutAct_9fa48("4") ? "" : (stryCov_9fa48("4"), "Tendências de Desenvolvimento Web em 2024"),
      excerpt: stryMutAct_9fa48("5") ? "" : (stryCov_9fa48("5"), "Descubra as principais tecnologias e frameworks que estão dominando o mercado de desenvolvimento web este ano..."),
      author: stryMutAct_9fa48("6") ? "" : (stryCov_9fa48("6"), "Equipe Nova Código"),
      date: stryMutAct_9fa48("7") ? "" : (stryCov_9fa48("7"), "15 Jan 2024"),
      category: stryMutAct_9fa48("8") ? "" : (stryCov_9fa48("8"), "Tecnologia"),
      readTime: stryMutAct_9fa48("9") ? "" : (stryCov_9fa48("9"), "5 min"),
      image: stryMutAct_9fa48("10") ? "" : (stryCov_9fa48("10"), "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&h=400&q=80"),
      tags: stryMutAct_9fa48("11") ? [] : (stryCov_9fa48("11"), [stryMutAct_9fa48("12") ? "" : (stryCov_9fa48("12"), "React"), stryMutAct_9fa48("13") ? "" : (stryCov_9fa48("13"), "JavaScript"), stryMutAct_9fa48("14") ? "" : (stryCov_9fa48("14"), "Web Development")])
    }), stryMutAct_9fa48("15") ? {} : (stryCov_9fa48("15"), {
      id: 2,
      title: stryMutAct_9fa48("16") ? "" : (stryCov_9fa48("16"), "Como Otimizar Performance em Aplicações Mobile"),
      excerpt: stryMutAct_9fa48("17") ? "" : (stryCov_9fa48("17"), "Dicas práticas para melhorar a performance e experiência do usuário em aplicações mobile nativas e híbridas..."),
      author: stryMutAct_9fa48("18") ? "" : (stryCov_9fa48("18"), "Carlos Silva"),
      date: stryMutAct_9fa48("19") ? "" : (stryCov_9fa48("19"), "12 Jan 2024"),
      category: stryMutAct_9fa48("20") ? "" : (stryCov_9fa48("20"), "Mobile"),
      readTime: stryMutAct_9fa48("21") ? "" : (stryCov_9fa48("21"), "7 min"),
      image: stryMutAct_9fa48("22") ? "" : (stryCov_9fa48("22"), "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&h=400&q=80"),
      tags: stryMutAct_9fa48("23") ? [] : (stryCov_9fa48("23"), [stryMutAct_9fa48("24") ? "" : (stryCov_9fa48("24"), "React Native"), stryMutAct_9fa48("25") ? "" : (stryCov_9fa48("25"), "Performance"), stryMutAct_9fa48("26") ? "" : (stryCov_9fa48("26"), "Mobile")])
    }), stryMutAct_9fa48("27") ? {} : (stryCov_9fa48("27"), {
      id: 3,
      title: stryMutAct_9fa48("28") ? "" : (stryCov_9fa48("28"), "Arquitetura de Microserviços: Guia Completo"),
      excerpt: stryMutAct_9fa48("29") ? "" : (stryCov_9fa48("29"), "Entenda os conceitos fundamentais e melhores práticas para implementar microserviços em sua aplicação..."),
      author: stryMutAct_9fa48("30") ? "" : (stryCov_9fa48("30"), "Ana Costa"),
      date: stryMutAct_9fa48("31") ? "" : (stryCov_9fa48("31"), "10 Jan 2024"),
      category: stryMutAct_9fa48("32") ? "" : (stryCov_9fa48("32"), "Arquitetura"),
      readTime: stryMutAct_9fa48("33") ? "" : (stryCov_9fa48("33"), "10 min"),
      image: stryMutAct_9fa48("34") ? "" : (stryCov_9fa48("34"), "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&h=400&q=80"),
      tags: stryMutAct_9fa48("35") ? [] : (stryCov_9fa48("35"), [stryMutAct_9fa48("36") ? "" : (stryCov_9fa48("36"), "Microserviços"), stryMutAct_9fa48("37") ? "" : (stryCov_9fa48("37"), "Docker"), stryMutAct_9fa48("38") ? "" : (stryCov_9fa48("38"), "Kubernetes")])
    })]);
    return <section className="blog-news-section">
      <div className="container">
        <div className="row mb-4">
          <div className="col-12 text-center">
            <h2 className="section-title">Últimas do Blog</h2>
            <p className="section-subtitle">
              Fique por dentro das novidades, dicas e insights sobre tecnologia
            </p>
          </div>
        </div>

        <Row className="g-4">
          {blogNews.map(stryMutAct_9fa48("39") ? () => undefined : (stryCov_9fa48("39"), news => <Col key={news.id} lg={4} md={6}>
              <Card className="h-100 blog-news-card">
                <div className="blog-image-container">
                  <img src={news.image} alt={news.title} className="blog-image" />
                  <div className="blog-category-badge">
                    <Badge bg="primary">{news.category}</Badge>
                  </div>
                </div>
                
                <Card.Body className="d-flex flex-column">
                  <div className="blog-meta mb-2">
                    <small className="text-muted">
                      <i className="bi bi-person me-1"></i>
                      {news.author}
                    </small>
                    <small className="text-muted ms-3">
                      <i className="bi bi-calendar me-1"></i>
                      {news.date}
                    </small>
                    <small className="text-muted ms-3">
                      <i className="bi bi-clock me-1"></i>
                      {news.readTime}
                    </small>
                  </div>

                  <h3 className="h5 mb-3 blog-title">{news.title}</h3>
                  <p className="text-muted mb-3 flex-grow-1">{news.excerpt}</p>

                  <div className="blog-tags mb-3">
                    {news.tags.map(stryMutAct_9fa48("40") ? () => undefined : (stryCov_9fa48("40"), (tag, index) => <Badge key={index} bg="light" text="dark" className="me-1">
                        {tag}
                      </Badge>))}
                  </div>

                  <Button variant="outline-primary" size="sm" className="mt-auto">
                    Ler Mais
                  </Button>
                </Card.Body>
              </Card>
            </Col>))}
        </Row>

        <div className="row mt-4">
          <div className="col-12 text-center">
            <Button variant="primary" size="lg">
              Ver Todas as Notícias
            </Button>
          </div>
        </div>
      </div>
    </section>;
  }
}
export default BlogNews;