import ContactRepository from '../ContactRepository'

// Mock ApiRepository as a proper class
vi.mock('../ApiRepository', () => ({
  default: class MockApiRepository {
    constructor(endpointUrl) {
      this.endpointUrl = endpointUrl
    }
    
    getUrl() {
      return `api/${this.endpointUrl}`
    }
    
    save() { return Promise.resolve() }
    getAll() { return Promise.resolve() }
    getOne() { return Promise.resolve() }
    update() { return Promise.resolve() }
    remove() { return Promise.resolve() }
    
    static post = vi.fn()
    static get = vi.fn()
  }
}))

describe('ContactRepository', () => {
  let contactRepo

  beforeEach(() => {
    vi.clearAllMocks()
    contactRepo = new ContactRepository()
  })

  describe('constructor', () => {
    it('creates instance with correct endpoint', () => {
      expect(contactRepo).toBeInstanceOf(ContactRepository)
      expect(contactRepo.endpointUrl).toBe('contacts')
    })
  })

  describe('inheritance', () => {
    it('inherits from ApiRepository', () => {
      expect(contactRepo.getUrl()).toBe('api/contacts')
    })

    it('has access to parent methods', () => {
      expect(typeof contactRepo.save).toBe('function')
      expect(typeof contactRepo.getAll).toBe('function')
      expect(typeof contactRepo.getOne).toBe('function')
      expect(typeof contactRepo.update).toBe('function')
      expect(typeof contactRepo.remove).toBe('function')
    })
  })
})
