import React, { useEffect, useRef } from 'react';
import { contatoData } from '../data/contatoData';
import { InfoCard, ContactForm } from '../components/HTMLComponents';
import './Contato.css';

function Contato() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      const html = `
        <div class="contato">
          <div class="contato-hero">
            <h1>${contatoData.hero.title}</h1>
            <p class="contato-subtitle">${contatoData.hero.subtitle}</p>
          </div>

          <div class="contato-content">
            <div class="contato-info">
              <h2>Informações de Contato</h2>
              ${contatoData.infoItems.map(item => InfoCard(item)).join('')}
            </div>

            ${ContactForm(contatoData.formFields)}
          </div>

          <div class="mapa-section">
            <h2>Nossa Localização</h2>
            <div class="mapa-placeholder">
              <div class="mapa-content">
                <h3>${contatoData.mapData.title}</h3>
                <p>${contatoData.mapData.description}</p>
                <p>${contatoData.mapData.additionalInfo}</p>
              </div>
            </div>
          </div>
        </div>
      `;
      
      containerRef.current.innerHTML = html;
    }
  }, []);

  return <div ref={containerRef} className="contato-container"></div>;
}

export default Contato; 