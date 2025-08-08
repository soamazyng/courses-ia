// @ts-nocheck
import { render, screen } from '@testing-library/react'
import App from '../App'

describe('App Component', () => {
  test('renderiza o componente App sem erros', () => {
    render(<App />)
    
    // Verifica se o App renderiza sem erros
    expect(screen.getByRole('navigation')).toBeInTheDocument()
  })

  test('renderiza o Navbar', () => {
    render(<App />)
    
    // Verifica se o Navbar está presente
    expect(screen.getByRole('navigation')).toBeInTheDocument()
  })

  test('renderiza o container principal', () => {
    render(<App />)
    
    // Verifica se o container principal está presente
    const container = screen.getByText('Home').closest('div')
    expect(container).toBeInTheDocument()
  })

  test('App tem a estrutura correta', () => {
    render(<App />)
    
    // Verifica se a estrutura básica está presente
    const app = screen.getByText('Home').closest('.App')
    expect(app).toBeInTheDocument()
  })
}) 