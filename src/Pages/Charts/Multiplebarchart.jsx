// src/components/MultipleBarChart.js
import React from 'react';
import ApexCharts from 'react-apexcharts';

const MultipleBarChart = () => {
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
      text: 'Multiple Bar Chart Example',
      align: 'left',
    },
    legend: {
      position: 'top',
      horizontalAlign: 'right',
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
    {
      name: 'Series C',
      data: [10, 20, 15, 30, 29, 40, 50],
    },
  ];

  return (
    <div>
      <ApexCharts options={options} series={series} type="bar" height={350} />
    </div>
  );
};

export default MultipleBarChart;
