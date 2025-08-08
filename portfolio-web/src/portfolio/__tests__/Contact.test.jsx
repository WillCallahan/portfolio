import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Contact from '../Contact'

// Mock the ContactRepository
vi.mock('../repository/ContactRepository', () => ({
  default: {
    sendMessage: vi.fn()
  }
}))

describe('Contact Component', () => {
  let mockContactRepository

  beforeEach(() => {
    vi.clearAllMocks()
    mockContactRepository = require('../repository/ContactRepository').default
  })

  it('renders contact form with all required fields', () => {
    render(<Contact />)
    
    expect(screen.getByLabelText(/name/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/message/i)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /send message/i })).toBeInTheDocument()
  })

  it('displays validation errors for empty fields', async () => {
    const user = userEvent.setup()
    render(<Contact />)
    
    const submitButton = screen.getByRole('button', { name: /send message/i })
    await user.click(submitButton)
    
    await waitFor(() => {
      expect(screen.getByText(/name is required/i)).toBeInTheDocument()
      expect(screen.getByText(/email is required/i)).toBeInTheDocument()
      expect(screen.getByText(/message is required/i)).toBeInTheDocument()
    })
  })

  it('validates email format', async () => {
    const user = userEvent.setup()
    render(<Contact />)
    
    const emailInput = screen.getByLabelText(/email/i)
    await user.type(emailInput, 'invalid-email')
    
    const submitButton = screen.getByRole('button', { name: /send message/i })
    await user.click(submitButton)
    
    await waitFor(() => {
      expect(screen.getByText(/please enter a valid email/i)).toBeInTheDocument()
    })
  })

  it('submits form with valid data', async () => {
    const user = userEvent.setup()
    mockContactRepository.sendMessage.mockResolvedValue({ isSuccess: true })
    
    render(<Contact />)
    
    await user.type(screen.getByLabelText(/name/i), 'John Doe')
    await user.type(screen.getByLabelText(/email/i), 'john@example.com')
    await user.type(screen.getByLabelText(/message/i), 'This is a test message with enough words')
    
    const submitButton = screen.getByRole('button', { name: /send message/i })
    await user.click(submitButton)
    
    await waitFor(() => {
      expect(mockContactRepository.sendMessage).toHaveBeenCalledWith({
        name: 'John Doe',
        email: 'john@example.com',
        message: 'This is a test message with enough words'
      })
    })
  })

  it('displays success message after successful submission', async () => {
    const user = userEvent.setup()
    mockContactRepository.sendMessage.mockResolvedValue({ isSuccess: true })
    
    render(<Contact />)
    
    await user.type(screen.getByLabelText(/name/i), 'John Doe')
    await user.type(screen.getByLabelText(/email/i), 'john@example.com')
    await user.type(screen.getByLabelText(/message/i), 'This is a test message')
    
    const submitButton = screen.getByRole('button', { name: /send message/i })
    await user.click(submitButton)
    
    await waitFor(() => {
      expect(screen.getByText(/message sent successfully/i)).toBeInTheDocument()
    })
  })

  it('displays error message on submission failure', async () => {
    const user = userEvent.setup()
    mockContactRepository.sendMessage.mockRejectedValue(new Error('Network error'))
    
    render(<Contact />)
    
    await user.type(screen.getByLabelText(/name/i), 'John Doe')
    await user.type(screen.getByLabelText(/email/i), 'john@example.com')
    await user.type(screen.getByLabelText(/message/i), 'This is a test message')
    
    const submitButton = screen.getByRole('button', { name: /send message/i })
    await user.click(submitButton)
    
    await waitFor(() => {
      expect(screen.getByText(/failed to send message/i)).toBeInTheDocument()
    })
  })
})
