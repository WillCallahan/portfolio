import '@testing-library/jest-dom'

// Mock waypoints library
vi.mock('waypoints/lib/jquery.waypoints.js', () => ({}))

// Mock jQuery and other global dependencies
const mockJQueryElement = {
  waypoint: vi.fn((callback) => {
    // Simulate waypoint callback execution
    if (typeof callback === 'function') {
      callback.call({ destroy: vi.fn() })
    }
    return mockJQueryElement
  }),
  each: vi.fn((callback) => {
    // Simulate each callback
    if (typeof callback === 'function') {
      callback.call(mockJQueryElement, 0, mockJQueryElement)
    }
    return mockJQueryElement
  }),
  countTo: vi.fn(() => mockJQueryElement),
  delay: vi.fn(() => mockJQueryElement),
  attr: vi.fn(() => '100'),
  addClass: vi.fn(() => mockJQueryElement),
  removeClass: vi.fn(() => mockJQueryElement),
  height: vi.fn(() => 100),
  scrollTop: vi.fn(() => 0),
  width: vi.fn(() => 1024),
  on: vi.fn(() => mockJQueryElement),
  off: vi.fn(() => mockJQueryElement)
}

global.$ = global.jQuery = vi.fn(() => mockJQueryElement)

// Add static methods to jQuery
Object.assign(global.$, {
  fn: {
    extend: () => {},
    backstretch: () => {},
    countTo: () => {},
    magnificPopup: () => {},
    owlCarousel: () => {},
    slick: () => {},
    waypoint: () => {},
    simpleTextRotator: () => {}
  },
  extend: () => {},
  each: () => {},
  ready: (fn) => fn()
})

// Mock window.WOW
global.WOW = class {
  init() {}
}

// Mock AOS
global.AOS = {
  init: () => {},
  refresh: () => {}
}

// Mock window methods
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: vi.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(),
    removeListener: vi.fn(),
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  })),
})
