// src/components/LineChart.js
import React from 'react';
import ApexCharts from 'react-apexcharts';

const LineChart = () => {
  const options = {
    chart: {
      type: 'line',
      height: 350,
    },
    stroke: {
      curve: 'smooth',
    },
    title: {
      text: 'Line Chart Example',
      align: 'left',
    },
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    },
    yaxis: {
      title: {
        text: 'Values',
      },
    },
    tooltip: {
      shared: true,
      intersect: false,
    },
  };

  const series = [
    {
      name: 'Sales',
      data: [30, 40, 35, 50, 49, 60, 70],
    },
  ];

  return (
    <div>
      <ApexCharts options={options} series={series} type="line" height={350} />
    </div>
  );
};

export default LineChart;
