# Web Application with Next.js, Django API, Docker, and Charts

## Overview

A web application for visualizing various types of chart data using Django and Next.js. This project is a web application designed to display various types of chart data, including Candlestick, Line Chart, Bar Chart, and Pie Chart. The application uses Django for the backend to serve data and Next.js for the frontend to render and display the charts.

### Table of Contents

    Project Overview
    Setup Instructions
    Libraries and Tools
    Approach and Thought Process

Project Overview

Setup Instructions
Backend (Django)

    Clone the Repository:

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

Approach and Thought Process

Backend Design:
Developed Django views to provide hardcoded data in JSON format for different chart types.
Defined URL patterns in Django to expose the data through API endpoints.
Created test cases to ensure that the API endpoints are functioning correctly and returning the expected data.

Frontend Design:
Used Next.js to build the frontend application, leveraging server-side rendering for better performance.
Integrated React Chart.js 2 to visualize data in various chart formats.
Implemented API calls from the frontend to fetch data from the Django backend and display it in the charts.

Testing and Validation:
Validated API responses using Django’s testing framework to ensure the endpoints return the correct status codes and data.
Tested the frontend integration to confirm that data is accurately fetched and rendered in the charts.
