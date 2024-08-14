import React from 'react';
import Swal from 'sweetalert2';

const Sweetalert = () => {
  const showBasicAlert = () => {
    Swal.fire('Hello World!');
  };

  const showAlertWithTitleAndText = () => {
    Swal.fire({
      title: 'Alert Title',
      text: 'Alert text goes here',
      icon: 'info',
    });
  };

  const showAlertWithIcon = (icon) => {
    Swal.fire({
      title: icon.charAt(0).toUpperCase() + icon.slice(1) + ' Alert',
      text: `${icon.charAt(0).toUpperCase() + icon.slice(1)} icon alert`,
      icon: icon,
    });
  };

  const showAlertWithCustomConfirmButton = () => {
    Swal.fire({
      title: 'Confirm',
      text: 'Custom confirm button text and class',
      icon: 'warning',
      confirmButtonText: 'Custom Text',
      confirmButtonColor: '#3085d6',
    });
  };

  const showModalWithInput = () => {
    Swal.fire({
      title: 'Input Required',
      input: 'text',
      inputLabel: 'Enter your text',
      inputPlaceholder: 'Type something...',
      showCancelButton: true,
      confirmButtonText: 'Submit',
      cancelButtonText: 'Cancel',
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(`You entered: ${result.value}`);
      }
    });
  };

  const showAlertWithTimer = () => {
    Swal.fire({
      title: 'Auto-close alert!',
      text: 'This alert will close in 2 seconds.',
      timer: 2000,
      timerProgressBar: true,
      didOpen: () => {
        Swal.showLoading();
      },
    });
  };

  const showWarningWithConfirmFunction = () => {
    Swal.fire({
      title: 'Warning!',
      text: 'This is a warning message.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, do it!',
      cancelButtonText: 'No, cancel!',
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire('Confirmed!', 'You clicked Yes.', 'success');
      }
    });
  };

  const showAlertWithCancelFunction = () => {
    Swal.fire({
      title: 'Are you sure?',
      text: 'Do you want to proceed?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Yes',
      cancelButtonText: 'No',
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire('Confirmed!', 'You clicked Yes.', 'success');
      } else {
        Swal.fire('Cancelled', 'You clicked No.', 'error');
      }
    });
  };

  return (
    <div className="container">
      <div className="page-inner">
        <div className="page-header">
          <h3 className="fw-bold mb-3">Alert</h3>
          <ul className="breadcrumbs mb-3">
            <li className="nav-home">
              <a href="#">
                <i className="icon-home" />
              </a>
            </li>
            <li className="separator">
              <i className="icon-arrow-right" />
            </li>
            <li className="nav-item">
              <a href="#">Base</a>
            </li>
            <li className="separator">
              <i className="icon-arrow-right" />
            </li>
            <li className="nav-item">
              <a href="#">Sweet Alert</a>
            </li>
          </ul>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="card">
              <div className="card-header">
                <div className="card-title">Sweet Alert</div>
                <div className="card-category">
                  <a href="https://sweetalert.js.org/">SweetAlert</a> makes popup
                  messages easy and pretty.
                </div>
              </div>
              <div className="card-body">
                <table className="table table-bordered">
                  <tbody>
                    <tr>
                      <td style={{ width: '40%', verticalAlign: 'middle' }}>
                        Basic alert
                      </td>
                      <td>
                        <button
                          type="button"
                          className="btn btn-info"
                          onClick={showBasicAlert}
                        >
                          Show me
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td style={{ width: '40%', verticalAlign: 'middle' }}>
                        Alert title and text
                      </td>
                      <td>
                        <button
                          type="button"
                          className="btn btn-focus"
                          onClick={showAlertWithTitleAndText}
                        >
                          Show me
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td style={{ width: '40%', verticalAlign: 'middle' }}>
                        Enable <code>warning</code>, <code>error</code>,
                        <code>success</code>, and <code>info</code> state icons
                      </td>
                      <td>
                        <button
                          type="button"
                          className="btn btn-warning mx-2 mb-1 mb-md-0"
                          onClick={() => showAlertWithIcon('warning')}
                        >
                          Warning
                        </button>
                        <button
                          type="button"
                          className="btn btn-danger mx-2 mb-1 mb-md-0"
                          onClick={() => showAlertWithIcon('error')}
                        >
                          Error
                        </button>
                        <button
                          type="button"
                          className="btn btn-success mx-2 mb-1 mb-md-0"
                          onClick={() => showAlertWithIcon('success')}
                        >
                          Success
                        </button>
                        <button
                          type="button"
                          className="btn btn-info mx-2 mb-1 mb-md-0"
                          onClick={() => showAlertWithIcon('info')}
                        >
                          Info
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td style={{ width: '40%', verticalAlign: 'middle' }}>
                        Change confirm button text and class
                      </td>
                      <td>
                        <button
                          type="button"
                          className="btn btn-success"
                          onClick={showAlertWithCustomConfirmButton}
                        >
                          Show me
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td style={{ width: '40%', verticalAlign: 'middle' }}>
                        Modal window with input field
                      </td>
                      <td>
                        <button
                          type="button"
                          className="btn btn-warning"
                          onClick={showModalWithInput}
                        >
                          Show me
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td style={{ width: '40%', verticalAlign: 'middle' }}>
                        Closes the modal after a certain amount of time (specified
                        in ms)
                      </td>
                      <td>
                        <button
                          type="button"
                          className="btn btn-primary"
                          onClick={showAlertWithTimer}
                        >
                          Show me
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td style={{ width: '40%', verticalAlign: 'middle' }}>
                        A warning message, with a function attached to the "Confirm"
                        Button
                      </td>
                      <td>
                        <button
                          type="button"
                          className="btn btn-success"
                          onClick={showWarningWithConfirmFunction}
                        >
                          Show me
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td style={{ width: '40%', verticalAlign: 'middle' }}>
                        By passing a parameter, you can execute something else for
                        cancel
                      </td>
                      <td>
                        <button
                          type="button"
                          className="btn btn-danger"
                          onClick={showAlertWithCancelFunction}
                        >
                          Show me
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sweetalert;
