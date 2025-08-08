import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import Home from '../Home'

// Wrapper para componentes que usam React Router
const renderWithRouter = (component) => {
  return render(
    <BrowserRouter>
      {component}
    </BrowserRouter>
  )
}

describe('Home Page', () => {
  test('renderiza o título principal', () => {
    renderWithRouter(<Home />)
    
    // Verifica se o título da home está presente (usando dados do homeData)
    const titles = screen.getAllByText(/Nova Código/i)
    expect(titles.length).toBeGreaterThan(0)
  })

  test('renderiza a seção de serviços', () => {
    renderWithRouter(<Home />)
    
    const servicesTitle = screen.getByText('Nossos Principais Serviços')
    expect(servicesTitle).toBeInTheDocument()
  })

  test('renderiza todos os 4 serviços principais', () => {
    renderWithRouter(<Home />)
    
    // Verifica se todos os serviços estão presentes usando getAllByText
    const webDevElements = screen.getAllByText('Desenvolvimento Web')
    expect(webDevElements.length).toBeGreaterThan(0)
    
    const mobileElements = screen.getAllByText('Aplicações Mobile')
    expect(mobileElements.length).toBeGreaterThan(0)
    
    const enterpriseElements = screen.getAllByText('Sistemas Empresariais')
    expect(enterpriseElements.length).toBeGreaterThan(0)
    
    const consultingElements = screen.getAllByText('Consultoria em TI')
    expect(consultingElements.length).toBeGreaterThan(0)
  })

  test('renderiza descrições dos serviços', () => {
    renderWithRouter(<Home />)
    
    // Verifica algumas descrições dos serviços usando getAllByText
    const responsivosElements = screen.getAllByText(/Criamos sites responsivos/)
    expect(responsivosElements.length).toBeGreaterThan(0)
    
    const appsElements = screen.getAllByText(/Desenvolvemos apps nativos/)
    expect(appsElements.length).toBeGreaterThan(0)
    
    const solucoesElements = screen.getAllByText(/Soluções personalizadas/)
    expect(solucoesElements.length).toBeGreaterThan(0)
    
    const analiseElements = screen.getAllByText(/Análise, arquitetura/)
    expect(analiseElements.length).toBeGreaterThan(0)
  })

  test('renderiza tecnologias dos serviços', () => {
    renderWithRouter(<Home />)
    
    // Verifica algumas tecnologias importantes usando getAllByText para elementos duplicados
    const reactElements = screen.getAllByText('React')
    expect(reactElements.length).toBeGreaterThan(0)
    
    const nodeElements = screen.getAllByText('Node.js')
    expect(nodeElements.length).toBeGreaterThan(0)
    
    const reactNativeElements = screen.getAllByText('React Native')
    expect(reactNativeElements.length).toBeGreaterThan(0)
    
    const flutterElements = screen.getAllByText('Flutter')
    expect(flutterElements.length).toBeGreaterThan(0)
    
    const javaElements = screen.getAllByText('Java')
    expect(javaElements.length).toBeGreaterThan(0)
    
    const springElements = screen.getAllByText('Spring')
    expect(springElements.length).toBeGreaterThan(0)
  })

  test('renderiza a seção de features', () => {
    renderWithRouter(<Home />)
    
    const featuresTitle = screen.getByText('Por que escolher a Nova Código?')
    expect(featuresTitle).toBeInTheDocument()
  })

  test('renderiza a seção de estatísticas', () => {
    renderWithRouter(<Home />)
    
    const statsTitle = screen.getByText('Números que Importam')
    expect(statsTitle).toBeInTheDocument()
  })

  test('renderiza botões de ação', () => {
    renderWithRouter(<Home />)
    
    expect(screen.getByText('Conheça Nossos Projetos')).toBeInTheDocument()
    expect(screen.getByText('Entre em Contato')).toBeInTheDocument()
  })

  test('renderiza ícones dos serviços', () => {
    renderWithRouter(<Home />)
    
    // Verifica se os ícones estão presentes (emojis) usando getAllByText para elementos duplicados
    const computerIcons = screen.getAllByText('💻')
    expect(computerIcons.length).toBeGreaterThan(0)
    
    const mobileIcons = screen.getAllByText('📱')
    expect(mobileIcons.length).toBeGreaterThan(0)
    
    const lightningIcons = screen.getAllByText('⚡')
    expect(lightningIcons.length).toBeGreaterThan(0)
    
    const buildingIcons = screen.getAllByText('🏢')
    expect(buildingIcons.length).toBeGreaterThan(0)
  })

  test('renderiza imagens dos serviços', () => {
    renderWithRouter(<Home />)
    
    const images = screen.getAllByRole('img')
    expect(images.length).toBeGreaterThan(0)
    
    // Verifica se as imagens têm alt text
    images.forEach(img => {
      expect(img).toHaveAttribute('alt')
    })
  })

  test('página tem a classe CSS correta', () => {
    renderWithRouter(<Home />)
    
    const homePage = screen.getAllByText(/Nova Código/i)[0].closest('.home-page')
    expect(homePage).toBeInTheDocument()
  })

  test('cards de serviços têm a classe CSS correta', () => {
    renderWithRouter(<Home />)
    
    // Filtra apenas os cards de serviços (excluindo os do blog)
    const serviceCards = screen.getAllByText('Ler Mais')
      .filter(button => button.closest('.service-card'))
      .map(button => button.closest('.card'))
    
    serviceCards.forEach(card => {
      expect(card).toHaveClass('service-card')
    })
  })

  test('renderiza a seção de blog', () => {
    renderWithRouter(<Home />)
    
    // Verifica se o componente BlogNews está presente
    expect(screen.getByText('Últimas do Blog')).toBeInTheDocument()
  })
}) 