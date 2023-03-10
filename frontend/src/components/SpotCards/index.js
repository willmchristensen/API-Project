import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink, Route } from 'react-router-dom';
import { getAllSpots } from '../../store/spots';
import SpotCardImage from '../SpotCardImage';
import './SpotCards.css';

const SpotCards = (spot) => {

let rating = spot.spot.avgRating;
let city = spot.spot.city;
let price = spot.spot.price;
const avgRating = Boolean(rating) ?  rating : '#.#';

  return (
    <NavLink 
        className="spot-card"
        key={spot.spot.name}
        to={`/spots/${spot.spot.id}`}
    >
        <div className="nav-link" >
            <div className="nav-link-image" >
                <SpotCardImage></SpotCardImage>
            </div>
            <div className="nav-link-info-primary">
                <h4>{city}</h4>
                {/* {console.log(Boolean(spot.spot.avgRating))} */}
                <div>
                    <i class="fas fa-star"></i>
                    {avgRating}
                </div>
            </div>
            <div className="nav-link-info-secondary">
                <h4>{price}</h4> 
            </div>
        </div>
    </NavLink>
  );
};

export default SpotCards;