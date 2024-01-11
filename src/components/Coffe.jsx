import React from 'react';
import '../css/coffe.css';
import Star from '../images/Star.svg';
import Star_fill from '../images/Star_fill.svg';

function Coffe({ coffe }) {
    return (
        <div className='card-item'>
            {coffe.map((item, index) => (
                <div key={index} className='card'>
                    <div>
                        <img src={item.image} alt='data' className='item-img' />
                        {item.popular === true ? <p className='popular'> Popular </p> : ''}
                    </div>
                    <div className='card-details'>
                        <h4 className='cafe-name'>{item.name}</h4>
                        <p className='price'>{item.price}</p>
                    </div>
                    <div>
                        {
                            item.rating !== null ? (
                                <div className='rating-deatils'>
                                    <div className='rating-start'>
                                        <img src={Star_fill}  alt='start-fill'/>
                                        <span className='rating-range'>{item.rating}</span> 
                                        <span className='vote'>{`(${item.votes} votes)`}</span>
                                    </div>
                                    <div className='status'>
                                    {
                                        item.available !== true ? (
                                            <span className='available' style={{ color:'#ED735C' }}>sold out</span>
                                        ):(
                                            ''
                                        )
                                    }
                                    </div>
                                    
                                </div>
                            ):(
                                <div className='no-rating'>
                                    <img src={Star}  alt='start'/>
                                    <span>No rating</span>
                                </div>
                            )
                        }
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Coffe;
