import { render, screen } from '@testing-library/react'
import App from './App'

// Mock the portfolio components to avoid complex dependencies
vi.mock('./components/App', () => ({
  default: () => <div data-testid="portfolio-app">Portfolio App</div>
}))

describe('App Component', () => {
  it('renders without crashing', () => {
    render(<App />)
    
    expect(screen.getByTestId('portfolio-app')).toBeInTheDocument()
  })

  it('renders the portfolio application', () => {
    render(<App />)
    
    expect(screen.getByText('Portfolio App')).toBeInTheDocument()
  })
})
