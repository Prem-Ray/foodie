import React, { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import { restaurantList } from "../constant";
import { styled } from "@mui/system";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Shimmer } from "./Shimmer";
import { Error } from "./Error";
import EmptyResult from "./EmptyResult";
import { Link } from "react-router-dom";
import { filterData } from "../utils/util";
import useGeoLocation from "../hooks/useGeoLocation";
import useRestaurants from "../hooks/useRestaurants";
import useOnline from "../hooks/useOnline";
import OfflineCard from "./OfflineCard";

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

export const Body = () => {
  const [searchText, setSearchText] = useState("");
  const { latitude, longitude } = useGeoLocation("");
  const { restaurants, filteredRestaurants, setFilteredRestaurants, hasError, isLoading } =
    useRestaurants(latitude, longitude);
  const isOnline = useOnline() ;
  
  if(!isOnline) return <OfflineCard/>
  if (hasError) return <Error />;
  if (isLoading) return <Shimmer />;

  return (
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
              const filtered = filterData(searchText, restaurants);
              setFilteredRestaurants(filtered);
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
      {filteredRestaurants.length === 0 ? (
        <EmptyResult />
      ) : (
        <StyledRestaurantCards>
          {filteredRestaurants.map((restaurant) => (
            <Link
              to={"/restaurant/" + restaurant?.info?.id}
              key={restaurant?.info?.id}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <RestaurantCard
                key={restaurant?.info?.id}
                Restaurant={restaurant}
              />
            </Link>
          ))}
        </StyledRestaurantCards>
      )}
    </>
  );
};
