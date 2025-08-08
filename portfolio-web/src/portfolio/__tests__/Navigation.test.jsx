import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Navigation from '../Navigation'

describe('Navigation Component', () => {
  it('renders all navigation links', () => {
    render(<Navigation />)
    
    expect(screen.getByText(/home/i)).toBeInTheDocument()
    expect(screen.getByText(/about/i)).toBeInTheDocument()
    expect(screen.getByText(/certifications/i)).toBeInTheDocument()
    expect(screen.getByText(/services/i)).toBeInTheDocument()
    expect(screen.getByText(/resume/i)).toBeInTheDocument()
    expect(screen.getByText(/portfolio/i)).toBeInTheDocument()
    expect(screen.getByText(/contact/i)).toBeInTheDocument()
  })

  it('has correct href attributes for navigation links', () => {
    render(<Navigation />)
    
    expect(screen.getByRole('link', { name: /home/i })).toHaveAttribute('href', '#intro')
    expect(screen.getByRole('link', { name: /about/i })).toHaveAttribute('href', '#profile')
    expect(screen.getByRole('link', { name: /certifications/i })).toHaveAttribute('href', '#certifications')
    expect(screen.getByRole('link', { name: /services/i })).toHaveAttribute('href', '#services')
    expect(screen.getByRole('link', { name: /resume/i })).toHaveAttribute('href', '#resume')
    expect(screen.getByRole('link', { name: /portfolio/i })).toHaveAttribute('href', '#portfolio')
    expect(screen.getByRole('link', { name: /contact/i })).toHaveAttribute('href', '#contact')
  })

  it('renders mobile menu toggle button', () => {
    render(<Navigation />)
    
    const toggleButton = screen.getByRole('button', { name: /toggle navigation/i })
    expect(toggleButton).toBeInTheDocument()
    expect(toggleButton).toHaveClass('navbar-toggle')
  })

  it('has proper navigation structure', async () => {
    render(<Navigation />)
    
    const toggleButton = screen.getByRole('button', { name: /toggle navigation/i })
    const navCollapse = screen.getByTestId('navbar-collapse')
    
    // Check initial structure - React state management handles toggle behavior
    expect(navCollapse).toHaveClass('collapse', 'navbar-collapse')
    expect(toggleButton).toHaveAttribute('aria-controls', 'bs-example-navbar-collapse-1')
    expect(toggleButton).toHaveAttribute('aria-expanded', 'false')
  })

  it('renders brand logo/text', () => {
    render(<Navigation />)
    
    const brand = screen.getByRole('link', { name: /william callahan/i })
    expect(brand).toBeInTheDocument()
    expect(brand).toHaveClass('navbar-brand')
    expect(brand).toHaveAttribute('href', '#intro')
  })
})
