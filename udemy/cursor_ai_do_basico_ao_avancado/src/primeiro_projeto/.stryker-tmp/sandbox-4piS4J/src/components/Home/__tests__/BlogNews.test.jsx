// @ts-nocheck
import { render, screen } from '@testing-library/react'
import BlogNews from '../BlogNews'

describe('BlogNews Component', () => {
  test('renderiza o título da seção', () => {
    render(<BlogNews />)
    
    const sectionTitle = screen.getByText('Últimas do Blog')
    expect(sectionTitle).toBeInTheDocument()
  })

  test('renderiza o subtítulo da seção', () => {
    render(<BlogNews />)
    
    const subtitle = screen.getByText('Fique por dentro das novidades, dicas e insights sobre tecnologia')
    expect(subtitle).toBeInTheDocument()
  })

  test('renderiza 3 cards de notícias', () => {
    render(<BlogNews />)
    
    // Verifica se os títulos das 3 notícias estão presentes
    expect(screen.getByText('Tendências de Desenvolvimento Web em 2024')).toBeInTheDocument()
    expect(screen.getByText('Como Otimizar Performance em Aplicações Mobile')).toBeInTheDocument()
    expect(screen.getByText('Arquitetura de Microserviços: Guia Completo')).toBeInTheDocument()
  })

  test('renderiza informações de autor, data e tempo de leitura', () => {
    render(<BlogNews />)
    
    // Verifica se as informações de meta estão presentes
    expect(screen.getByText('Equipe Nova Código')).toBeInTheDocument()
    expect(screen.getByText('Carlos Silva')).toBeInTheDocument()
    expect(screen.getByText('Ana Costa')).toBeInTheDocument()
    
    expect(screen.getByText('15 Jan 2024')).toBeInTheDocument()
    expect(screen.getByText('12 Jan 2024')).toBeInTheDocument()
    expect(screen.getByText('10 Jan 2024')).toBeInTheDocument()
    
    expect(screen.getByText('5 min')).toBeInTheDocument()
    expect(screen.getByText('7 min')).toBeInTheDocument()
    expect(screen.getByText('10 min')).toBeInTheDocument()
  })

  test('renderiza categorias das notícias', () => {
    render(<BlogNews />)
    
    // Verifica se as categorias estão presentes (pode haver duplicatas)
    const tecnologiaElements = screen.getAllByText('Tecnologia')
    expect(tecnologiaElements.length).toBeGreaterThan(0)
    
    const mobileElements = screen.getAllByText('Mobile')
    expect(mobileElements.length).toBeGreaterThan(0)
    
    const arquiteturaElements = screen.getAllByText('Arquitetura')
    expect(arquiteturaElements.length).toBeGreaterThan(0)
  })

  test('renderiza tags das notícias', () => {
    render(<BlogNews />)
    
    // Verifica algumas tags importantes
    expect(screen.getByText('React')).toBeInTheDocument()
    expect(screen.getByText('JavaScript')).toBeInTheDocument()
    expect(screen.getByText('React Native')).toBeInTheDocument()
    expect(screen.getByText('Performance')).toBeInTheDocument()
    expect(screen.getByText('Microserviços')).toBeInTheDocument()
    expect(screen.getByText('Docker')).toBeInTheDocument()
  })

  test('renderiza botões "Ler Mais" para cada notícia', () => {
    render(<BlogNews />)
    
    const lerMaisButtons = screen.getAllByText('Ler Mais')
    expect(lerMaisButtons).toHaveLength(3)
    
    // Verifica se todos os botões têm a classe correta
    lerMaisButtons.forEach(button => {
      expect(button).toHaveClass('btn-outline-primary')
    })
  })

  test('renderiza botão "Ver Todas as Notícias"', () => {
    render(<BlogNews />)
    
    const verTodasButton = screen.getByText('Ver Todas as Notícias')
    expect(verTodasButton).toBeInTheDocument()
    expect(verTodasButton).toHaveClass('btn-primary')
  })

  test('renderiza imagens das notícias', () => {
    render(<BlogNews />)
    
    const images = screen.getAllByRole('img')
    expect(images.length).toBeGreaterThan(0)
    
    // Verifica se as imagens têm alt text
    images.forEach(img => {
      expect(img).toHaveAttribute('alt')
    })
  })

  test('seção tem a classe CSS correta', () => {
    render(<BlogNews />)
    
    const section = screen.getByText('Últimas do Blog').closest('section')
    expect(section).toHaveClass('blog-news-section')
  })

  test('cards têm a classe CSS correta', () => {
    render(<BlogNews />)
    
    const cards = screen.getAllByText('Ler Mais').map(button => button.closest('.card'))
    cards.forEach(card => {
      expect(card).toHaveClass('blog-news-card')
    })
  })
}) 