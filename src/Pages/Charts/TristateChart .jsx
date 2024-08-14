// TristateChart.js
import React from 'react';
import ApexCharts from 'react-apexcharts';

const TristateChart = () => {
  // Options for the Tristate Chart
  const options = {
    chart: {
      id: 'tristate-chart',
      type: 'bar',
      toolbar: {
        show: true
      }
    },
    plotOptions: {
      bar: {
        horizontal: true,
        barHeight: '70%',
        dataLabels: {
          position: 'top'
        }
      }
    },
    colors: ['#00E396', '#FF4560', '#775DD0'], // Colors for positive, negative, and neutral states
    xaxis: {
      categories: ['Category 1', 'Category 2', 'Category 3'],
      labels: {
        style: {
          colors: '#9aa0ac',
          fontSize: '12px'
        }
      }
    },
    yaxis: {
      labels: {
        style: {
          colors: '#9aa0ac',
          fontSize: '12px'
        }
      }
    },
    dataLabels: {
      enabled: true
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

  // Data for the Tristate Chart
  const series = [
    {
      name: 'Positive',
      data: [1, 0, 0] // Data for positive state
    },
    {
      name: 'Negative',
      data: [0, 1, 0] // Data for negative state
    },
    {
      name: 'Neutral',
      data: [0, 0, 1] // Data for neutral state
    }
  ];

  return (
    <div className="chart-container">
      <ApexCharts
        options={options}
        series={series}
        type="bar"
        height={350}
      />
    </div>
  );
};

export default TristateChart;
