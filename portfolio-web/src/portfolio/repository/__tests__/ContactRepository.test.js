import * as ContactRepository from '../ContactRepository'
import ApiRepository from '../ApiRepository'

// Mock ApiRepository
vi.mock('../ApiRepository', () => ({
  default: {
    post: vi.fn()
  }
}))

describe('ContactRepository', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  describe('sendMessage', () => {
    it('calls ApiRepository.post with correct parameters', async () => {
      const mockResponse = { isSuccess: true }
      ApiRepository.post.mockResolvedValue(mockResponse)

      const contactData = {
        name: 'John Doe',
        email: 'john@example.com',
        message: 'Test message'
      }

      const result = await ContactRepository.sendMessage(contactData)

      expect(ApiRepository.post).toHaveBeenCalledWith(
        expect.stringContaining('/contact'),
        contactData
      )
      expect(result).toEqual(mockResponse)
    })

    it('handles API errors', async () => {
      const error = new Error('API Error')
      ApiRepository.post.mockRejectedValue(error)

      const contactData = {
        name: 'John Doe',
        email: 'john@example.com',
        message: 'Test message'
      }

      await expect(ContactRepository.sendMessage(contactData)).rejects.toThrow('API Error')
    })

    it('validates required fields', async () => {
      const incompleteData = {
        name: 'John Doe'
        // missing email and message
      }

      // This should be handled by the component validation, but we can test the repository behavior
      await expect(ContactRepository.sendMessage(incompleteData)).rejects.toThrow()
    })
  })
})
