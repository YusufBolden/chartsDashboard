# Charts Dashboard

# Overview

Charts Dashboard is a web application that displays various types of charts using Next.js for the frontend and Django for the backend. It visualizes data with Candlestick, Line, Bar, and Pie charts. This application integrates with APIs to fetch data for the charts and presents it in a user-friendly interface.

## Setup and Running the Application

## Prerequisites

    Node.js (v20.11.0 or later)
    Python (version 3.x recommended)
    npm (comes with Node.js)
    pip (Python package manager)

## Setting Up the Backend (Django)

    Clone the repository:

    bash

`gh repo clone YusufBolden/chartsDashboard
cd chart_api`

Navigate to the Django project directory:

bash

cd chart_api/django_backend

Create and activate a virtual environment:

bash

python -m venv venv
source venv/bin/activate # On Windows, use `venv\Scripts\activate`

Install the required Python packages:

bash

pip install -r requirements.txt

Apply database migrations:

bash

python manage.py migrate

Run the Django development server:

bash

    python manage.py runserver

    The Django backend should now be running at http://localhost:8000.

Setting Up the Frontend (Next.js)

    Navigate to the Next.js project directory:

    bash

cd chart_api/next_dashboard

Install the required Node.js packages:

bash

npm install

Run the Next.js development server:

bash

    npm run dev

    The Next.js frontend should now be running at http://localhost:3000.

Libraries and Tools Used

    Next.js (v14.2.8): Framework for server-rendered React applications.
    Django (v4.2.16): Backend framework for building the API.
    Chart.js (v4.4.4): JavaScript library for rendering charts.
    react-chartjs-2 (v5.2.0): React wrapper for Chart.js.
    chartjs-chart-financial (v0.2.1): Extension for Chart.js to support financial charts like Candlestick.
    TypeScript: For type safety and better development experience.
    Python Virtual Environment: To manage dependencies for the Django project.

Approach and Thought Process

    Frontend and Backend Separation:
        The application is divided into two main parts: the frontend (Next.js) and the backend (Django). This separation allows for a modular architecture and easier management of the development process.

    Chart Integration:
        Candlestick Chart: Implemented using chartjs-chart-financial to visualize financial data.
        Line, Bar, and Pie Charts: Implemented using react-chartjs-2 for easy integration with React components.

    API Integration:
        The frontend fetches data from the Django API using the fetch API. This data is then used to render the charts dynamically.

    TypeScript for Type Safety:
        TypeScript is used to provide type safety and better development experience, reducing potential runtime errors and improving code quality.

    Error Handling and Debugging:
        Added error handling for API calls to ensure that issues are logged and can be addressed without crashing the application.

This setup provides a robust and flexible platform for visualizing data through various types of charts, and the use of modern frameworks and libraries ensures a smooth development process.
