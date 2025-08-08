import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Container, Row, Col, Form, Button, Alert, Card } from 'react-bootstrap';
import { contatoData } from '../data/contatoData';
import './Contato.css';

// Schema de validação simplificado
const schema = yup.object({
  nome: yup.string().required('Nome é obrigatório'),
  email: yup.string().email('Email inválido').required('Email é obrigatório'),
  mensagem: yup.string().required('Mensagem é obrigatória')
}).required();

function Contato() {
  const [showSuccess, setShowSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm({
    resolver: yupResolver(schema)
  });

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log('Dados do formulário:', data);
    setShowSuccess(true);
    setIsSubmitting(false);
    reset();
    setTimeout(() => setShowSuccess(false), 3000);
  };

  return (
    <div className="contato-page">
      <Container className="py-5">
        {/* Hero Section */}
        <Row className="mb-5">
          <Col className="text-center">
            <h1 className="display-4 fw-bold mb-3">{contatoData.hero.title}</h1>
            <p className="lead">{contatoData.hero.subtitle}</p>
          </Col>
        </Row>

        <Row className="g-4">
          {/* Informações de Contato */}
          <Col lg={4}>
            <Card className="h-100">
              <Card.Header className="bg-primary text-white">
                <h3 className="mb-0">Informações de Contato</h3>
              </Card.Header>
              <Card.Body>
                {contatoData.infoItems.map((item, index) => (
                  <div key={index} className="mb-3">
                    <h5 className="fw-bold">{item.title}</h5>
                    <p className="text-muted" dangerouslySetInnerHTML={{ __html: item.content }}></p>
                  </div>
                ))}
              </Card.Body>
            </Card>
          </Col>

          {/* Formulário de Contato */}
          <Col lg={8}>
            <Card className="h-100">
              <Card.Header className="bg-success text-white">
                <h3 className="mb-0">Envie uma Mensagem</h3>
              </Card.Header>
              <Card.Body>
                {showSuccess && (
                  <Alert variant="success" dismissible onClose={() => setShowSuccess(false)}>
                    Mensagem enviada com sucesso!
                  </Alert>
                )}

                <Form onSubmit={handleSubmit(onSubmit)}>
                  <Row>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Nome *</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Seu nome"
                          isInvalid={!!errors.nome}
                          {...register('nome')}
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.nome?.message}
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Email *</Form.Label>
                        <Form.Control
                          type="email"
                          placeholder="seu@email.com"
                          isInvalid={!!errors.email}
                          {...register('email')}
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.email?.message}
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Col>
                  </Row>

                  <Form.Group className="mb-3">
                    <Form.Label>Mensagem *</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={4}
                      placeholder="Digite sua mensagem..."
                      isInvalid={!!errors.mensagem}
                      {...register('mensagem')}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.mensagem?.message}
                    </Form.Control.Feedback>
                  </Form.Group>

                  <div className="d-grid">
                    <Button
                      type="submit"
                      variant="success"
                      size="lg"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
                    </Button>
                  </div>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Contato; 