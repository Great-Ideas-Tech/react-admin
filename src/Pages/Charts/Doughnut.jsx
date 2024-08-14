// src/components/DonutChart.js
import React from 'react';
import ApexCharts from 'react-apexcharts';

const DonutChart = () => {
  const options = {
    chart: {
      type: 'donut',
      height: 350,
    },
    labels: ['Product A', 'Product B', 'Product C', 'Product D'],
    title: {
      text: 'Donut Chart Example',
      align: 'left',
    },
    plotOptions: {
      pie: {
        donut: {
          size: '65%',
        },
      },
    },
    dataLabels: {
      enabled: true,
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 320,
          },
          legend: {
            position: 'bottom',
          },
        },
      },
    ],
  };

  const series = [44, 55, 13, 43];

  return (
    <div>
      <ApexCharts options={options} series={series} type="donut" height={350} />
    </div>
  );
};

export default DonutChart;
