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
      text: 'Radar Chart Example',
      align: 'left',
    },
    xaxis: {
      categories: ['Speed', 'Durability', 'Comfort', 'Safety', 'Efficiency'],
    },
    yaxis: {
      max: 100,
    },
    stroke: {
      width: 2,
    },
    markers: {
      size: 4,
    },
    fill: {
      opacity: 0.2,
    },
    legend: {
      position: 'top',
      horizontalAlign: 'center',
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
