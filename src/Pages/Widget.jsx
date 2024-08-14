import React from 'react'

const Widget = () => {
  return (
    <div className="container">
  <div className="page-inner">
    {/* Card */}
    <h3 className="fw-bold mb-3">Card</h3>
    <div className="row">
      <div className="col-sm-6 col-md-3">
        <div className="card card-stats card-primary card-round">
          <div className="card-body">
            <div className="row">
              <div className="col-5">
                <div className="icon-big text-center">
                  <i className="fas fa-users" />
                </div>
              </div>
              <div className="col-7 col-stats">
                <div className="numbers">
                  <p className="card-category">Visitors</p>
                  <h4 className="card-title">1,294</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-sm-6 col-md-3">
        <div className="card card-stats card-info card-round">
          <div className="card-body">
            <div className="row">
              <div className="col-5">
                <div className="icon-big text-center">
                  <i className="fas fa-user-check" />
                </div>
              </div>
              <div className="col-7 col-stats">
                <div className="numbers">
                  <p className="card-category">Subscribers</p>
                  <h4 className="card-title">1303</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-sm-6 col-md-3">
        <div className="card card-stats card-success card-round">
          <div className="card-body">
            <div className="row">
              <div className="col-5">
                <div className="icon-big text-center">
                  <i className="fas fa-chart-pie" />
                </div>
              </div>
              <div className="col-7 col-stats">
                <div className="numbers">
                  <p className="card-category">Sales</p>
                  <h4 className="card-title">$ 1,345</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-sm-6 col-md-3">
        <div className="card card-stats card-secondary card-round">
          <div className="card-body">
            <div className="row">
              <div className="col-5">
                <div className="icon-big text-center">
                  <i className="far fa-check-circle" />
                </div>
              </div>
              <div className="col-7 col-stats">
                <div className="numbers">
                  <p className="card-category">Order</p>
                  <h4 className="card-title">576</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Card With Icon States Color */}
    <div className="row">
      <div className="col-sm-6 col-md-3">
        <div className="card card-stats card-round">
          <div className="card-body">
            <div className="row">
              <div className="col-5">
                <div className="icon-big text-center">
                  <i className="icon-pie-chart text-warning" />
                </div>
              </div>
              <div className="col-7 col-stats">
                <div className="numbers">
                  <p className="card-category">Number</p>
                  <h4 className="card-title">150GB</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-sm-6 col-md-3">
        <div className="card card-stats card-round">
          <div className="card-body">
            <div className="row">
              <div className="col-5">
                <div className="icon-big text-center">
                  <i className="icon-wallet text-success" />
                </div>
              </div>
              <div className="col-7 col-stats">
                <div className="numbers">
                  <p className="card-category">Revenue</p>
                  <h4 className="card-title">$ 1,345</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-sm-6 col-md-3">
        <div className="card card-stats card-round">
          <div className="card-body">
            <div className="row">
              <div className="col-5">
                <div className="icon-big text-center">
                  <i className="icon-close text-danger" />
                </div>
              </div>
              <div className="col-7 col-stats">
                <div className="numbers">
                  <p className="card-category">Errors</p>
                  <h4 className="card-title">23</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-sm-6 col-md-3">
        <div className="card card-stats card-round">
          <div className="card-body">
            <div className="row">
              <div className="col-5">
                <div className="icon-big text-center">
                  <i className="icon-social-twitter text-primary" />
                </div>
              </div>
              <div className="col-7 col-stats">
                <div className="numbers">
                  <p className="card-category">Followers</p>
                  <h4 className="card-title">+45K</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Card With Icon States Background */}
    <div className="row">
      <div className="col-sm-6 col-md-3">
        <div className="card card-stats card-round">
          <div className="card-body">
            <div className="row align-items-center">
              <div className="col-icon">
                <div className="icon-big text-center icon-primary bubble-shadow-small">
                  <i className="fas fa-users" />
                </div>
              </div>
              <div className="col col-stats ms-3 ms-sm-0">
                <div className="numbers">
                  <p className="card-category">Visitors</p>
                  <h4 className="card-title">1,294</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-sm-6 col-md-3">
        <div className="card card-stats card-round">
          <div className="card-body">
            <div className="row align-items-center">
              <div className="col-icon">
                <div className="icon-big text-center icon-info bubble-shadow-small">
                  <i className="fas fa-user-check" />
                </div>
              </div>
              <div className="col col-stats ms-3 ms-sm-0">
                <div className="numbers">
                  <p className="card-category">Subscribers</p>
                  <h4 className="card-title">1303</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-sm-6 col-md-3">
        <div className="card card-stats card-round">
          <div className="card-body">
            <div className="row align-items-center">
              <div className="col-icon">
                <div className="icon-big text-center icon-success bubble-shadow-small">
                  <i className="fas fa-luggage-cart" />
                </div>
              </div>
              <div className="col col-stats ms-3 ms-sm-0">
                <div className="numbers">
                  <p className="card-category">Sales</p>
                  <h4 className="card-title">$ 1,345</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-sm-6 col-md-3">
        <div className="card card-stats card-round">
          <div className="card-body">
            <div className="row align-items-center">
              <div className="col-icon">
                <div className="icon-big text-center icon-secondary bubble-shadow-small">
                  <i className="far fa-check-circle" />
                </div>
              </div>
              <div className="col col-stats ms-3 ms-sm-0">
                <div className="numbers">
                  <p className="card-category">Order</p>
                  <h4 className="card-title">576</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Row Card No Padding */}
    <div className="row row-card-no-pd">
      <div className="col-sm-6 col-md-3">
        <div className="card card-stats card-round">
          <div className="card-body">
            <div className="row">
              <div className="col-5">
                <div className="icon-big text-center">
                  <i className="icon-pie-chart text-warning" />
                </div>
              </div>
              <div className="col-7 col-stats">
                <div className="numbers">
                  <p className="card-category">Number</p>
                  <h4 className="card-title">150GB</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-sm-6 col-md-3">
        <div className="card card-stats card-round">
          <div className="card-body">
            <div className="row">
              <div className="col-5">
                <div className="icon-big text-center">
                  <i className="icon-wallet text-success" />
                </div>
              </div>
              <div className="col-7 col-stats">
                <div className="numbers">
                  <p className="card-category">Revenue</p>
                  <h4 className="card-title">$ 1,345</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-sm-6 col-md-3">
        <div className="card card-stats card-round">
          <div className="card-body">
            <div className="row">
              <div className="col-5">
                <div className="icon-big text-center">
                  <i className="icon-close text-danger" />
                </div>
              </div>
              <div className="col-7 col-stats">
                <div className="numbers">
                  <p className="card-category">Errors</p>
                  <h4 className="card-title">23</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-sm-6 col-md-3">
        <div className="card card-stats card-round">
          <div className="card-body">
            <div className="row">
              <div className="col-5">
                <div className="icon-big text-center">
                  <i className="icon-social-twitter text-primary" />
                </div>
              </div>
              <div className="col-7 col-stats">
                <div className="numbers">
                  <p className="card-category">Followers</p>
                  <h4 className="card-title">+45K</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-md-4">
        <div className="card card-secondary">
          <div className="card-body skew-shadow">
            <h1>3,072</h1>
            <h5 className="op-8">Total conversations</h5>
            <div className="pull-right">
              <h3 className="fw-bold op-8">88%</h3>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="card card-secondary bg-secondary-gradient">
          <div className="card-body bubble-shadow">
            <h1>188</h1>
            <h5 className="op-8">Total Sales</h5>
            <div className="pull-right">
              <h3 className="fw-bold op-8">25%</h3>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="card card-secondary bg-secondary-gradient">
          <div className="card-body curves-shadow">
            <h1>12</h1>
            <h5 className="op-8">New Users</h5>
            <div className="pull-right">
              <h3 className="fw-bold op-8">70%</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-md-4">
        <div className="card card-secondary bg-secondary-gradient">
          <div className="card-body skew-shadow">
            <img src="/img/visa.svg" height="12.5" alt="Visa Logo" />
            <h2 className="py-4 mb-0">1234 **** **** 5678</h2>
            <div className="row">
              <div className="col-8 pe-0">
                <h3 className="fw-bold mb-1">Sultan Ghani</h3>
                <div className="text-small text-uppercase fw-bold op-8">
                  Card Holder
                </div>
              </div>
              <div className="col-4 ps-0 text-end">
                <h3 className="fw-bold mb-1">4/26</h3>
                <div className="text-small text-uppercase fw-bold op-8">
                  Expired
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="card card-secondary bg-secondary-gradient">
          <div className="card-body bubble-shadow">
            <img src="/img/visa.svg" height="12.5" alt="Visa Logo" />
            <h2 className="py-4 mb-0">1234 **** **** 5678</h2>
            <div className="row">
              <div className="col-8 pe-0">
                <h3 className="fw-bold mb-1">Sultan Ghani</h3>
                <div className="text-small text-uppercase fw-bold op-8">
                  Card Holder
                </div>
              </div>
              <div className="col-4 ps-0 text-end">
                <h3 className="fw-bold mb-1">4/26</h3>
                <div className="text-small text-uppercase fw-bold op-8">
                  Expired
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="card card-secondary bg-secondary-gradient">
          <div className="card-body curves-shadow">
            <img src="/img/visa.svg" height="12.5" alt="Visa Logo" />
            <h2 className="py-4 mb-0">1234 **** **** 5678</h2>
            <div className="row">
              <div className="col-8 pe-0">
                <h3 className="fw-bold mb-1">Sultan Ghani</h3>
                <div className="text-small text-uppercase fw-bold op-8">
                  Card Holder
                </div>
              </div>
              <div className="col-4 ps-0 text-end">
                <h3 className="fw-bold mb-1">4/26</h3>
                <div className="text-small text-uppercase fw-bold op-8">
                  Expired
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-md-4">
        <div className="card">
          <div className="card-body pb-0">
            <div className="h1 fw-bold float-end text-primary">+5%</div>
            <h2 className="mb-2">17</h2>
            <p className="text-muted">Users online</p>
            <div className="pull-in sparkline-fix">
              <div id="lineChart" />
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="card">
          <div className="card-body pb-0">
            <div className="h1 fw-bold float-end text-danger">-3%</div>
            <h2 className="mb-2">27</h2>
            <p className="text-muted">New Users</p>
            <div className="pull-in sparkline-fix">
              <div id="lineChart2" />
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="card">
          <div className="card-body pb-0">
            <div className="h1 fw-bold float-end text-warning">+7%</div>
            <h2 className="mb-2">213</h2>
            <p className="text-muted">Transactions</p>
            <div className="pull-in sparkline-fix">
              <div id="lineChart3" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-md-4">
        <div className="card card-primary bg-primary-gradient">
          <div className="card-body pb-0">
            <div className="h1 fw-bold float-end">+5%</div>
            <h2 className="mb-2">17</h2>
            <p>Users online</p>
            <div className="pull-in sparkline-fix chart-as-background">
              <div id="lineChart4" />
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="card card-black">
          <div className="card-body pb-0">
            <div className="h1 fw-bold float-end">-3%</div>
            <h2 className="mb-2">27</h2>
            <p>New Users</p>
            <div className="pull-in sparkline-fix chart-as-background">
              <div id="lineChart5" />
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="card card-success bg-success2">
          <div className="card-body pb-0">
            <div className="h1 fw-bold float-end">+7%</div>
            <h2 className="mb-2">213</h2>
            <p>Transactions</p>
            <div className="pull-in sparkline-fix chart-as-background">
              <div id="lineChart6" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-12 col-sm-6 col-md-6 col-xl-3">
        <div className="card">
          <div className="card-body">
            <div className="d-flex justify-content-between">
              <div>
                <h5>
                  <b>Todays Income</b>
                </h5>
                <p className="text-muted">All Customs Value</p>
              </div>
              <h3 className="text-info fw-bold">$170</h3>
            </div>
            <div className="progress progress-sm">
              <div
                className="progress-bar bg-info w-75"
                role="progressbar"
                aria-valuenow={75}
                aria-valuemin={0}
                aria-valuemax={100}
              />
            </div>
            <div className="d-flex justify-content-between mt-2">
              <p className="text-muted mb-0">Change</p>
              <p className="text-muted mb-0">75%</p>
            </div>
          </div>
        </div>
      </div>
      <div className="col-12 col-sm-6 col-md-6 col-xl-3">
        <div className="card">
          <div className="card-body">
            <div className="d-flex justify-content-between">
              <div>
                <h5>
                  <b>Total Revenue</b>
                </h5>
                <p className="text-muted">All Customs Value</p>
              </div>
              <h3 className="text-success fw-bold">$120</h3>
            </div>
            <div className="progress progress-sm">
              <div
                className="progress-bar bg-success w-25"
                role="progressbar"
                aria-valuenow={25}
                aria-valuemin={0}
                aria-valuemax={100}
              />
            </div>
            <div className="d-flex justify-content-between mt-2">
              <p className="text-muted mb-0">Change</p>
              <p className="text-muted mb-0">25%</p>
            </div>
          </div>
        </div>
      </div>
      <div className="col-12 col-sm-6 col-md-6 col-xl-3">
        <div className="card">
          <div className="card-body">
            <div className="d-flex justify-content-between">
              <div>
                <h5>
                  <b>New Orders</b>
                </h5>
                <p className="text-muted">Fresh Order Amount</p>
              </div>
              <h3 className="text-danger fw-bold">15</h3>
            </div>
            <div className="progress progress-sm">
              <div
                className="progress-bar bg-danger w-50"
                role="progressbar"
                aria-valuenow={50}
                aria-valuemin={0}
                aria-valuemax={100}
              />
            </div>
            <div className="d-flex justify-content-between mt-2">
              <p className="text-muted mb-0">Change</p>
              <p className="text-muted mb-0">50%</p>
            </div>
          </div>
        </div>
      </div>
      <div className="col-12 col-sm-6 col-md-6 col-xl-3">
        <div className="card">
          <div className="card-body">
            <div className="d-flex justify-content-between">
              <div>
                <h5>
                  <b>New Users</b>
                </h5>
                <p className="text-muted">Joined New User</p>
              </div>
              <h3 className="text-secondary fw-bold">12</h3>
            </div>
            <div className="progress progress-sm">
              <div
                className="progress-bar bg-secondary w-25"
                role="progressbar"
                aria-valuenow={25}
                aria-valuemin={0}
                aria-valuemax={100}
              />
            </div>
            <div className="d-flex justify-content-between mt-2">
              <p className="text-muted mb-0">Change</p>
              <p className="text-muted mb-0">25%</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="row row-card-no-pd mt--2">
      <div className="col-12 col-sm-6 col-md-6 col-xl-3">
        <div className="card">
          <div className="card-body">
            <div className="d-flex justify-content-between">
              <div>
                <h5>
                  <b>Todays Income</b>
                </h5>
                <p className="text-muted">All Customs Value</p>
              </div>
              <h3 className="text-info fw-bold">$170</h3>
            </div>
            <div className="progress progress-sm">
              <div
                className="progress-bar bg-info w-75"
                role="progressbar"
                aria-valuenow={75}
                aria-valuemin={0}
                aria-valuemax={100}
              />
            </div>
            <div className="d-flex justify-content-between mt-2">
              <p className="text-muted mb-0">Change</p>
              <p className="text-muted mb-0">75%</p>
            </div>
          </div>
        </div>
      </div>
      <div className="col-12 col-sm-6 col-md-6 col-xl-3">
        <div className="card">
          <div className="card-body">
            <div className="d-flex justify-content-between">
              <div>
                <h5>
                  <b>Total Revenue</b>
                </h5>
                <p className="text-muted">All Customs Value</p>
              </div>
              <h3 className="text-success fw-bold">$120</h3>
            </div>
            <div className="progress progress-sm">
              <div
                className="progress-bar bg-success w-25"
                role="progressbar"
                aria-valuenow={25}
                aria-valuemin={0}
                aria-valuemax={100}
              />
            </div>
            <div className="d-flex justify-content-between mt-2">
              <p className="text-muted mb-0">Change</p>
              <p className="text-muted mb-0">25%</p>
            </div>
          </div>
        </div>
      </div>
      <div className="col-12 col-sm-6 col-md-6 col-xl-3">
        <div className="card">
          <div className="card-body">
            <div className="d-flex justify-content-between">
              <div>
                <h5>
                  <b>New Orders</b>
                </h5>
                <p className="text-muted">Fresh Order Amount</p>
              </div>
              <h3 className="text-danger fw-bold">15</h3>
            </div>
            <div className="progress progress-sm">
              <div
                className="progress-bar bg-danger w-50"
                role="progressbar"
                aria-valuenow={50}
                aria-valuemin={0}
                aria-valuemax={100}
              />
            </div>
            <div className="d-flex justify-content-between mt-2">
              <p className="text-muted mb-0">Change</p>
              <p className="text-muted mb-0">50%</p>
            </div>
          </div>
        </div>
      </div>
      <div className="col-12 col-sm-6 col-md-6 col-xl-3">
        <div className="card">
          <div className="card-body">
            <div className="d-flex justify-content-between">
              <div>
                <h5>
                  <b>New Users</b>
                </h5>
                <p className="text-muted">Joined New User</p>
              </div>
              <h3 className="text-secondary fw-bold">12</h3>
            </div>
            <div className="progress progress-sm">
              <div
                className="progress-bar bg-secondary w-25"
                role="progressbar"
                aria-valuenow={25}
                aria-valuemin={0}
                aria-valuemax={100}
              />
            </div>
            <div className="d-flex justify-content-between mt-2">
              <p className="text-muted mb-0">Change</p>
              <p className="text-muted mb-0">25%</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-6 col-sm-4 col-lg-2">
        <div className="card">
          <div className="card-body p-3 text-center">
            <div className="text-end text-success">
              6%
              <i className="fa fa-chevron-up" />
            </div>
            <div className="h1 m-0">43</div>
            <div className="text-muted mb-3">New Tickets</div>
          </div>
        </div>
      </div>
      <div className="col-6 col-sm-4 col-lg-2">
        <div className="card">
          <div className="card-body p-3 text-center">
            <div className="text-end text-danger">
              -3%
              <i className="fa fa-chevron-down" />
            </div>
            <div className="h1 m-0">17</div>
            <div className="text-muted mb-3">Closed Today</div>
          </div>
        </div>
      </div>
      <div className="col-6 col-sm-4 col-lg-2">
        <div className="card">
          <div className="card-body p-3 text-center">
            <div className="text-end text-success">
              9%
              <i className="fa fa-chevron-up" />
            </div>
            <div className="h1 m-0">7</div>
            <div className="text-muted mb-3">New Replies</div>
          </div>
        </div>
      </div>
      <div className="col-6 col-sm-4 col-lg-2">
        <div className="card">
          <div className="card-body p-3 text-center">
            <div className="text-end text-success">
              3%
              <i className="fa fa-chevron-up" />
            </div>
            <div className="h1 m-0">27.3K</div>
            <div className="text-muted mb-3">Followers</div>
          </div>
        </div>
      </div>
      <div className="col-6 col-sm-4 col-lg-2">
        <div className="card">
          <div className="card-body p-3 text-center">
            <div className="text-end text-danger">
              -2%
              <i className="fa fa-chevron-down" />
            </div>
            <div className="h1 m-0">$95</div>
            <div className="text-muted mb-3">Daily Earnings</div>
          </div>
        </div>
      </div>
      <div className="col-6 col-sm-4 col-lg-2">
        <div className="card">
          <div className="card-body p-3 text-center">
            <div className="text-end text-danger">
              -1%
              <i className="fa fa-chevron-down" />
            </div>
            <div className="h1 m-0">621</div>
            <div className="text-muted mb-3">Products</div>
          </div>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-sm-6 col-lg-3">
        <div className="card p-3">
          <div className="d-flex align-items-center">
            <span className="stamp stamp-md bg-secondary me-3">
              <i className="fa fa-dollar-sign" />
            </span>
            <div>
              <h5 className="mb-1">
                <b>
                  <a href="#">
                    132 <small>Sales</small>
                  </a>
                </b>
              </h5>
              <small className="text-muted">12 waiting payments</small>
            </div>
          </div>
        </div>
      </div>
      <div className="col-sm-6 col-lg-3">
        <div className="card p-3">
          <div className="d-flex align-items-center">
            <span className="stamp stamp-md bg-success me-3">
              <i className="fa fa-shopping-cart" />
            </span>
            <div>
              <h5 className="mb-1">
                <b>
                  <a href="#">
                    78 <small>Orders</small>
                  </a>
                </b>
              </h5>
              <small className="text-muted">32 shipped</small>
            </div>
          </div>
        </div>
      </div>
      <div className="col-sm-6 col-lg-3">
        <div className="card p-3">
          <div className="d-flex align-items-center">
            <span className="stamp stamp-md bg-danger me-3">
              <i className="fa fa-users" />
            </span>
            <div>
              <h5 className="mb-1">
                <b>
                  <a href="#">
                    1,352 <small>Members</small>
                  </a>
                </b>
              </h5>
              <small className="text-muted">163 registered today</small>
            </div>
          </div>
        </div>
      </div>
      <div className="col-sm-6 col-lg-3">
        <div className="card p-3">
          <div className="d-flex align-items-center">
            <span className="stamp stamp-md bg-warning me-3">
              <i className="fa fa-comment-alt" />
            </span>
            <div>
              <h5 className="mb-1">
                <b>
                  <a href="#">
                    132 <small>Comments</small>
                  </a>
                </b>
              </h5>
              <small className="text-muted">16 waiting</small>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* TimeLine */}
    <h3 className="fw-bold mb-3">Timeline</h3>
    <div className="row">
      <div className="col-md-12">
        <ul className="timeline">
          <li>
            <div className="timeline-badge">
              <i className="far fa-paper-plane" />
            </div>
            <div className="timeline-panel">
              <div className="timeline-heading">
                <h4 className="timeline-title">Mussum ipsum cacilds</h4>
                <p>
                  <small className="text-muted">
                    <i className="far fa-paper-plane" /> 11 hours ago via
                    Twitter
                  </small>
                </p>
              </div>
              <div className="timeline-body">
                <p>
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                </p>
              </div>
            </div>
          </li>
          <li className="timeline-inverted">
            <div className="timeline-badge warning">
              <i className="far fa-bell" />
            </div>
            <div className="timeline-panel">
              <div className="timeline-heading">
                <h4 className="timeline-title">Mussum ipsum cacilds</h4>
              </div>
              <div className="timeline-body">
                <p>
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                </p>
              </div>
            </div>
          </li>
          <li>
            <div className="timeline-badge danger">
              <i className="icon-close" />
            </div>
            <div className="timeline-panel">
              <div className="timeline-heading">
                <h4 className="timeline-title">Mussum ipsum cacilds</h4>
              </div>
              <div className="timeline-body">
                <p>
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                </p>
              </div>
            </div>
          </li>
          <li className="timeline-inverted">
            <div className="timeline-panel">
              <div className="timeline-heading">
                <h4 className="timeline-title">Mussum ipsum cacilds</h4>
              </div>
              <div className="timeline-body">
                <p>
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                </p>
              </div>
            </div>
          </li>
          <li>
            <div className="timeline-badge info">
              <i className="icon-tag" />
            </div>
            <div className="timeline-panel">
              <div className="timeline-heading">
                <h4 className="timeline-title">Mussum ipsum cacilds</h4>
              </div>
              <div className="timeline-body">
                <p>
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                </p>
                <hr />
                <div className="btn-group dropdown">
                  <button
                    type="button"
                    className="btn btn-primary btn-sm dropdown-toggle"
                    data-bs-toggle="dropdown"
                  >
                    <span className="btn-label">
                      <i className="fa fa-cog" />
                    </span>
                  </button>
                  <ul className="dropdown-menu" role="menu">
                    <li>
                      <a className="dropdown-item" href="#">
                        Action
                      </a>
                      <a className="dropdown-item" href="#">
                        Another action
                      </a>
                      <div className="dropdown-divider" />
                      <a className="dropdown-item" href="#">
                        Something else here
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div className="timeline-panel">
              <div className="timeline-heading">
                <h4 className="timeline-title">Mussum ipsum cacilds</h4>
              </div>
              <div className="timeline-body">
                <p>
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                </p>
              </div>
            </div>
          </li>
          <li className="timeline-inverted">
            <div className="timeline-badge success">
              <i className="icon-credit-card" />
            </div>
            <div className="timeline-panel">
              <div className="timeline-heading">
                <h4 className="timeline-title">Mussum ipsum cacilds</h4>
              </div>
              <div className="timeline-body">
                <p>
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                </p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    {/* Pricing */}
    <h3 className="fw-bold mb-3">Pricing</h3>
    <div className="row justify-content-center align-items-center mb-1">
      <div className="col-md-3 ps-md-0">
        <div className="card card-pricing">
          <div className="card-header">
            <h4 className="card-title">Basic</h4>
            <div className="card-price">
              <span className="price">$25</span>
              <span className="text">/mo</span>
            </div>
          </div>
          <div className="card-body">
            <ul className="specification-list">
              <li>
                <span className="name-specification">Customizer</span>
                <span className="status-specification">14 days trial</span>
              </li>
              <li>
                <span className="name-specification">Chat History</span>
                <span className="status-specification">No</span>
              </li>
              <li>
                <span className="name-specification">Statistics</span>
                <span className="status-specification">14 days trial</span>
              </li>
              <li>
                <span className="name-specification">Support</span>
                <span className="status-specification">Yes</span>
              </li>
              <li>
                <span className="name-specification">Live Support</span>
                <span className="status-specification">No</span>
              </li>
            </ul>
          </div>
          <div className="card-footer">
            <button className="btn btn-primary w-100">
              <b>Get Started</b>
            </button>
          </div>
        </div>
      </div>
      <div className="col-md-3 ps-md-0 pe-md-0">
        <div className="card card-pricing card-pricing-focus card-primary">
          <div className="card-header">
            <h4 className="card-title">Professional</h4>
            <div className="card-price">
              <span className="price">$35</span>
              <span className="text">/mo</span>
            </div>
          </div>
          <div className="card-body">
            <ul className="specification-list">
              <li>
                <span className="name-specification">Customizer</span>
                <span className="status-specification">Yes</span>
              </li>
              <li>
                <span className="name-specification">Chat History</span>
                <span className="status-specification">3 Month</span>
              </li>
              <li>
                <span className="name-specification">Statistics</span>
                <span className="status-specification">3 Month</span>
              </li>
              <li>
                <span className="name-specification">Support</span>
                <span className="status-specification">Yes</span>
              </li>
              <li>
                <span className="name-specification">Live Support</span>
                <span className="status-specification">Yes</span>
              </li>
            </ul>
          </div>
          <div className="card-footer">
            <button className="btn btn-light w-100">
              <b>Get Started</b>
            </button>
          </div>
        </div>
      </div>
      <div className="col-md-3 pe-md-0">
        <div className="card card-pricing">
          <div className="card-header">
            <h4 className="card-title">Team</h4>
            <div className="card-price">
              <span className="price">$75</span>
              <span className="text">/mo</span>
            </div>
          </div>
          <div className="card-body">
            <ul className="specification-list">
              <li>
                <span className="name-specification">Customizer</span>
                <span className="status-specification">Yes</span>
              </li>
              <li>
                <span className="name-specification">Chat History</span>
                <span className="status-specification">1 Year</span>
              </li>
              <li>
                <span className="name-specification">Statistics</span>
                <span className="status-specification">1 Year</span>
              </li>
              <li>
                <span className="name-specification">Support</span>
                <span className="status-specification">Yes</span>
              </li>
              <li>
                <span className="name-specification">Live Support</span>
                <span className="status-specification">Yes</span>
              </li>
            </ul>
          </div>
          <div className="card-footer">
            <button className="btn btn-primary w-100">
              <b>Get Started</b>
            </button>
          </div>
        </div>
      </div>
    </div>
    <h3 className="fw-bold mb-3">Pricing 2</h3>
    <div className="row justify-content-center align-items-center mb-5">
      <div className="col-md-3 ps-md-0">
        <div className="card-pricing2 card-success">
          <div className="pricing-header">
            <h3 className="fw-bold mb-3">Standard</h3>
            <span className="sub-title">Lorem ipsum</span>
          </div>
          <div className="price-value">
            <div className="value">
              <span className="currency">$</span>
              <span className="amount">
                10.<span>99</span>
              </span>
              <span className="month">/month</span>
            </div>
          </div>
          <ul className="pricing-content">
            <li>50GB Disk Space</li>
            <li>50 Email Accounts</li>
            <li>50GB Monthly Bandwidth</li>
            <li className="disable">10 Subdomains</li>
            <li className="disable">15 Domains</li>
          </ul>
          <a
            href="#"
            className="btn btn-success btn-border btn-lg w-75 fw-bold mb-3"
          >
            Sign up
          </a>
        </div>
      </div>
      <div className="col-md-3 ps-md-0 pe-md-0">
        <div className="card-pricing2 card-primary">
          <div className="pricing-header">
            <h3 className="fw-bold mb-3">Business</h3>
            <span className="sub-title">Lorem ipsum</span>
          </div>
          <div className="price-value">
            <div className="value">
              <span className="currency">$</span>
              <span className="amount">
                20.<span>99</span>
              </span>
              <span className="month">/month</span>
            </div>
          </div>
          <ul className="pricing-content">
            <li>60GB Disk Space</li>
            <li>60 Email Accounts</li>
            <li>60GB Monthly Bandwidth</li>
            <li>15 Subdomains</li>
            <li className="disable">20 Domains</li>
          </ul>
          <a
            href="#"
            className="btn btn-primary btn-border btn-lg w-75 fw-bold mb-3"
          >
            Sign up
          </a>
        </div>
      </div>
      <div className="col-md-3 pe-md-0">
        <div className="card-pricing2 card-secondary">
          <div className="pricing-header">
            <h3 className="fw-bold mb-3">Premium</h3>
            <span className="sub-title">Lorem ipsum</span>
          </div>
          <div className="price-value">
            <div className="value">
              <span className="currency">$</span>
              <span className="amount">
                30.<span>99</span>
              </span>
              <span className="month">/month</span>
            </div>
          </div>
          <ul className="pricing-content">
            <li>70GB Disk Space</li>
            <li>70 Email Accounts</li>
            <li>70GB Monthly Bandwidth</li>
            <li>20 Subdomains</li>
            <li>25 Domains</li>
          </ul>
          <a
            href="#"
            className="btn btn-secondary btn-border btn-lg w-75 fw-bold mb-3"
          >
            Sign up
          </a>
        </div>
      </div>
    </div>
    {/* Customized Card */}
    <h3 className="fw-bold mb-3">Customized Card</h3>
    <div className="row">
      <div className="col-md-4">
        <div className="card card-info card-annoucement card-round">
          <div className="card-body text-center">
            <div className="card-opening">Welcome Rian,</div>
            <div className="card-desc">
              Congrats and best wishes for success in your brand new life! I
              knew that you would do this!
            </div>
            <div className="card-detail">
              <div className="btn btn-light btn-rounded">View Detail</div>
            </div>
          </div>
        </div>
        <div className="card card-round">
          <div className="card-body">
            <div className="card-title fw-mediumbold">Suggested People</div>
            <div className="card-list">
              <div className="item-list">
                <div className="avatar">
                  <img
                    src="/img/jm_denis.jpg"
                    alt="..."
                    className="avatar-img rounded-circle"
                  />
                </div>
                <div className="info-user ms-3">
                  <div className="username">Jimmy Denis</div>
                  <div className="status">Graphic Designer</div>
                </div>
                <button className="btn btn-icon btn-primary btn-round btn-xs">
                  <i className="fa fa-plus" />
                </button>
              </div>
              <div className="item-list">
                <div className="avatar">
                  <img
                    src="/img/chadengle.jpg"
                    alt="..."
                    className="avatar-img rounded-circle"
                  />
                </div>
                <div className="info-user ms-3">
                  <div className="username">Chad</div>
                  <div className="status">CEO Zeleaf</div>
                </div>
                <button className="btn btn-icon btn-primary btn-round btn-xs">
                  <i className="fa fa-plus" />
                </button>
              </div>
              <div className="item-list">
                <div className="avatar">
                  <img
                    src="/img/talha.jpg"
                    alt="..."
                    className="avatar-img rounded-circle"
                  />
                </div>
                <div className="info-user ms-3">
                  <div className="username">Talha</div>
                  <div className="status">Front End Designer</div>
                </div>
                <button className="btn btn-icon btn-primary btn-round btn-xs">
                  <i className="fa fa-plus" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="card card-post card-round">
          <img
            className="card-img-top"
            src="/img/blogpost.jpg"
            alt="Card image cap"
          />
          <div className="card-body">
            <div className="d-flex">
              <div className="avatar">
                <img
                  src="/img/profile2.jpg"
                  alt="..."
                  className="avatar-img rounded-circle"
                />
              </div>
              <div className="info-post ms-2">
                <p className="username">Joko Subianto</p>
                <p className="date text-muted">20 Jan 18</p>
              </div>
            </div>
            <div className="separator-solid" />
            <p className="card-category text-info mb-1">
              <a href="#">Design</a>
            </p>
            <h3 className="card-title">
              <a href="#"> Best Design Resources This Week </a>
            </h3>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" className="btn btn-primary btn-rounded btn-sm">
              Read More
            </a>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="card card-profile">
          <div
            className="card-header"
            style={{ backgroundImage: 'url("/img/blogpost.jpg")' }}
          >
            <div className="profile-picture">
              <div className="avatar avatar-xl">
                <img
                  src="/img/profile.jpg"
                  alt="..."
                  className="avatar-img rounded-circle"
                />
              </div>
            </div>
          </div>
          <div className="card-body">
            <div className="user-profile text-center">
              <div className="name">Hizrian, 19</div>
              <div className="job">Frontend Developer</div>
              <div className="desc">A man who hates loneliness</div>
              <div className="social-media">
                <a
                  className="btn btn-info btn-twitter btn-sm btn-link"
                  href="#"
                >
                  <span className="btn-label just-icon">
                    <i className="icon-social-twitter" />
                  </span>
                </a>
                <a
                  className="btn btn-primary btn-sm btn-link"
                  rel="publisher"
                  href="#"
                >
                  <span className="btn-label just-icon">
                    <i className="icon-social-facebook" />
                  </span>
                </a>
                <a
                  className="btn btn-danger btn-sm btn-link"
                  rel="publisher"
                  href="#"
                >
                  <span className="btn-label just-icon">
                    <i className="icon-social-instagram" />
                  </span>
                </a>
              </div>
              <div className="view-profile">
                <a href="#" className="btn btn-secondary w-100">
                  View Full Profile
                </a>
              </div>
            </div>
          </div>
          <div className="card-footer">
            <div className="row user-stats text-center">
              <div className="col">
                <div className="number">125</div>
                <div className="title">Post</div>
              </div>
              <div className="col">
                <div className="number">25K</div>
                <div className="title">Followers</div>
              </div>
              <div className="col">
                <div className="number">134</div>
                <div className="title">Following</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}

export default Widget
