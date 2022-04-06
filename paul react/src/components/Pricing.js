import React from 'react'
import {Link} from 'react-router-dom'
import './PricingStyles.css'

const Pricing = () => {
    return (
        <div className='pricing'>
            <div className='card-container'>
                <div className='card'>
                    <h3> Bronze</h3>
                    <span className='bar'></span>
                    <p className='btc'>2,000 USD</p>
                    <p> 3 Days </p>
                    <p> Views </p>
                    <p> Hiking </p>
                    <p> Sight Seeing </p>
                    <Link to='/contact' className='btn'>Book</Link>
                </div>
                <div className='card'>
                    <h3> Silver </h3>
                    <span className='bar'></span>
                    <p className='btc'>4,000 USD</p>
                    <p> 5 Days</p>
                    <p> Views </p>
                    <p> Hiking </p>
                    <p> Sight Seeing </p>
                    <Link to='/contact' className='btn'>Book</Link>
                </div>
                <div className='card'>
                    <h3> Gold </h3>
                    <span className='bar'></span>
                    <p className='btc'>6,000 USD</p>
                    <p> 7 Days </p>
                    <p> Views </p>
                    <p> Hiking </p>
                    <p> Sight Seeing </p>
                    <Link to='/contact' className='btn'>Book</Link>
                </div>
            </div>
        </div>
    )
}

export default Pricing
