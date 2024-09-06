# Next.js Application with Django API Integration

Notes:

1. Since this is a small project, the choice was made to combine actions, selectors, and types within the slices/ folder itself, as Redux Toolkit encourages a more modular approach. In a larger project, with many slices and complex logic, keeping separate folders for selectors and types makes the codebase more scalable and maintainable.

next-dashboard/
├── redux/
│ ├── store.ts # Redux store configuration
│ ├── slices/
│ │ ├── chartSlice.ts # Slice for chart data (includes actions, reducers, and types)
│ │ ├── userSlice.ts # Another slice (with its own actions, reducers, and types)
