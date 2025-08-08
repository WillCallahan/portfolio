import { render, screen } from '@testing-library/react'
import Stats from '../Stats'

describe('Stats Component', () => {
  it('renders all stat items', () => {
    render(<Stats />)
    
    // Check for common stats that might be displayed
    expect(screen.getByText(/years of experience/i)).toBeInTheDocument()
    expect(screen.getByText(/projects completed/i)).toBeInTheDocument()
    expect(screen.getByText(/happy clients/i)).toBeInTheDocument()
    expect(screen.getByText(/certifications/i)).toBeInTheDocument()
  })

  it('displays numeric values for stats', () => {
    render(<Stats />)
    
    // Look for numeric values (assuming they exist in the component)
    const numbers = screen.getAllByText(/\d+/)
    expect(numbers.length).toBeGreaterThan(0)
  })

  it('has proper structure with stat items', () => {
    render(<Stats />)
    
    const statsContainer = screen.getByTestId('stats-container')
    expect(statsContainer).toBeInTheDocument()
    
    const statItems = screen.getAllByTestId('stat-item')
    expect(statItems.length).toBeGreaterThan(0)
  })

  it('renders with proper CSS classes for styling', () => {
    render(<Stats />)
    
    const statsContainer = screen.getByTestId('stats-container')
    expect(statsContainer).toHaveClass('stats-section')
  })

  it('includes icons for each stat', () => {
    render(<Stats />)
    
    const icons = screen.getAllByRole('img', { hidden: true })
    expect(icons.length).toBeGreaterThan(0)
  })
})
