import React from 'react';

function Rightsection({
  imageURL,
  productName,
  productDescription,
  learnMore,
}) {
  return (
    <div className="container mt-5">
      <div className="row mt-5">
        <div className="col-6 p-5 mt-5">
          <h1 className='mt-3'>{productName}</h1>
          <p className="mt-4 text-muted">{productDescription}</p>
          <div className="mt-4">
            <a href={learnMore} className="leftSection-link">Learn more<i class="fa fa-long-arrow-right" aria-hidden="true"></i> </a>
          </div>
        </div>
        <div className="col-6">
          <img src={imageURL} />
        </div>
      </div>
    </div>
  );
}

export default Rightsection;