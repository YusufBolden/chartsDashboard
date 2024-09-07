import axios from 'axios';

const API_URL = 'http://127.0.0.1:8000/api';

export const fetchCandlestickData = () => axios.get(`${API_URL}/candlestick-data/`);
export const fetchLineChartData = () => axios.get(`${API_URL}/line-chart-data/`);
export const fetchBarChartData = () => axios.get(`${API_URL}/bar-chart-data/`);
export const fetchPieChartData = () => axios.get(`${API_URL}/pie-chart-data/`);
