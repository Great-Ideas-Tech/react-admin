import React from 'react';
import ApexCharts from 'react-apexcharts';

const SplineLineChart = () => {
  // Chart options
  const options = {
    chart: {
      type: 'line',
      height: 350,
    },
    stroke: {
      curve: 'smooth', // This makes the line smooth
      width: 2, // Line width
    },
    title: {
      text: 'Spline Line Chart',
      align: 'left',
    },
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'], // X-axis labels
    },
    yaxis: {
      title: {
        text: 'Value',
      },
    },
    tooltip: {
      shared: true,
      intersect: false,
    },
  };

  // Chart series data
  const series = [
    {
      name: 'Series 1',
      data: [10, 20, 15, 30, 25, 35, 40], // Data points
    },
    {
      name: 'Series 2',
      data: [5, 15, 10, 20, 30, 25, 30], // Data points
    },
  ];

  return (
    <div>
      <ApexCharts
        options={options}
        series={series}
        type="line"
        height={350}
      />
    </div>
  );
};

export default SplineLineChart;
