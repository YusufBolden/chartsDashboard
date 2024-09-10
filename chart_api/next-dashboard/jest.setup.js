// Mock the URL.createObjectURL method
global.URL.createObjectURL = jest.fn();

// Import custom matchers for React Testing Library
require("@testing-library/jest-dom/extend-expect");
// Mock fetch API with a basic implementation
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({}),
  })
);
