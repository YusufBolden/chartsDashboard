declare module 'react-plotly.js' {
    import * as React from 'react';
    import * as Plotly from 'plotly.js';
  
    interface PlotProps extends React.HTMLProps<HTMLDivElement> {
      data: Plotly.Data[];
      layout?: Partial<Plotly.Layout>;
      config?: Partial<Plotly.Config>;
    }
  
    export default class Plot extends React.Component<PlotProps> {}
  }
  