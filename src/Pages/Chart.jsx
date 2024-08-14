import React from 'react'
import LineChart from './Charts/Linechart'
import BarChart from './Charts/Barchart'
import PieChart from './Charts/Piechart'
import DonutChart from './Charts/Doughnut'
import RadarChart from './Charts/Radarchart'
import BubbleChart from './Charts/Bubblechart'
import MultipleLineChart from './Charts/Multiplelinechart'
import MultipleBarChart from './Charts/Multiplebarchart'
import AreaChart from './Charts/Areachart'

const Chart = () => {
  return (
    <div className="container">
  <div className="page-inner">
    <h3 className="fw-bold mb-3">Chart.js</h3>
    <div className="page-category">
      Simple yet flexible JavaScript charting for designers &amp; developers.
      Please checkout their
      <a href="http://www.chartjs.org/" target="_blank">
        full documentation
      </a>
      .
    </div>
    <div className="row">
      <div className="col-md-6">
        <div className="card">
          <div className="card-header">
            <div className="card-title">Line Chart</div>
          </div>
          <div className="card-body">
            <div className="chart-container">
              <LineChart/>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-6">
        <div className="card">
          <div className="card-header">
            <div className="card-title">Bar Chart</div>
          </div>
          <div className="card-body">
            <div className="chart-container">
              <BarChart/>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-6">
        <div className="card">
          <div className="card-header">
            <div className="card-title">Pie Chart</div>
          </div>
          <div className="card-body">
            <div className="chart-container">
              <PieChart style={{ width: "50%", height: "50%" }} />
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-6">
        <div className="card">
          <div className="card-header">
            <div className="card-title">Doughnut Chart</div>
          </div>
          <div className="card-body">
            <div className="chart-container">
              < DonutChart
                style={{ width: "50%", height: "50%" }}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-6">
        <div className="card">
          <div className="card-header">
            <div className="card-title">Radar Chart</div>
          </div>
          <div className="card-body">
            <div className="chart-container">
              <RadarChart/>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-6">
        <div className="card">
          <div className="card-header">
            <div className="card-title">Bubble Chart</div>
          </div>
          <div className="card-body">
            <div className="chart-container">
              <BubbleChart />
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-6">
        <div className="card">
          <div className="card-header">
            <div className="card-title">Multiple Line Chart</div>
          </div>
          <div className="card-body">
            <div className="chart-container">
              <MultipleLineChart />
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-6">
        <div className="card">
          <div className="card-header">
            <div className="card-title">Multiple Bar Chart</div>
          </div>
          <div className="card-body">
            <div className="chart-container">
              <MultipleBarChart />
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-12">
        <div className="card">
          <div className="card-header">
            <div className="card-title">Chart with HTML Legends</div>
          </div>
          <div className="card-body">
            <div className="card-sub">
              Sometimes you need a very complex legend. In these cases, it makes
              sense to generate an HTML legend. Charts provide a
              generateLegend() method on their prototype that returns an HTML
              string for the legend.
            </div>
            <div className="chart-container">
              <AreaChart/>
            </div>
            <div id="myChartLegend" />
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}

export default Chart
