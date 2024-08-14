// DiscreteChart.js
import React from 'react';
import ApexCharts from 'react-apexcharts';

const DiscreteChart = () => {
  // Options for the Discrete Chart
  const options = {
    chart: {
      id: 'discrete-chart',
      type: 'line',
      toolbar: {
        show: true
      }
    },
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
      title: {
        text: 'Months'
      }
    },
    yaxis: {
      title: {
        text: 'Values'
      }
    },
    markers: {
      size: 6,
      colors: ['#FFA500'],
      strokeColor: '#FF4500',
      strokeWidth: 3,
      hover: {
        size: 8,
        sizeOffset: 3
      }
    },
    plotOptions: {
      line: {
        curve: 'smooth'
      }
    },
    tooltip: {
      y: {
        formatter: (val) => `${val}`
      }
    },
    grid: {
      show: true,
      borderColor: '#e0e0e0'
    }
  };

  // Data for the Discrete Chart
  const series = [
    {
      name: 'Sales',
      data: [30, 40, 35, 50, 49, 60, 70] // Data points
    }
  ];

  return (
    <div className="chart-container">
      <ApexCharts
        options={options}
        series={series}
        type="line"
        height={350}
      />
    </div>
  );
};

export default DiscreteChart;
