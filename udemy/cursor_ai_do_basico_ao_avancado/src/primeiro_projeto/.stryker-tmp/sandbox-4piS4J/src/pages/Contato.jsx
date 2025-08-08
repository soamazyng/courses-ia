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
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Container, Row, Col, Form, Button, Alert, Card } from 'react-bootstrap';
import { contatoData } from '../data/contatoData';
import './Contato.css';

// Schema de validação simplificado
const schema = yup.object(stryMutAct_9fa48("480") ? {} : (stryCov_9fa48("480"), {
  nome: yup.string().required(stryMutAct_9fa48("481") ? "" : (stryCov_9fa48("481"), 'Nome é obrigatório')),
  email: yup.string().email(stryMutAct_9fa48("482") ? "" : (stryCov_9fa48("482"), 'Email inválido')).required(stryMutAct_9fa48("483") ? "" : (stryCov_9fa48("483"), 'Email é obrigatório')),
  mensagem: yup.string().required(stryMutAct_9fa48("484") ? "" : (stryCov_9fa48("484"), 'Mensagem é obrigatória'))
})).required();
function Contato() {
  if (stryMutAct_9fa48("485")) {
    {}
  } else {
    stryCov_9fa48("485");
    const [showSuccess, setShowSuccess] = useState(stryMutAct_9fa48("486") ? true : (stryCov_9fa48("486"), false));
    const [isSubmitting, setIsSubmitting] = useState(stryMutAct_9fa48("487") ? true : (stryCov_9fa48("487"), false));
    const {
      register,
      handleSubmit,
      formState: {
        errors
      },
      reset
    } = useForm(stryMutAct_9fa48("488") ? {} : (stryCov_9fa48("488"), {
      resolver: yupResolver(schema)
    }));
    const onSubmit = async data => {
      if (stryMutAct_9fa48("489")) {
        {}
      } else {
        stryCov_9fa48("489");
        setIsSubmitting(stryMutAct_9fa48("490") ? false : (stryCov_9fa48("490"), true));
        await new Promise(stryMutAct_9fa48("491") ? () => undefined : (stryCov_9fa48("491"), resolve => setTimeout(resolve, 1000)));
        console.log(stryMutAct_9fa48("492") ? "" : (stryCov_9fa48("492"), 'Dados do formulário:'), data);
        setShowSuccess(stryMutAct_9fa48("493") ? false : (stryCov_9fa48("493"), true));
        setIsSubmitting(stryMutAct_9fa48("494") ? true : (stryCov_9fa48("494"), false));
        reset();
        setTimeout(stryMutAct_9fa48("495") ? () => undefined : (stryCov_9fa48("495"), () => setShowSuccess(stryMutAct_9fa48("496") ? true : (stryCov_9fa48("496"), false))), 3000);
      }
    };
    return <div className="contato-page">
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
                {contatoData.infoItems.map(stryMutAct_9fa48("497") ? () => undefined : (stryCov_9fa48("497"), (item, index) => <div key={index} className="mb-3">
                    <h5 className="fw-bold">{item.title}</h5>
                    <p className="text-muted" dangerouslySetInnerHTML={stryMutAct_9fa48("498") ? {} : (stryCov_9fa48("498"), {
                    __html: item.content
                  })}></p>
                  </div>))}
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
                {stryMutAct_9fa48("501") ? showSuccess || <Alert variant="success" dismissible onClose={() => setShowSuccess(false)}>
                    Mensagem enviada com sucesso!
                  </Alert> : stryMutAct_9fa48("500") ? false : stryMutAct_9fa48("499") ? true : (stryCov_9fa48("499", "500", "501"), showSuccess && <Alert variant="success" dismissible onClose={stryMutAct_9fa48("502") ? () => undefined : (stryCov_9fa48("502"), () => setShowSuccess(stryMutAct_9fa48("503") ? true : (stryCov_9fa48("503"), false)))}>
                    Mensagem enviada com sucesso!
                  </Alert>)}

                <Form onSubmit={handleSubmit(onSubmit)}>
                  <Row>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Nome *</Form.Label>
                        <Form.Control type="text" placeholder="Seu nome" isInvalid={stryMutAct_9fa48("504") ? !errors.nome : (stryCov_9fa48("504"), !(stryMutAct_9fa48("505") ? errors.nome : (stryCov_9fa48("505"), !errors.nome)))} {...register(stryMutAct_9fa48("506") ? "" : (stryCov_9fa48("506"), 'nome'))} />
                        <Form.Control.Feedback type="invalid">
                          {stryMutAct_9fa48("507") ? errors.nome.message : (stryCov_9fa48("507"), errors.nome?.message)}
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Email *</Form.Label>
                        <Form.Control type="email" placeholder="seu@email.com" isInvalid={stryMutAct_9fa48("508") ? !errors.email : (stryCov_9fa48("508"), !(stryMutAct_9fa48("509") ? errors.email : (stryCov_9fa48("509"), !errors.email)))} {...register(stryMutAct_9fa48("510") ? "" : (stryCov_9fa48("510"), 'email'))} />
                        <Form.Control.Feedback type="invalid">
                          {stryMutAct_9fa48("511") ? errors.email.message : (stryCov_9fa48("511"), errors.email?.message)}
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Col>
                  </Row>

                  <Form.Group className="mb-3">
                    <Form.Label>Mensagem *</Form.Label>
                    <Form.Control as="textarea" rows={4} placeholder="Digite sua mensagem..." isInvalid={stryMutAct_9fa48("512") ? !errors.mensagem : (stryCov_9fa48("512"), !(stryMutAct_9fa48("513") ? errors.mensagem : (stryCov_9fa48("513"), !errors.mensagem)))} {...register(stryMutAct_9fa48("514") ? "" : (stryCov_9fa48("514"), 'mensagem'))} />
                    <Form.Control.Feedback type="invalid">
                      {stryMutAct_9fa48("515") ? errors.mensagem.message : (stryCov_9fa48("515"), errors.mensagem?.message)}
                    </Form.Control.Feedback>
                  </Form.Group>

                  <div className="d-grid">
                    <Button type="submit" variant="success" size="lg" disabled={isSubmitting}>
                      {isSubmitting ? stryMutAct_9fa48("516") ? "" : (stryCov_9fa48("516"), 'Enviando...') : stryMutAct_9fa48("517") ? "" : (stryCov_9fa48("517"), 'Enviar Mensagem')}
                    </Button>
                  </div>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>;
  }
}
export default Contato;