import React, { useState, useEffect } from "react";

const themes = {
  default: {
    navbarBg: "#9CA3AF  ",
    headerLogoBg: "#374151",
    sidebarBg: "#374151",
  },
  DarkTurquoise: {
    navbarBg: "#17153B ",
    headerLogoBg: "#00CED1",
    sidebarBg: "#00CED1",
  },
  Ocean_Blue: {
    navbarBg: "#B0C4DE ",
    headerLogoBg: "#179BAE",
    sidebarBg: "#179BAE ",
  },
  Warm_Copper: {
    navbarBg: "#5DC5B2 ",
    headerLogoBg: "#C5705D",
    sidebarBg: "#C5705D",
  },
};

const SettingsPopup = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Apply default theme on component load
  useEffect(() => {
    const defaultTheme = themes.default; // Set your default theme here
    document.documentElement.style.setProperty(
      "--navbar-bg",
      defaultTheme.navbarBg
    );
    document.documentElement.style.setProperty(
      "--header-logo-bg",
      defaultTheme.headerLogoBg
    );
    document.documentElement.style.setProperty(
      "--sidebar-bg",
      defaultTheme.sidebarBg
    );
  }, []);

  const toggleSettings = () => {
    setIsOpen(!isOpen);
  };

  const handleThemeChange = (newTheme) => {
    const selectedTheme = themes[newTheme];
    if (selectedTheme) {
      document.documentElement.style.setProperty(
        "--navbar-bg",
        selectedTheme.navbarBg
      );
      document.documentElement.style.setProperty(
        "--header-logo-bg",
        selectedTheme.headerLogoBg
      );
      document.documentElement.style.setProperty(
        "--sidebar-bg",
        selectedTheme.sidebarBg
      );
      console.log(`Theme changed to: ${newTheme}`);
      setIsOpen(false); // Close popup after theme selection
    }
  };

  const settingsButtonStyle = {
    position: "fixed",
    bottom: "50%",
    right: "0px",
    backgroundColor: "var(--header-logo-bg)",
    borderRadius: "50%",
    width: "50px",
    height: "50px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
    zIndex: "9999",
  };

  return (
    <div>
      <style>
        {`
          .spin {
            animation: spin 2s linear infinite;
          }

          @keyframes spin {
            0% {
              transform: rotate(0deg);
            }
            100% {
              transform: rotate(360deg);
            }
          }

          .palette {
            position: relative;
            overflow: hidden;
            border-radius: 10px;
            padding-bottom: 40%;
            padding-left: 15px;
            cursor: pointer;
          }

          .place {
            position: absolute;
            width: 100%;
            text-align: left;
          }

          .c3 {
            padding-bottom: 100%;
            border-radius: 20px 20px 0 0;
          }

          .c2 {
            padding-bottom: 61%;
          }

          .c1 {
            padding-bottom: 41%;
          }

          .c0 {
            padding-bottom: 18%;
            width: 50px;
            border-radius: 10px;
          }

          .btn-link-no-underline {
            text-decoration: none;
            color: inherit;
          }
        `}
      </style>
      {/* <div style={settingsButtonStyle} onClick={toggleSettings}>
        <i
          className="fas fa-cog spin"
          style={{ color: "white", fontSize: "24px" }}
        ></i>
      </div> */}

      <div
        style={{
          position: "fixed",
          top: "50%",
          right: isOpen ? "0" : "-320px",
          transform: "translateY(-50%)",
          width: "355px",
          transition: "right 0.3s ease",
          zIndex: 10000,
        }}
      >
        <div className="row">
          <div
            className="col-2  d-flex align-items-center justify-content-end p-0 w-auto"
            style={{ background: "transparent" }}
          >
            <div
              style={{
                backgroundColor: "var(--header-logo-bg)",
                borderRadius: "50% 0% 0% 50%",
                width: "50px",
                height: "50px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                cursor: "pointer",
              }}
            >
              <i
                className="fas fa-cog spin"
                style={{ color: "white", fontSize: "24px" }}
                onClick={toggleSettings}
              ></i>
            </div>
          </div>
          <div
            className="col-10"
            style={{ background: "black" }}
          >
            <div style={{ padding: "20px" }}>
              <h4
                style={{
                  marginBottom: "20px",
                  borderBottom: "2px solid White",
                  width: "max-content",
                  paddingBottom: "5px",
                  color: "#fff",
                }}
              >
                Settings
              </h4>

              <div className="row">
                <div className="col-6 mb-3">
                  <div
                    className="palette"
                    onClick={() => handleThemeChange("default")}
                  >
                    <div className="place c0" style={{ background: "#374151" }}>
                      <span className="text-white p-2"></span>
                    </div>
                  </div>
                  <button
                    className="btn btn-link-no-underline"
                    onClick={() => handleThemeChange("default")}
                    style={{ color: 'white' }} 
                  >
                    Default
                  </button>
                </div>

                <div className="col-6 mb-3">
                  <div
                    className="palette"
                    onClick={() => handleThemeChange("Ocean_Blue")}
                  >
                    <div className="place c0" style={{ background: "#179BAE" }}>
                      <span className="text-white p-2"></span>
                    </div>
                  </div>
                  <button
                    className="btn btn-link-no-underline"
                    style={{ color: "white"     ,whiteSpace: 'nowrap' }}
                    onClick={() => handleThemeChange("Ocean_Blue")}
                  >
                   Ocean Blue
                  </button>
                </div>

                <div className="col-6 mb-3">
                  <div
                    className="palette"
                    onClick={() => handleThemeChange("DarkTurquoise")}
                  >
                    <div className="place c0" style={{ background: "#00CED1" }}>
                      <span className="text-white p-2"></span>
                    </div>
                  </div>
                  <button
                    className="btn btn-link-no-underline"
                    onClick={() => handleThemeChange("DarkTurquoise")}
                    style={{ color: 'white' }} 
                  >
                    DarkTurquoise   
                  </button>
                </div>

                <div className="col-6 mb-3">
                  <div
                    className="palette"
                    onClick={() => handleThemeChange("Warm_Copper")}
                  >
                    <div className="place c0" style={{ background: "#C5705D" }}>
                      <span className="text-white p-2"></span>
                    </div>
                  </div>
                  <button
                    className="btn btn-link-no-underline"
                    onClick={() => handleThemeChange("Warm_Copper")}
                    style={{ color: 'white' , whiteSpace: 'nowrap' }} 
                  >
                    Warm Copper
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPopup;
