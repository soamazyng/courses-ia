import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import Navbar from '../Navbar'

// Wrapper para componentes que usam React Router
const renderWithRouter = (component) => {
  return render(
    <BrowserRouter>
      {component}
    </BrowserRouter>
  )
}

describe('Navbar Component', () => {
  test('renderiza o logo da empresa', () => {
    renderWithRouter(<Navbar />)
    
    const logo = screen.getByAltText('Nova Código')
    expect(logo).toBeInTheDocument()
  })

  test('renderiza todos os links de navegação', () => {
    renderWithRouter(<Navbar />)
    
    // Verifica se todos os links principais estão presentes
    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByText('Sobre')).toBeInTheDocument()
    expect(screen.getByText('Contato')).toBeInTheDocument()
  })

  test('renderiza o menu de serviços', () => {
    renderWithRouter(<Navbar />)
    
    // Verifica se o menu de serviços está presente
    expect(screen.getByText('Serviços')).toBeInTheDocument()
  })

  test('renderiza o botão de contato', () => {
    renderWithRouter(<Navbar />)
    
    // Verifica se o link de contato está presente (não há botão no Navbar)
    const contactLink = screen.getByText('Contato')
    expect(contactLink).toBeInTheDocument()
    expect(contactLink).toHaveClass('nav-link')
  })

  test('navbar tem a classe correta', () => {
    renderWithRouter(<Navbar />)
    
    const navbar = screen.getByRole('navigation')
    expect(navbar).toHaveClass('navbar')
    expect(navbar).toHaveClass('navbar-expand-lg')
  })

  test('todos os links têm href válidos', () => {
    renderWithRouter(<Navbar />)
    
    const homeLink = screen.getByText('Home').closest('a')
    const sobreLink = screen.getByText('Sobre').closest('a')
    const contatoLink = screen.getByText('Contato').closest('a')
    
    expect(homeLink).toHaveAttribute('href', '/')
    expect(sobreLink).toHaveAttribute('href', '/sobre')
    expect(contatoLink).toHaveAttribute('href', '/contato')
  })
}) 