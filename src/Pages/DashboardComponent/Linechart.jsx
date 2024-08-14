// src/Components/LineChart.jsx
import React from 'react';
import ApexCharts from 'react-apexcharts';

const Linechart = () => {
  // Define the chart options
  const options = {
    chart: {
      type: 'line',
      height: 350,
    },
    stroke: {
      width: 2,
      curve: 'smooth',
    },
    title: {
      text: 'Simple Line Chart',
      align: 'left',
    },
    xaxis: {
        labels: {
            show: false, // Hide x-axis labels
          },
    },
    yaxis: {
      title: {
        text: 'Values',
      },
      show: false, 
    },
    tooltip: {
      shared: true,
      intersect: false,
    },
    markers: {
      size: 5,
    },
  };

  // Define the series data
  const series = [
    {
      name: 'Sales',
      data: [10, 20, 15, 30, 25, 40, 35, 50, 45, 60, 55, 70],
    },
  ];

  return (
   
    <div>
      <ApexCharts options={options} series={series} type="line" height={150} />
    </div>
  );
};

export default Linechart;
