# Charts Dashboard

This project is a web application that visualizes different types of charts, including Line, Bar, Pie, and Candlestick charts, using Plotly in a React/Next.js frontend and Django backend. The data is hardcoded for demonstration purposes and is fetched through a Django API.

## Table of Contents

- [Installation](#installation)
- [Running the Application](#running-the-application)
- [Testing](#testing)
- [Libraries and Tools](#libraries-and-tools)
- [Project Structure](#project-structure)
- [Approach](#approach)
- [Future Improvements](#future-improvements)

## Installation

To set up the project, follow these steps:

### Backend (Django)

1. **Clone the repository**:

   ```bash
   gh repo clone YusufBolden/chartsDashboard
   cd chartsDashboard/chart_api
   ```

2. **Create a virtual environment and activate it**:

   ```bash
   python -m venv env
   source env/bin/activate
   ```

3. **Install dependencies**:

   ```bash
   pip install -r requirements.txt
   ```

4. **Run database migrations**:

   ```bash
   python manage.py migrate
   ```

5. **Start the Django server**:
   ```bash
   python manage.py runserver
   ```

### Frontend (Next.js)

1. **Navigate to the `next-dashboard` directory**:

   ```bash
   cd ../next-dashboard
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```

## Running the Application

After starting both the Django and Next.js servers, you can access the application by visiting [http://localhost:3000](http://localhost:3000) in your browser.

## Building the Application

To build the Next.js application for production, use the following command:

`npm run build`

This command generates an optimized production build in the .next directory.

## Starting the Production Server

To start the production server after building the application, use:

`npm start`

This command starts the server with the production build.

## Testing

### Running Tests

To run tests for the application, use the following command:

```bash
npm test
```

### Testing Chart Components

This section outlines the libraries and tools used to test the chart components and the project structure.

#### Libraries for Testing

- **Jest**: For running unit tests.
- **@testing-library/react**: For testing React components.

#### Libraries and Tools

**Backend (Django)**

- **Django 4.2.16**: The backend framework for building the API to serve chart data.
- **Django REST Framework**: Used to create the API for fetching chart data.

**Frontend (Next.js & React)**

- **Next.js**: A React framework used for building the frontend of the application.
- **React**: JavaScript library for building user interfaces.
- **react-plotly.js**: A wrapper around Plotly.js for rendering charts in React.
- **Plotly.js**: A powerful JavaScript charting library used to render the charts.

**Styling**

- **Tailwind CSS**: A utility-first CSS framework used for styling the application.

**State Management**

- **Redux**: For managing application state, especially for handling chart data.

#### Testing

- **Jest**: For testing the React components and verifying they render correctly.
- **@testing-library/react**: For testing component interaction and rendering.

#### Project Structure

The project is divided into two main parts:

**Backend (Django)**

- Provides hardcoded chart data via a REST API.
  - `chart_api/urls.py`: Configures the URL routing for the API.
  - `charts/views.py`: Contains views that provide chart data for the frontend.
  - `tests.py`: Django tests for the backend views.

**Frontend (Next.js)**

- Renders the charts fetched from the backend.
  - `components/`: Contains the individual chart components (`BarChart.tsx`, `PieChart.tsx`, etc.).
  - `pages/`: Contains the main pages, including the chart dashboard (`DashboardPage.tsx`).
  - `redux/`: Manages state with Redux for API integration and chart data handling.

#### Approach and Thought Process

- **Component Design**: The chart components were built in isolation, following the principles of separation of concerns. Each chart component is reusable and expects data as props.
- **API Integration**: A Django backend was chosen to simulate serving chart data via a REST API. Even though the data is hardcoded, the structure allows for easy extension to use real data.
- **Testing**: Focus was on ensuring each chart component renders without crashing and handles mock data appropriately. React Testing Library was used for component testing, ensuring the charts render in the DOM as expected.
- **Redux for State Management**: Redux was used for handling chart data and API requests, facilitating easier management of global state across the application.
- **Plotly for Charts**: This was selected for its versatility in rendering complex financial charts such as a candlestick chart. It integrates smoothly with React for dynamic data visualization.

**Future Improvements**

- **Real-time Data**: Integrate real-time financial or statistical data for charts using an external API.
- **Enhanced Testing**: Increase test coverage by adding more tests for edge cases and error handling.
- **UI Improvements**: Refine the UI for better usability and responsiveness.
- **Authentication**: Implement user authentication for personalized dashboards.
