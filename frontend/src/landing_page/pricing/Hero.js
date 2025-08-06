import React from 'react';

function Hero() {
    return (  
        <div className='contaner mt-5'>
            <div className='row p-5 mt-5 text-center border-bottom'>
                <h1>Pricing</h1>
                <p className='mt-4 mb-5 text-muted fs-5'> Free equity investments and flat ₹20 traday and F&O trades</p>
            </div>
            <div className='row mt-5 p-5 text-center'>
                <div className='col-4 p-4'>
                    <img src="media/images/pricingEquity.svg" style={{width:"70%"}}/>
                    <h1 className='mt-3 fs-3 mb-3'>Free equity delivery</h1>
                    <p className='text-muted'>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
                </div>
                <div className='col-4 p-4'>
                    <img src="media/images/intradayTrades.svg" style={{width:"70%"}} />
                    <h1 className='mt-3 fs-3 mb-3'>Intraday and F&O trades</h1>
                    <p className='text-muted'>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
                </div>
                <div className='col-4 p-4'>
                    <img src="media/images/pricingEquity.svg" style={{width:"70%"}}/>
                    <h1 className='mt-3 fs-3 mb-3'>Free direct MF</h1>
                    <p className='text-muted'>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
                </div>
            </div>
        </div>
    );
}

export default Hero;