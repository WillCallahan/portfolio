import { render, screen } from '@testing-library/react'
import Profile from '../Profile'

describe('Profile Component', () => {
  it('renders profile information', () => {
    render(<Profile />)
    
    expect(screen.getByText(/william callahan/i)).toBeInTheDocument()
    expect(screen.getByText(/senior cloud engineer/i)).toBeInTheDocument()
  })

  it('renders profile image', () => {
    render(<Profile />)
    
    const profileImage = screen.getByAltText(/profile/i)
    expect(profileImage).toBeInTheDocument()
    expect(profileImage).toHaveAttribute('src', '/images/theme/photo.jpg')
  })

  it('renders skillset section', () => {
    render(<Profile />)
    
    expect(screen.getByText('Skillset')).toBeInTheDocument()
    expect(screen.getByText('C#')).toBeInTheDocument()
    expect(screen.getByText('Python')).toBeInTheDocument()
    expect(screen.getByText('HTML/CSS/JavaScript')).toBeInTheDocument()
    expect(screen.getByText('Java')).toBeInTheDocument()
  })

  it('renders social profiles section', () => {
    render(<Profile />)
    
    expect(screen.getByText('Social Profiles')).toBeInTheDocument()
    const socialList = screen.getByRole('list')
    expect(socialList).toBeInTheDocument()
  })

  it('renders professional profile section', () => {
    render(<Profile />)
    
    expect(screen.getByText('Professional Profile')).toBeInTheDocument()
    expect(screen.getByText(/determined cloud software engineer/i)).toBeInTheDocument()
  })

  it('renders military veteran section', () => {
    render(<Profile />)
    
    expect(screen.getByText('Military Veteran')).toBeInTheDocument()
    expect(screen.getByText(/nine years of service/i)).toBeInTheDocument()
  })

  it('renders with custom props', () => {
    const customProps = {
      name: 'John Doe',
      overallSkills: 'Full Stack Developer',
      skillSet: { 'React': 4, 'Node.js': 3 },
      socialProfiles: { linkedin: 'https://linkedin.com/in/johndoe' }
    }
    
    render(<Profile {...customProps} />)
    
    expect(screen.getByText('John Doe')).toBeInTheDocument()
    expect(screen.getByText('Full Stack Developer')).toBeInTheDocument()
    expect(screen.getByText('React')).toBeInTheDocument()
    expect(screen.getByText('Node.js')).toBeInTheDocument()
  })

  it('renders skill ratings correctly', () => {
    const { container } = render(<Profile />)
    
    // Check that skill bars are rendered using container query
    const skillBars = container.querySelectorAll('.skill-bar')
    expect(skillBars.length).toBeGreaterThan(0)
    
    // Check that skill rate elements exist
    const skillRateElements = container.querySelectorAll('.skill-rate-on, .skill-rate-off')
    expect(skillRateElements.length).toBeGreaterThan(0)
  })

  it('has proper section structure', () => {
    render(<Profile />)
    
    const profileSection = screen.getByRole('region')
    expect(profileSection).toHaveAttribute('id', 'profile')
    expect(profileSection).toHaveClass('section')
  })
})
