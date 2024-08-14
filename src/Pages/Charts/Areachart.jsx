// src/components/AreaChart.js
import React from 'react';
import ApexCharts from 'react-apexcharts';

const AreaChart = () => {
  const options = {
    chart: {
      type: 'area',
      height: 350,
    },
    title: {
      text: 'Area Chart Example',
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
    fill: {
      type: 'gradient',
    },
    dataLabels: {
      enabled: false,
    },
    tooltip: {
      shared: true,
      intersect: false,
    },
  };

  const series = [
    {
      name: 'Series A',
      data: [30, 40, 35, 50, 49, 60, 70],
    },
    {
      name: 'Series B',
      data: [20, 30, 25, 40, 49, 50, 60],
    },
  ];

  return (
    <div>
      <ApexCharts options={options} series={series} type="area" height={350} />
    </div>
  );
};

export default AreaChart;
