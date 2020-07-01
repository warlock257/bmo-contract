import React, { useState, useEffect } from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import Card from "./components/Card";
import Header from "./components/Header";

import { getRestaurantsAction } from "./redux/restaurantsReducer";

function App() {
  const [filter, setFilter] = useState("");
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
      return searchString.indexOf(filter.toLowerCase()) !== -1;
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
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />

      <main className="restaurantCards">{restaurantMap}</main>
    </div>
  );
}

export default App;
