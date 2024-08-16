import React from 'react'
import { Link } from 'react-router-dom'

const Buttons = () => {
  return (
    <div className="container">
  <div className="page-inner">
    <div className="page-header">
      <h3 className="fw-bold mb-3">Buttons</h3>
      <ul className="breadcrumbs mb-3">
        <li className="nav-home">
          <Link to="*">
            <i className="icon-home" />
          </Link>
        </li>
        <li className="separator">
          <i className="icon-arrow-right" />
        </li>
        <li className="nav-item">
          <Link to="*">Base</Link>
        </li>
        <li className="separator">
          <i className="icon-arrow-right" />
        </li>
        <li className="nav-item">
          <Link to="*">Buttons</Link>
        </li>
      </ul>
    </div>
    <div className="row">
      <div className="col-md-12">
        <div className="card">
          <div className="card-header">
            <h4 className="card-title">Button Original</h4>
          </div>
          <div className="card-body ">
            <p className="demo">
              <button className="btn btn-black mx-2">Default</button>
              <button className="btn btn-primary mx-2">Primary</button>
              <button className="btn btn-secondary mx-2">Secondary</button>
              <button className="btn btn-info mx-2">Info</button>
              <button className="btn btn-success mx-2">Success</button>
              <button className="btn btn-warning mx-2">Warning</button>
              <button className="btn btn-danger mx-2">Danger</button>
              <button className="btn btn-link mx-2">Link</button>
            </p>
          </div>
        </div>
      </div>
      <div className="col-md-12">
        <div className="card">
          <div className="card-header">
            <h4 className="card-title">Button with Label</h4>
          </div>
          <div className="card-body">
            <p className="demo">
              <button className="btn btn-black mx-2">
                <span className="btn-label">
                  <i className="fa fa-archive" />
                </span>
                Default
              </button>
              <button className="btn btn-primary mx-2">
                <span className="btn-label">
                  <i className="fa fa-bookmark" />
                </span>
                Primary
              </button>
              <button className="btn btn-secondary mx-2">
                <span className="btn-label">
                  <i className="fa fa-plus" />
                </span>
                Secondary
              </button>
              <button className="btn btn-info mx-2">
                <span className="btn-label">
                  <i className="fa fa-info" />
                </span>
                Info
              </button>
              <button className="btn btn-success mx-2">
                <span className="btn-label">
                  <i className="fa fa-check" />
                </span>
                Success
              </button>
              <button className="btn btn-warning mx-2">
                <span className="btn-label">
                  <i className="fa fa-exclamation-circle" />
                </span>
                Warning
              </button>
              <button className="btn btn-danger mx-2">
                <span className="btn-label">
                  <i className="fa fa-heart" />
                </span>
                Danger
              </button>
              <button className="btn btn-link mx-2">
                <span className="btn-label">
                  <i className="fa fa-link" />
                </span>
                Link
              </button>
            </p>
          </div>
        </div>
      </div>
      <div className="col-md-12">
        <div className="card">
          <div className="card-header">
            <h4 className="card-title">Button Icon</h4>
          </div>
          <div className="card-body">
            <p className="demo">
              <button
                type="button"
                className="btn btn-icon btn-round btn-black mx-2"
              >
                <i className="fa fa-align-left" />
              </button>
              <button
                type="button"
                className="btn btn-icon btn-round btn-primary"
              >
                <i className="fab fa-twitter" />
              </button>
              <button
                type="button"
                className="btn btn-icon btn-round btn-secondary mx-2"
              >
                <i className="fa fa-bookmark" />
              </button>
              <button type="button" className="btn btn-icon btn-round btn-info mx-2">
                <i className="fa fa-info" />
              </button>
              <button
                type="button"
                className="btn btn-icon btn-round btn-success mx-2"
              >
                <i className="fa fa-check" />
              </button>
              <button
                type="button"
                className="btn btn-icon btn-round btn-warning mx-2"
              >
                <i className="fa fa-exclamation-circle" />
              </button>
              <button
                type="button"
                className="btn btn-icon btn-round btn-danger mx-2"
              >
                <i className="fa fa-heart" />
              </button>
              <button type="button" className="btn btn-icon btn-link mx-2">
                <i className="fa fa-link" />
              </button>
            </p>
          </div>
        </div>
      </div>
      <div className="col-md-12">
        <div className="card">
          <div className="card-header">
            <h4 className="card-title">Disabled Button</h4>
          </div>
          <div className="card-body">
            <p className="demo">
              <button className="btn btn-black mx-2" disabled="disabled">
                Default
              </button>
              <button className="btn btn-primary mx-2" disabled="disabled">
                Primary
              </button>
              <button className="btn btn-secondary mx-2" disabled="disabled">
                Secondary
              </button>
              <button className="btn btn-info mx-2" disabled="disabled">
                Info
              </button>
              <button className="btn btn-success mx-2" disabled="disabled">
                Success
              </button>
              <button className="btn btn-warning mx-2" disabled="disabled">
                Warning
              </button>
              <button className="btn btn-danger mx-2" disabled="disabled">
                Danger
              </button>
              <button className="btn btn-link mx-2" disabled="">
                Link
              </button>
            </p>
          </div>
        </div>
      </div>
      <div className="col-md-12">
        <div className="card">
          <div className="card-header">
            <h4 className="card-title">Button Size</h4>
          </div>
          <div className="card-body">
            <p className="demo">
              <button className="btn btn-primary btn-lg mx-2">Large</button>
              <button className="btn btn-primary mx-2">Normal</button>
              <button className="btn btn-primary btn-sm mx-2">Small</button>
              <button className="btn btn-primary btn-xs mx-2">Extra Small</button>
            </p>
          </div>
        </div>
      </div>
      <div className="col-md-12">
        <div className="card">
          <div className="card-header">
            <h4 className="card-title">Button Type</h4>
          </div>
          <div className="card-body">
            <p className="demo">
              <button className="btn btn-primary mx-2">Normal</button>
              <button className="btn btn-primary btn-border mx-2">Border</button>
              <button className="btn btn-primary btn-round mx-2">Round</button>
              <button className="btn btn-primary btn-border btn-round mx-2">
                Round
              </button>
              <button className="btn btn-primary btn-link">Link</button>
            </p>
          </div>
        </div>
      </div>
      <div className="col-md-12">
        <div className="card">
          <div className="card-header">
            <h4 className="card-title">Bootstrap Dropdown</h4>
          </div>
          <div className="card-body">
            <div className="demo">
              <div className="btn-group dropdown">
                <button
                  className="btn btn-primary dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                >
                  DropDown
                </button>
                <ul className="dropdown-menu" role="menu">
                  <li>
                    <Link className="dropdown-item" to="*">
                      Action
                    </Link>
                    <Link className="dropdown-item" to="*">
                      Another action
                    </Link>
                    <div className="dropdown-divider" />
                    <Link className="dropdown-item" to="*">
                      Something else here
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="btn-group dropup">
                <button
                  className="btn btn-info dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                >
                  DropUp
                </button>
                <ul className="dropdown-menu" role="menu">
                  <li>
                    <Link className="dropdown-item" to="*">
                      Action
                    </Link>
                    <Link className="dropdown-item" to="*">
                      Another action
                    </Link>
                    <div className="dropdown-divider" />
                    <Link className="dropdown-item" to="*">
                      Something else here
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="btn-group dropend">
                <button
                  type="button"
                  className="btn btn-success btn-round dropdown-toggle"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  DropRight
                </button>
                <ul className="dropdown-menu" role="menu">
                  <li>
                    <Link className="dropdown-item" to="*">
                      Action
                    </Link>
                    <Link className="dropdown-item" to="*">
                      Another action
                    </Link>
                    <div className="dropdown-divider" />
                    <Link className="dropdown-item" to="*">
                      Something else here
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="btn-group dropstart">
                <button
                  type="button"
                  className="btn btn-black btn-border dropdown-toggle"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  DropLeft
                </button>
                <ul className="dropdown-menu" role="menu">
                  <li>
                    <Link className="dropdown-item" to="*">
                      Action
                    </Link>
                    <Link className="dropdown-item" to="*">
                      Another action
                    </Link>
                    <div className="dropdown-divider" />
                    <Link className="dropdown-item" to="*">
                      Something else here
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-12">
        <div className="card">
          <div className="card-header">
            <h4 className="card-title">Badge</h4>
          </div>
          <div className="card-body">
            <span className="badge badge-count mx-2">Count</span>
            <span className="badge badge-black mx-2">Default</span>
            <span className="badge badge-primary mx-2">Primary</span>
            <span className="badge badge-info mx-2">Info</span>
            <span className="badge badge-success mx-2">Success</span>
            <span className="badge badge-success mx-2">Success</span>
            <span className="badge badge-warning mx-2">Warning</span>
            <span className="badge badge-danger mx-2">Danger</span>
          </div>
        </div>
      </div>
      <div className="col-md-12">
        <div className="card">
          <div className="card-header">
            <h4 className="card-title">Nav Pills</h4>
          </div>
          <div className="card-body">
            <ul className="nav nav-pills nav-primary gap-2">
              <li className="nav-item">
                <Link className="nav-link active" to="*">
                  Active
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="*">
                  Link
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="*">
                  Link
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link disabled" to="*">
                  Disabled
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="col-md-12">
        <div className="card">
          <div className="card-header">
            <h4 className="card-title">Pagination</h4>
          </div>
          <div className="card-body">
            <div className="demo">
              <ul className="pagination pg-primary gap-2">
                <li className="page-item">
                  <Link className="page-link" to="*" aria-label="Previous">
                    <span aria-hidden="true">«</span>
                    <span className="sr-only">Previous</span>
                  </Link>
                </li>
                <li className="page-item active">
                  <Link className="page-link" to="*">
                    1
                  </Link>
                </li>
                <li className="page-item">
                  <Link className="page-link" to="*">
                    2
                  </Link>
                </li>
                <li className="page-item">
                  <Link className="page-link" to="*">
                    3
                  </Link>
                </li>
                <li className="page-item">
                  <Link className="page-link" to="*" aria-label="Next">
                    <span aria-hidden="true">»</span>
                    <span className="sr-only">Next</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}

export default Buttons
