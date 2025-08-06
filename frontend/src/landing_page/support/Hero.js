import React from "react";

function Hero() {
  return (
    <section className="container-fluid" id="supportHero">
      <div className="p-5" id="supportWrapper">
        <h4>Support Portal</h4>
        <a href="">Track Tickets</a>
      </div>
      <div className="row m-5" id="supportWrapper">
        <div className="col p-3 line-height margin-left">
          <p className="fs-3 mb-4">
            Search for an answer or browse help topics to create a ticket
          </p>
          <input placeholder="Eg. how do I activate F&O, why is my order getting rejected.." className="mb-4"/>
          <br />
          <a href="">Track account opening</a> &nbsp;
          <a href="">Track segment activation</a> &nbsp;
          <a href="">Intraday margins</a> &nbsp;
          <a href="">Kite user manual</a>
        </div>
        <div className="col p-3 line-height margin-left">
          <p className="fs-3">Featured</p>
          <ol>
            <li>
              <a href="">Current Takeovers and Delisting - January 2024</a>
            </li>
            <li>
              <a href="">Latest Intraday leverages - MIS & CO</a>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}

export default Hero;
