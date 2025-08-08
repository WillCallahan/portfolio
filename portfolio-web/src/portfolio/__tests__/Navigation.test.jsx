import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Navigation from '../Navigation'

describe('Navigation Component', () => {
  it('renders all navigation links', () => {
    render(<Navigation />)
    
    expect(screen.getByText(/home/i)).toBeInTheDocument()
    expect(screen.getByText(/about/i)).toBeInTheDocument()
    expect(screen.getByText(/resume/i)).toBeInTheDocument()
    expect(screen.getByText(/works/i)).toBeInTheDocument()
    expect(screen.getByText(/contact/i)).toBeInTheDocument()
  })

  it('has correct href attributes for navigation links', () => {
    render(<Navigation />)
    
    expect(screen.getByRole('link', { name: /home/i })).toHaveAttribute('href', '#home')
    expect(screen.getByRole('link', { name: /about/i })).toHaveAttribute('href', '#about')
    expect(screen.getByRole('link', { name: /resume/i })).toHaveAttribute('href', '#resume')
    expect(screen.getByRole('link', { name: /works/i })).toHaveAttribute('href', '#works')
    expect(screen.getByRole('link', { name: /contact/i })).toHaveAttribute('href', '#contact')
  })

  it('renders mobile menu toggle button', () => {
    render(<Navigation />)
    
    const toggleButton = screen.getByRole('button', { name: /toggle navigation/i })
    expect(toggleButton).toBeInTheDocument()
    expect(toggleButton).toHaveClass('navbar-toggle')
  })

  it('toggles mobile menu when button is clicked', async () => {
    const user = userEvent.setup()
    render(<Navigation />)
    
    const toggleButton = screen.getByRole('button', { name: /toggle navigation/i })
    const navCollapse = screen.getByTestId('navbar-collapse')
    
    // Initially collapsed
    expect(navCollapse).toHaveClass('collapse')
    
    // Click to expand
    await user.click(toggleButton)
    expect(navCollapse).toHaveClass('collapse', 'in')
  })

  it('renders brand logo/text', () => {
    render(<Navigation />)
    
    const brand = screen.getByRole('link', { name: /william callahan/i })
    expect(brand).toBeInTheDocument()
    expect(brand).toHaveClass('navbar-brand')
  })
})
