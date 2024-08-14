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
      text: '', // Remove the chart title
    },
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
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
    tooltip: {
      shared: true,
      intersect: false,
    },
    grid: {
      show: false, // Hide grid lines
    },
    dataLabels: {
      enabled: false, // Disable data labels
    },
    legend: {
      show: false, // Hide the legend
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
