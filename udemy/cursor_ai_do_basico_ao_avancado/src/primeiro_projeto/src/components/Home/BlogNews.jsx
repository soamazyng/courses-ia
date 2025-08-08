import React from 'react';
import { Card, Row, Col, Badge, Button } from 'react-bootstrap';
import './BlogNews.css';

function BlogNews() {
  // Dados simulados das últimas notícias do blog
  const blogNews = [
    {
      id: 1,
      title: "Tendências de Desenvolvimento Web em 2024",
      excerpt: "Descubra as principais tecnologias e frameworks que estão dominando o mercado de desenvolvimento web este ano...",
      author: "Equipe Nova Código",
      date: "15 Jan 2024",
      category: "Tecnologia",
      readTime: "5 min",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&h=400&q=80",
      tags: ["React", "JavaScript", "Web Development"]
    },
    {
      id: 2,
      title: "Como Otimizar Performance em Aplicações Mobile",
      excerpt: "Dicas práticas para melhorar a performance e experiência do usuário em aplicações mobile nativas e híbridas...",
      author: "Carlos Silva",
      date: "12 Jan 2024",
      category: "Mobile",
      readTime: "7 min",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&h=400&q=80",
      tags: ["React Native", "Performance", "Mobile"]
    },
    {
      id: 3,
      title: "Arquitetura de Microserviços: Guia Completo",
      excerpt: "Entenda os conceitos fundamentais e melhores práticas para implementar microserviços em sua aplicação...",
      author: "Ana Costa",
      date: "10 Jan 2024",
      category: "Arquitetura",
      readTime: "10 min",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&h=400&q=80",
      tags: ["Microserviços", "Docker", "Kubernetes"]
    }
  ];

  return (
    <section className="blog-news-section">
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
          {blogNews.map((news) => (
            <Col key={news.id} lg={4} md={6}>
              <Card className="h-100 blog-news-card">
                <div className="blog-image-container">
                  <img 
                    src={news.image} 
                    alt={news.title}
                    className="blog-image"
                  />
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
                    {news.tags.map((tag, index) => (
                      <Badge key={index} bg="light" text="dark" className="me-1">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <Button variant="outline-primary" size="sm" className="mt-auto">
                    Ler Mais
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        <div className="row mt-4">
          <div className="col-12 text-center">
            <Button variant="primary" size="lg">
              Ver Todas as Notícias
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BlogNews; 