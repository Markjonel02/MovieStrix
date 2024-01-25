import logo from "../img/logo2.png";

const Footer = () => {
  const img = {
    imgURL: logo,
    size: {
      height: "auto",
      width: 200,
    },
  };

  const footerStyle: React.CSSProperties = {
    backgroundColor: "rgb(40, 45, 50)",
    color: "white",

    paddingBottom: "40px",
  };

  return (
    <>
      <footer style={footerStyle} className="bg-black">
        <div className="container">
          <div className="row">
            <div className="col-md-6 item text" style={{ marginBottom: "0px" }}>
              <img src={img.imgURL} alt="sample" style={img.size} />
              <p>
                “To make MovieFlix the biggest local and international hits.”
                <br />
                All here from MovieFlix
              </p>
            </div>
            <div className="col-sm-6 col-md-3 item fw-light list-unstyled  ">
              <h3 style={{ color: "white" }}>About</h3>
              <ul>
                <li>
                  <a href="#" style={{ color: "white" }}>
                    Company
                  </a>
                </li>
                <li>
                  <a href="#" style={{ color: "white" }}>
                    Team
                  </a>
                </li>
                <li>
                  <a href="#" style={{ color: "white" }}>
                    Careers
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-sm-6 col-md-3 item fw-light ">
              <h3 style={{ color: "white" }}>Services</h3>
              <ul>
                <li>
                  <a href="#" style={{ color: "white" }}>
                    Monitoring
                  </a>
                </li>
                <li>
                  <a href="#" style={{ color: "white" }}>
                    Development
                  </a>
                </li>
                <li>
                  <a href="#" style={{ color: "white" }}>
                    Reporting
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div>
            <hr />
          </div>
          <strong className="d-flex justify-content-center align-content-end mt-4 ">
            <p className="copyright" style={{ color: "white" }}>
              MovieFlix © 2024
            </p>
          </strong>
        </div>
      </footer>
    </>
  );
};

export default Footer;
