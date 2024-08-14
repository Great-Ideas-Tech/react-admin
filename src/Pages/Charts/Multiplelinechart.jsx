// src/components/MultipleLineChart.js
import React from 'react';
import ApexCharts from 'react-apexcharts';

const MultipleLineChart = () => {
  const options = {
    chart: {
      type: 'line',
      height: 350,
    },
    title: {
      text: 'Multiple Line Chart Example',
      align: 'left',
    },
    stroke: {
      curve: 'smooth',
    },
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    },
    yaxis: {
      title: {
        text: 'Values',
      },
    },
    dataLabels: {
      enabled: false,
    },
    legend: {
      position: 'top',
      horizontalAlign: 'right',
    },
    tooltip: {
      shared: true,
      intersect: false,
    },
    colors: ['#FF5733', '#33C1FF', '#FF33A2'],
  };

  const series = [
    {
      name: 'Product A',
      data: [30, 40, 35, 50, 49, 60, 70],
    },
    {
      name: 'Product B',
      data: [20, 30, 25, 40, 39, 50, 60],
    },
    {
      name: 'Product C',
      data: [10, 20, 15, 30, 29, 40, 50],
    },
  ];

  return (
    <div>
      <ApexCharts options={options} series={series} type="line" height={350} />
    </div>
  );
};

export default MultipleLineChart;
