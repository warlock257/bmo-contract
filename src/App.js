import React, { useState, useEffect } from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import Card from "./components/Card";
import Header from "./components/Header";

import { getRestaurantsAction } from "./redux/restaurantsReducer";

function App() {
  const [nameFilter, setNameFilter] = useState("");
  const [priceFilter, setPriceFilter] = useState("all");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRestaurantsAction("Toronto"));
  }, [dispatch]);

  const { isLoading, city, restaurants } = useSelector(
    (state) => state.restaurants
  );

  const searchByCity = (city) => {
    dispatch(getRestaurantsAction(city));
  };

  if (isLoading) {
    return <p>Loading...</p>;
  }

  const restaurantMap = restaurants
    .filter((rest) => {
      let searchString = rest.name.toLowerCase();
      return searchString.indexOf(nameFilter.toLowerCase()) !== -1;
    })
    .filter((rest) => {
      if (priceFilter !== 'all'){
        return rest.price === Number(priceFilter)
      } else {
        return rest
      }
    })
    .map((rest) => {
      return (
        <Card
          key={rest.id}
          name={rest.name}
          address={rest.address}
          price={rest.price}
        />
      );
    });

  return (
    <div className="App">
      <Header city={city} searchByCity={searchByCity} />
      <input
        type="text"
        className="filterInput"
        placeholder="Filter by restaurant name"
        value={nameFilter}
        onChange={(e) => setNameFilter(e.target.value)}
      />
      <br />
      <label htmlFor="price">Filter by price</label>
      <select
        name="price"
        className="priceDropdown"
        value={priceFilter}
        onChange={(e) => setPriceFilter(e.target.value)}
      >
        <option value="1">$</option>
        <option value="2">$$</option>
        <option value="3">$$$</option>
        <option value="4">$$$$</option>
        <option value="all">Show All</option>
      </select>

      <main className="restaurantCards">{restaurantMap}</main>
    </div>
  );
}

export default App;
