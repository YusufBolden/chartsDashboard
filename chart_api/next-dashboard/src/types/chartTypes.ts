export interface CandlestickData {
  data: {
    x: string;
    open: number;
    high: number;
    low: number;
    close: number;
  }[];
}

export interface LineChartData {
  labels: string[];
  data: number[];
}

export interface BarChartData {
  labels: string[];
  data: number[];
}

export interface PieChartData {
  labels: string[];
  data: number[];
}
