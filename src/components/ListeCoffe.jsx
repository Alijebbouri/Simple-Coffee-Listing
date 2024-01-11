import React, { useEffect, useState } from 'react'
import '../css/ListeCoffe.css';
import Coffe from './Coffe';

function ListeCoffe() {
    const [coffe,setCoffe] = useState([]);
    useEffect(()=>{
        fetch('https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json')
        .then(response => response.json())
        .then(data => {
            setCoffe(data)
        })
    .catch(error => {
        console.log(error)
    })
    },[])
  return (
    <div className='container'>
        <div className='description'>
            <h1>Our Collection</h1>
            <p>Introducing our Coffee Collection, a selection of unique coffees from different roast types and origins, expertly roasted in small batches and shipped fresh weekly.</p>
        </div>
        <div className='buttons'> 
            <button className='btn-products'>All Products</button>
            <button className='btn-available'>Available Now</button>
        </div>
        <Coffe coffe={coffe}/>             
    </div>
  )
}

export default ListeCoffe;