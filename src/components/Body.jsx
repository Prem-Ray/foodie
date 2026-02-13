import React, { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import { restaurantList } from "../constant";
import { styled } from "@mui/system";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Shimmer } from "./Shimmer";

export const StyledRestaurantCards = styled("div")(() => ({
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
  gap: "1.5rem",
  padding: "1.5rem 0",
}));

export const StyledInputSection = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "1rem",
  margin: "2rem 0",
}));

const filterData = (searchText, restaurants) => {
    return restaurants.filter((restaurant) =>
      restaurant?.info?.name?.toLowerCase().includes(searchText.toLowerCase()),
    );
  };

export const Body = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [filteredRestaurants,setFilteredRestaurants] = useState([]) ;
  const [searchText, setSearchText] = useState("");


  useEffect(() => {
    getRestaurantList();
  }, []);

  async function getRestaurantList() {
    try {
      const response = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.91080&lng=88.40010&page_type=DESKTOP_WEB_LISTING",
      );
      const dataResponse = await response.json();

      const apiData1 =
        dataResponse.data.cards[1].card.card.gridElements.infoWithStyle
          .restaurants;

      const apiData2 =
        dataResponse?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants;

      setRestaurants(apiData1);
      setFilteredRestaurants(apiData1) ;

    } catch (error) {
      console.log("error", error);
    }
  }

  console.log("render");

  return restaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <StyledInputSection>
        <TextField
          label="Search restaurants..."
          variant="outlined"
          sx={{
            width: "320px",
            "& .MuiOutlinedInput-root": {
              borderRadius: "12px",
              backgroundColor: "#fff",
            },
          }}
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              setRestaurants(filterData(searchText, restaurants));
            }
          }}
        />
        <Button
          variant="contained"
          sx={{
            height: "56px",
            borderRadius: "12px",
            px: "2rem",
            textTransform: "none",
            fontWeight: 600,
            backgroundColor: "#fc8019",
            "&:hover": {
              backgroundColor: "#e46f12",
            },
          }}
          onClick={() => {
            const filterResponse = filterData(searchText, restaurants);
            setFilteredRestaurants(filterResponse);
          }}
        >
          Search
        </Button>
      </StyledInputSection>
      <StyledRestaurantCards>
        {filteredRestaurants.map((restaurant) => (
          <RestaurantCard id={restaurant?.info?.id} Restaurant={restaurant} />
        ))}
      </StyledRestaurantCards>
    </>
  );
};
