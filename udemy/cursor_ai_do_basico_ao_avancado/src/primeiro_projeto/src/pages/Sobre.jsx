import React, { useEffect, useRef } from 'react';
import { sobreData } from '../data/sobreData';
import { HeroSection, ValorCard, ValoresSection, TimelineSection, StatsSection } from '../components/HTMLComponents';
import './Sobre.css';

function Sobre() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      const html = `
        <div class="sobre">
          <div class="sobre-hero">
            <h1>${sobreData.hero.title}</h1>
            <p class="sobre-subtitle">${sobreData.hero.subtitle}</p>
          </div>

          <div class="sobre-content">
            <div class="missao-visao">
              <div class="card">
                <h2>${sobreData.missao.title}</h2>
                <p>${sobreData.missao.description}</p>
              </div>
              
              <div class="card">
                <h2>${sobreData.visao.title}</h2>
                <p>${sobreData.visao.description}</p>
              </div>
            </div>

            <div class="valores-section">
              <h2>Nossos Valores</h2>
              ${ValoresSection(sobreData.valores)}
            </div>

            <div class="historia-section">
              <h2>Nossa História</h2>
              ${TimelineSection(sobreData.timeline)}
            </div>

            <div class="equipe-section">
              <h2>Nossa Equipe</h2>
              <p class="equipe-descricao">${sobreData.equipe.description}</p>
              ${StatsSection(sobreData.equipe.stats)}
            </div>
          </div>
        </div>
      `;
      
      containerRef.current.innerHTML = html;
    }
  }, []);

  return <div ref={containerRef} className="sobre-container"></div>;
}

export default Sobre; 