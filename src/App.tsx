import React from "react";
import "./App.css";
import { pizzas, rules } from "./data";
import CheckOut from "./CheckOut";

function App() {
  const [smallPizza, mediumPizza, largePizza] = pizzas;
  const co = new CheckOut(rules);
  co.add(smallPizza);
  co.add(mediumPizza);
  co.add(largePizza);
  const total = co.total(pizzas, 2);

  return (
    <>
      <div>{JSON.stringify(co.checkOutItems)}</div>
      <div>total: {total} </div>
    </>
  );
}

export default App;
