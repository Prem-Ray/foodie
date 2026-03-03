import { useState, useEffect } from "react";
import { FETCH_RESTAURANTS } from "../constant";

const useRestaurants = (lat, lng) => {
  const [restaurants, setRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getRestaurantList();
  }, []);

  async function getRestaurantList() {
    try {
      const response = await fetch(FETCH_RESTAURANTS(lat,lng)
      );
      const dataResponse = await response.json();
      // console.log("FULL DATA:", dataResponse?.data?.cards);
      //  const restaurants = dataResponse?.data?.cards
      //   ?.map((card) =>
      //     card?.card?.card?.gridElements?.infoWithStyle?.restaurants
      //   )
      //   ?.find(Boolean);

      // console.log("RESTAURANTS:", restaurants);

      //  setRestaurants(restaurants || []);
      // setFilteredRestaurants(restaurants || []);

      const apiData1 = dataResponse?.data?.cards
        ?.map(
          (card) => card?.card?.card?.gridElements?.infoWithStyle?.restaurants,
        )
        ?.find((res) => res && res.length > 0);

      const apiData2 =
        dataResponse?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants;

      setFilteredRestaurants(apiData1 || []);
      setRestaurants(apiData1 || []);
    } catch (error) {
      console.log("error", error);
      setHasError(true);
    } finally {
      setIsLoading(false);
    }
  }

  return {
   restaurants ,
   filteredRestaurants,
   hasError,
   isLoading,
  }
};

export default useRestaurants;
