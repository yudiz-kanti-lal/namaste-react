import { useEffect, useState } from 'react';
import RestaurentCard from './RestaurantCard';
import { resList } from '../utils/mockData';
import { SWIGGY_API_URL } from '../utils/constants';
const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState(resList);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(SWIGGY_API_URL);
    const json = await data.json();
    console.log('json', json);
    console.log(
      'json',
      json.data.cards[2].card.card.gridElements.infoWithStyle.restaurants
    );
    setListOfRestaurants(
      json.data.cards[2].card.card.gridElements.infoWithStyle.restaurants
    );
  };

  return (
    <div className='body'>
      <div className='filter'>
        <button
          className='filter-btn'
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4
            );
            setListOfRestaurants(filteredList);
            console.log('filterdata', filteredList);
          }}
        >
          Top rated restaurant
        </button>
      </div>
      <div className='res-container'>
        {listOfRestaurants.map((restaurent) => {
          return (
            <RestaurentCard key={restaurent.info.id} resData={restaurent} />
          );
        })}
      </div>
    </div>
  );
};

export default Body;
