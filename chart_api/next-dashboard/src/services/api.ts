// src/services/api.ts
import axios from 'axios';

const apiUrl = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:8000/api';

export const fetchCandlestickData = async () => {
  const response = await axios.get(`${apiUrl}/candlestick-data/`);
  return response.data;
};

export const fetchLineChartData = async () => {
  const response = await axios.get(`${apiUrl}/line-chart-data/`);
  return response.data;
};

export const fetchBarChartData = async () => {
  const response = await axios.get(`${apiUrl}/bar-chart-data/`);
  return response.data;
};

export const fetchPieChartData = async () => {
  const response = await axios.get(`${apiUrl}/pie-chart-data/`);
  return response.data;
};
