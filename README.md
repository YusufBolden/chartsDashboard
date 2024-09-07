### Next.js Application with Django API Integration

# Web Application with Next.js, Django API, Docker, and Charts

## Overview

This is a web application that displays a dashboard with multiple chart types (Candlestick, Line, Bar, Pie). The data is fetched from a Django API and displayed in the frontend built with Next.js.

## Tech Stack

- **Frontend**: Next.js with TypeScript
- **Backend**: Django REST Framework
- **State Management**: Redux
- **Charts**: Chart.js with React wrapper (`react-chartjs-2`)
- **Containerization**: Docker

## How to Set Up

1. **Clone the repository**:

   ```bash
   gh repo clone YusufBolden/chartsDashboard
   cd chart_api
   ```

Notes:

1. Since this is a small project, the choice was made to combine actions, selectors, and types within the slices/ folder itself, as Redux Toolkit encourages a more modular approach. In a larger project, with many slices and complex logic, keeping separate folders for selectors and types makes the codebase more scalable and maintainable.

2. Should You Use the src Directory?

Using a src directory is optional but can be beneficial:

    Better Organization: Keeps source code organized away from configuration files and other non-code assets.
    Scalability: Makes it easier to manage larger projects.

If you prefer a flatter structure or have a smaller project, you can keep your code in the root directory and adjust accordingly. The choice depends on your project’s size and complexity.
