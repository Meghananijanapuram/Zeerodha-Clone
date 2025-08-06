import React from "react";
import { useNavigate } from "react-router-dom";

function Universe() {

   const navigate = useNavigate();
  
    const handleSignupClick = () => {
      navigate("/signup");
    };
  
  return (
    <div className="container mt-5">
      <div className="row mt-5 text-center">
        <h1 className="mb-4">The Zerodha Universe</h1>
        <p className="mb-5">
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
        <div
          className="col-4"
          style={{ alignItems: "center", justifyContent: "center" }}
        >
          <div className="mt-5">
            <img src="media/images/smallcaseLogo.png" />
            <p className="p-3">Thematic investment platform</p>
          </div>
          <div className="mt-5">
            <img
              src="media/images/zerodhaFundhouse.png"
              style={{ width: "50%" }}
            />
            <p className="p-3">Asset management</p>
          </div>
        </div>
        <div
          className="col-4"
          style={{ alignItems: "center", justifyContent: "center" }}
        >
          <div className="mt-5">
            <img src="media/images/streakLogo.png" style={{ width: "50%" }} />
            <p className="">Algo & Strategy platform</p>
          </div>
          <div className="mt-5 p-2">
            <img src="media/images/goldenpiLogo.png" style={{ width: "50%" }} />
            <p className="p-3">Bonds trading platform</p>
          </div>
        </div>
        <div
          className="col-4"
          style={{ alignItems: "center", justifyContent: "center" }}
        >
          <div className="mt-5">
            <img
              src="media/images/sensibullLogo.svg"
              style={{ width: "50%" }}
              className="mt-3"
            />
            <p className="p-4">Options trading platform</p>
          </div>
          <div className="mt-4">
            <img
              src="media/images/dittoLogo.png"
              style={{ width: "30%", height: "10%" }}
            />
            <p className="mt-4">Insurance</p>
          </div>
        </div>
        <button
          className="btn btn-primary mt-5 p-2 mb-5"
          style={{ width: "15%", margin: "0 auto" }}
          onClick={handleSignupClick}
        >
          Sign up for free
        </button>
      </div>
    </div>
  );
}

export default Universe;
