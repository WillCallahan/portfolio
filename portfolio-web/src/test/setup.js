import '@testing-library/jest-dom'

// Mock jQuery and other global dependencies
global.$ = global.jQuery = {
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
  ready: (fn) => fn(),
  // Mock jQuery selector function
  default: (selector) => ({
    waypoint: vi.fn(),
    each: vi.fn(),
    countTo: vi.fn(),
    addClass: vi.fn(),
    removeClass: vi.fn(),
    height: vi.fn(() => 100),
    scrollTop: vi.fn(() => 0),
    width: vi.fn(() => 1024),
    on: vi.fn(),
    off: vi.fn()
  })
}

// Make $ function work as selector
Object.assign(global.$, global.$.default)

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
