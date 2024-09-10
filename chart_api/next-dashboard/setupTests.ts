Object.defineProperty(window.URL, 'createObjectURL', {
    value: jest.fn(),
    writable: true,
  });
  