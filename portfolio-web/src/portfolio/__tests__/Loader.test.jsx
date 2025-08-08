import { render, screen } from '@testing-library/react'
import Loader from '../Loader'

describe('Loader Component', () => {
  it('renders loading spinner', () => {
    render(<Loader />)
    
    const loader = screen.getByTestId('loader')
    expect(loader).toBeInTheDocument()
  })

  it('has proper CSS classes for animation', () => {
    render(<Loader />)
    
    const loader = screen.getByTestId('loader')
    expect(loader).toHaveClass('loader')
  })

  it('is accessible with proper ARIA attributes', () => {
    render(<Loader />)
    
    const loader = screen.getByRole('status')
    expect(loader).toBeInTheDocument()
    expect(loader).toHaveAttribute('aria-label', 'Loading')
  })

  it('renders with loading text for screen readers', () => {
    render(<Loader />)
    
    expect(screen.getByText('Loading...')).toBeInTheDocument()
  })

  it('has proper structure for CSS animations', () => {
    render(<Loader />)
    
    const spinnerElements = screen.getAllByTestId(/spinner-/)
    expect(spinnerElements.length).toBeGreaterThan(0)
  })
})
