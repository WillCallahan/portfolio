import { render, screen } from '@testing-library/react'
import Stats from '../Stats'

// Mock the waypoints library completely
vi.mock('waypoints/lib/jquery.waypoints.js', () => ({}))

// Mock jQuery with waypoint functionality
vi.mock('jquery', () => {
  const mockJQuery = vi.fn(() => ({
    waypoint: vi.fn((callback) => {
      // Don't execute callback to avoid errors
      return { destroy: vi.fn() }
    }),
    each: vi.fn(),
    delay: vi.fn(() => ({ countTo: vi.fn() })),
    attr: vi.fn(() => '100')
  }))
  return { default: mockJQuery }
})

describe('Stats Component', () => {
  it('renders stats section', () => {
    render(<Stats />)
    
    const statsSection = screen.getByRole('region')
    expect(statsSection).toBeInTheDocument()
    expect(statsSection).toHaveAttribute('id', 'stats')
    expect(statsSection).toHaveClass('callout')
  })

  it('renders default title', () => {
    render(<Stats />)
    
    expect(screen.getByText('My Stats')).toBeInTheDocument()
  })

  it('renders default statistics', () => {
    render(<Stats />)
    
    expect(screen.getByText('Cloud Certs')).toBeInTheDocument()
    expect(screen.getByText('Languages')).toBeInTheDocument()
    expect(screen.getByText('Lines Written')).toBeInTheDocument()
  })

  it('displays numeric values for stats', () => {
    render(<Stats />)
    
    expect(screen.getByText('7')).toBeInTheDocument()
    expect(screen.getByText('17')).toBeInTheDocument()
    expect(screen.getByText('1200000')).toBeInTheDocument()
  })

  it('renders with proper CSS structure', () => {
    render(<Stats />)
    
    const statsSection = screen.getByRole('region')
    expect(statsSection).toHaveClass('callout')
    
    const container = statsSection.querySelector('.container')
    expect(container).toBeInTheDocument()
    
    const row = container.querySelector('.row')
    expect(row).toBeInTheDocument()
  })
})
