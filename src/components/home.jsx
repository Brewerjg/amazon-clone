import React from 'react'
import './home.css';
import Product from './product'

function Home() {
    return (
        <div className='home'>
            <div className='home__container'>
                <img className='home__image' src="https://m.media-amazon.com/images/I/611Hit0i2SL._SX3000_.jpg" alt="" />

                <div className='home__row'>
                    <Product/>
                </div>

                <div className='home__row'>
                    {/* product */}
                </div>

                <div className='home__row'>
                    {/* product */}
                </div>
            </div>
        </div>
    );
}

export default Home