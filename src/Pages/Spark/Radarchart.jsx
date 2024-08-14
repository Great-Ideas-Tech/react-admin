// src/components/RadarChart.js
import React from 'react';
import ApexCharts from 'react-apexcharts';

const RadarChart = () => {
  const options = {
    chart: {
      type: 'radar',
      height: 350,
    },
    title: {
      text: '', // Remove the chart title
    },
    xaxis: {
      categories: ['Speed', 'Durability', 'Comfort', 'Safety', 'Efficiency'],
      labels: {
        show: false, // Hide x-axis labels
      },
      axisBorder: {
        show: false, // Hide x-axis border
      },
      axisTicks: {
        show: false, // Hide x-axis ticks
      },
    },
    yaxis: {
      max: 100,
      labels: {
        show: false, // Hide y-axis labels
      },
      axisBorder: {
        show: false, // Hide y-axis border
      },
      axisTicks: {
        show: false, // Hide y-axis ticks
      },
    },
    stroke: {
      width: 2,
    },
    markers: {
      size: 4,
      hover: {
        size: 6,
      },
    },
    fill: {
      opacity: 0.2,
    },
    legend: {
      show: false, // Hide the legend
    },
    grid: {
      show: false, // Hide grid lines
    },
  };

  const series = [
    {
      name: 'Product A',
      data: [80, 70, 90, 85, 95],
    },
    {
      name: 'Product B',
      data: [60, 80, 70, 90, 85],
    },
  ];

  return (
    <div>
      <ApexCharts options={options} series={series} type="radar" height={350} />
    </div>
  );
};

export default RadarChart;
