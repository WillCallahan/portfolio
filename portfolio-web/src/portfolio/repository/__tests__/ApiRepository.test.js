import ApiRepository from '../ApiRepository'

// Mock fetch globally
global.fetch = vi.fn()

describe('ApiRepository', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  describe('post', () => {
    it('makes POST request with correct parameters', async () => {
      const mockResponse = { success: true }
      fetch.mockResolvedValue({
        ok: true,
        json: () => Promise.resolve(mockResponse)
      })

      const url = 'https://api.example.com/test'
      const data = { name: 'test', email: 'test@example.com' }

      const result = await ApiRepository.post(url, data)

      expect(fetch).toHaveBeenCalledWith(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
      })

      expect(result).toEqual(mockResponse)
    })

    it('handles network errors', async () => {
      fetch.mockRejectedValue(new Error('Network error'))

      const url = 'https://api.example.com/test'
      const data = { name: 'test' }

      await expect(ApiRepository.post(url, data)).rejects.toThrow('Network error')
    })

    it('handles HTTP error responses', async () => {
      fetch.mockResolvedValue({
        ok: false,
        status: 500,
        statusText: 'Internal Server Error'
      })

      const url = 'https://api.example.com/test'
      const data = { name: 'test' }

      await expect(ApiRepository.post(url, data)).rejects.toThrow('HTTP error! status: 500')
    })

    it('handles JSON parsing errors', async () => {
      fetch.mockResolvedValue({
        ok: true,
        json: () => Promise.reject(new Error('Invalid JSON'))
      })

      const url = 'https://api.example.com/test'
      const data = { name: 'test' }

      await expect(ApiRepository.post(url, data)).rejects.toThrow('Invalid JSON')
    })
  })

  describe('get', () => {
    it('makes GET request with correct parameters', async () => {
      const mockResponse = { data: 'test' }
      fetch.mockResolvedValue({
        ok: true,
        json: () => Promise.resolve(mockResponse)
      })

      const url = 'https://api.example.com/test'
      const result = await ApiRepository.get(url)

      expect(fetch).toHaveBeenCalledWith(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        }
      })

      expect(result).toEqual(mockResponse)
    })
  })
})
