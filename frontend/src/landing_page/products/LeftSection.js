import React from "react";

function LeftSection({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container mt-5">
      <div className="row mt-5">
        <div className="col-6">
          <img src={imageURL} />
        </div>
        <div className="col-6 p-5">
          <h1>{productName}</h1>
          <p className="mt-4 text-muted">{productDescription}</p>
          <div className="mt-4">
            <a href={tryDemo} className="leftSection-link">Try Demo <i class="fa fa-long-arrow-right" aria-hidden="true"></i> </a>
            <a href={learnMore} className="leftSection-link">
              Learn More <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
          </div>
          <div className="mt-4">
            <a href={googlePlay}>
              <img src="media/images/googlePlayBadge.svg" />
            </a>
            <a href={appStore}>
              <img
                src="media/images/appstoreBadge.svg"
                style={{ marginLeft: "50px" }}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
