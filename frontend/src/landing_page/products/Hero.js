import React from 'react';

function Hero() {
    return (  
        <div className='container border-bottom mb-5'>
            <div className='row mt-5 p-5 text-center'>
                <h1>Technology</h1>
                <h5 className='text-muted p-3'>Sleek, modern and intuitive trading platforms</h5>
                <p className='mb-5'>Check out our<a href='' style={{textDecoration:"none"}}> investment offerings <i class="fa fa-long-arrow-right" aria-hidden="true"></i> </a></p>
            </div>
        </div>
    );
}

export default Hero;