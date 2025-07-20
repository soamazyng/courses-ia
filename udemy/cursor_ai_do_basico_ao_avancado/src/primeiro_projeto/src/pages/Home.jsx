import React, { useEffect, useRef } from 'react';
import { homeData } from '../data/homeData';
import { HeroSection, FeaturesSection, StatsSection } from '../components/HTMLComponents';
import './Home.css';

function Home() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      // Renderizar HTML usando componentes simples
      const html = `
        <div class="home">
          ${HeroSection({
            title: homeData.hero.title,
            subtitle: homeData.hero.subtitle
          })}
          ${FeaturesSection(homeData.features)}
          ${StatsSection(homeData.stats)}
        </div>
      `;
      
      containerRef.current.innerHTML = html;
    }
  }, []);

  return <div ref={containerRef} className="home-container"></div>;
}

export default Home; 