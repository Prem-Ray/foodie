import { useEffect, useState } from "react";
import { FETCH_MENU_URL } from "../constant";

const useRestaurantMenu = (resId,latitude,longitude) => {
  const [restaurant, setRestaurant] = useState(null);

  useEffect(() => {
  
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    const data = await fetch(FETCH_MENU_URL(resId,latitude,longitude));

    const response = await data.json();
    setRestaurant(response);
  }

  return restaurant;
};

export default useRestaurantMenu;
