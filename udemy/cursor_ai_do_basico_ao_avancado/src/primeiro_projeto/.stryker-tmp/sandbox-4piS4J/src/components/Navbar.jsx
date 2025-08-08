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
import { Link, useLocation } from 'react-router-dom';
import { Navbar as BootstrapNavbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import novacodigoLogo from '../assets/novacodigo-logo.svg';
import './Navbar.css';
function Navbar() {
  if (stryMutAct_9fa48("41")) {
    {}
  } else {
    stryCov_9fa48("41");
    const location = useLocation();
    return <BootstrapNavbar bg="light" expand="lg" className="py-3">
      <Container>
        <BootstrapNavbar.Brand as={Link} to="/" className="d-flex align-items-center">
          <img src={novacodigoLogo} alt="Nova Código" height="40" className="me-2" />
        </BootstrapNavbar.Brand>
        
        <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />
        
        <BootstrapNavbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/" className={(stryMutAct_9fa48("44") ? location.pathname !== '/' : stryMutAct_9fa48("43") ? false : stryMutAct_9fa48("42") ? true : (stryCov_9fa48("42", "43", "44"), location.pathname === (stryMutAct_9fa48("45") ? "" : (stryCov_9fa48("45"), '/')))) ? stryMutAct_9fa48("46") ? "" : (stryCov_9fa48("46"), 'active') : stryMutAct_9fa48("47") ? "Stryker was here!" : (stryCov_9fa48("47"), '')}>
              Home
            </Nav.Link>
            
            <NavDropdown title="Serviços" id="basic-nav-dropdown" className={(stryMutAct_9fa48("50") ? (location.pathname.includes('/desenvolvimento-web') || location.pathname.includes('/aplicacoes-mobile') || location.pathname.includes('/sistemas-empresariais')) && location.pathname.includes('/consultoria-ti') : stryMutAct_9fa48("49") ? false : stryMutAct_9fa48("48") ? true : (stryCov_9fa48("48", "49", "50"), (stryMutAct_9fa48("52") ? (location.pathname.includes('/desenvolvimento-web') || location.pathname.includes('/aplicacoes-mobile')) && location.pathname.includes('/sistemas-empresariais') : stryMutAct_9fa48("51") ? false : (stryCov_9fa48("51", "52"), (stryMutAct_9fa48("54") ? location.pathname.includes('/desenvolvimento-web') && location.pathname.includes('/aplicacoes-mobile') : stryMutAct_9fa48("53") ? false : (stryCov_9fa48("53", "54"), location.pathname.includes(stryMutAct_9fa48("55") ? "" : (stryCov_9fa48("55"), '/desenvolvimento-web')) || location.pathname.includes(stryMutAct_9fa48("56") ? "" : (stryCov_9fa48("56"), '/aplicacoes-mobile')))) || location.pathname.includes(stryMutAct_9fa48("57") ? "" : (stryCov_9fa48("57"), '/sistemas-empresariais')))) || location.pathname.includes(stryMutAct_9fa48("58") ? "" : (stryCov_9fa48("58"), '/consultoria-ti')))) ? stryMutAct_9fa48("59") ? "" : (stryCov_9fa48("59"), 'active') : stryMutAct_9fa48("60") ? "Stryker was here!" : (stryCov_9fa48("60"), '')}>
              <NavDropdown.Item as={Link} to="/desenvolvimento-web" className={(stryMutAct_9fa48("63") ? location.pathname !== '/desenvolvimento-web' : stryMutAct_9fa48("62") ? false : stryMutAct_9fa48("61") ? true : (stryCov_9fa48("61", "62", "63"), location.pathname === (stryMutAct_9fa48("64") ? "" : (stryCov_9fa48("64"), '/desenvolvimento-web')))) ? stryMutAct_9fa48("65") ? "" : (stryCov_9fa48("65"), 'active') : stryMutAct_9fa48("66") ? "Stryker was here!" : (stryCov_9fa48("66"), '')}>
                💻 Desenvolvimento Web
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/aplicacoes-mobile" className={(stryMutAct_9fa48("69") ? location.pathname !== '/aplicacoes-mobile' : stryMutAct_9fa48("68") ? false : stryMutAct_9fa48("67") ? true : (stryCov_9fa48("67", "68", "69"), location.pathname === (stryMutAct_9fa48("70") ? "" : (stryCov_9fa48("70"), '/aplicacoes-mobile')))) ? stryMutAct_9fa48("71") ? "" : (stryCov_9fa48("71"), 'active') : stryMutAct_9fa48("72") ? "Stryker was here!" : (stryCov_9fa48("72"), '')}>
                📱 Aplicações Mobile
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/sistemas-empresariais" className={(stryMutAct_9fa48("75") ? location.pathname !== '/sistemas-empresariais' : stryMutAct_9fa48("74") ? false : stryMutAct_9fa48("73") ? true : (stryCov_9fa48("73", "74", "75"), location.pathname === (stryMutAct_9fa48("76") ? "" : (stryCov_9fa48("76"), '/sistemas-empresariais')))) ? stryMutAct_9fa48("77") ? "" : (stryCov_9fa48("77"), 'active') : stryMutAct_9fa48("78") ? "Stryker was here!" : (stryCov_9fa48("78"), '')}>
                ⚡ Sistemas Empresariais
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/consultoria-ti" className={(stryMutAct_9fa48("81") ? location.pathname !== '/consultoria-ti' : stryMutAct_9fa48("80") ? false : stryMutAct_9fa48("79") ? true : (stryCov_9fa48("79", "80", "81"), location.pathname === (stryMutAct_9fa48("82") ? "" : (stryCov_9fa48("82"), '/consultoria-ti')))) ? stryMutAct_9fa48("83") ? "" : (stryCov_9fa48("83"), 'active') : stryMutAct_9fa48("84") ? "Stryker was here!" : (stryCov_9fa48("84"), '')}>
                🏢 Consultoria em TI
              </NavDropdown.Item>
            </NavDropdown>
            
            <Nav.Link as={Link} to="/sobre" className={(stryMutAct_9fa48("87") ? location.pathname !== '/sobre' : stryMutAct_9fa48("86") ? false : stryMutAct_9fa48("85") ? true : (stryCov_9fa48("85", "86", "87"), location.pathname === (stryMutAct_9fa48("88") ? "" : (stryCov_9fa48("88"), '/sobre')))) ? stryMutAct_9fa48("89") ? "" : (stryCov_9fa48("89"), 'active') : stryMutAct_9fa48("90") ? "Stryker was here!" : (stryCov_9fa48("90"), '')}>
              Sobre
            </Nav.Link>
            <Nav.Link as={Link} to="/contato" className={(stryMutAct_9fa48("93") ? location.pathname !== '/contato' : stryMutAct_9fa48("92") ? false : stryMutAct_9fa48("91") ? true : (stryCov_9fa48("91", "92", "93"), location.pathname === (stryMutAct_9fa48("94") ? "" : (stryCov_9fa48("94"), '/contato')))) ? stryMutAct_9fa48("95") ? "" : (stryCov_9fa48("95"), 'active') : stryMutAct_9fa48("96") ? "Stryker was here!" : (stryCov_9fa48("96"), '')}>
              Contato
            </Nav.Link>
          </Nav>
        </BootstrapNavbar.Collapse>
      </Container>
    </BootstrapNavbar>;
  }
}
export default Navbar;