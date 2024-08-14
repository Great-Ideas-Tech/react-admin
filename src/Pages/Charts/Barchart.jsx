// src/components/BarChart.js
import React from 'react';
import ApexCharts from 'react-apexcharts';

const BarChart = () => {
  const options = {
    chart: {
      type: 'bar',
      height: 350,
    },
    plotOptions: {
      bar: {
        horizontal: false,
        endingShape: 'rounded',
      },
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    },
    yaxis: {
      title: {
        text: 'Values',
      },
    },
    fill: {
      opacity: 1,
    },
    title: {
      text: 'Bar Chart Example',
      align: 'left',
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
    {
      name: 'Revenue',
      data: [20, 30, 25, 40, 39, 50, 60],
    },
  ];

  return (
    <div>
      <ApexCharts options={options} series={series} type="bar" height={350} />
    </div>
  );
};

export default BarChart;
