import React from 'react';
import ApexCharts from 'react-apexcharts';

const SalesChart = () => {
  const options = {
    chart: {
      id: 'minimal-line-chart',
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: false,
      },
    },
    xaxis: {
      categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
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
      axisBorder: {
        show: false, // Hide y-axis border
      },
      axisTicks: {
        show: false, // Hide y-axis ticks
      },
    },
    stroke: {
      curve: 'smooth',
      width: 2, // Line width
    },
    dataLabels: {
      enabled: false, // Hide data labels
    },
    title: {
      text: '',
    },
    colors: ['#FF5733'], // Line color
    grid: {
      show: false, // Hide grid lines
    },
    tooltip: {
      enabled: true, // Enable tooltips
    },
    markers: {
      size: 4, // Show markers on the line
    },
  };

  const series = [
    {
      name: 'Sales',
      data: [10, 20, 15, 30, 25, 35, 20],
    },
  ];

  return (
    <div className="w-auto h-auto">
      <ApexCharts 
        options={options} 
        series={series} 
        type="line" 
        height="100%" 
        width="100%" 
      />
    </div>
  );
};

export default SalesChart;
