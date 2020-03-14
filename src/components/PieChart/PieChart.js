import React from 'react';

import Chart from 'react-google-charts';

const pieOptions = {
  slices: [
    {
      color: '#B4D9FF'
    },
    {
      color: '#3876F3'
    },
    {
      color: '#00A3FF'
    },
    {
      color: '#5452F6'
    }
  ],
  chartArea: {
    left: 0,
    top: 0,
    width: '100%',
    height: '80%'
  }
};

const PieChart = () => {
  return (
    <Chart
      chartType="PieChart"
      data={[
        ['Activities', 'Percentage'],
        ['Meowing', 25],
        ['Hunting', 7],
        ['Sleeping', 55],
        ['Eating', 13]
      ]}
      options={pieOptions}
      graph_id="PieChart"
      width={'200px'}
      height={'200px'}
    />
  );
};

export default PieChart;
