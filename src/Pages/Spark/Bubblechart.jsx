// src/components/BubbleChart.js
import React from 'react';
import ApexCharts from 'react-apexcharts';

const BubbleChart = () => {
  const options = {
    chart: {
      type: 'bubble',
      height: 350,
    },
    xaxis: {
      labels: {
        show: false, // Hide x-axis labels
      },
      title: {
        text: '', // Remove x-axis title
      },
      axisBorder: {
        show: false, // Hide x-axis border
      },
      axisTicks: {
        show: false, // Hide x-axis ticks
      },
    },
    yaxis: {
      labels: {
        show: false, // Hide y-axis labels
      },
      title: {
        text: '', // Remove y-axis title
      },
      axisBorder: {
        show: false, // Hide y-axis border
      },
      axisTicks: {
        show: false, // Hide y-axis ticks
      },
    },
    grid: {
      show: false, // Hide grid lines
    },
    fill: {
      type: 'gradient',
    },
    dataLabels: {
      enabled: false, // Disable data labels
    },
    legend: {
      show: false, // Hide legend
    },
    tooltip: {
      enabled: true, // Enable tooltips
    },
  };

  const series = [
    {
      name: 'Series 1',
      data: [
        [10, 30, 10],
        [20, 50, 15],
        [30, 60, 25],
        [40, 70, 30],
        [50, 80, 35],
      ],
    },
    {
      name: 'Series 2',
      data: [
        [15, 25, 20],
        [25, 45, 25],
        [35, 55, 30],
        [45, 65, 35],
        [55, 75, 40],
      ],
    },
  ];

  return (
    <div>
      <ApexCharts options={options} series={series} type="bubble" height={350} />
    </div>
  );
};

export default BubbleChart;
