import { useState } from "react";
import { RadioGroupV2 } from "./components/RadioGroupV2";
import AvocadoIcon from "./assets/avocado.svg?react";
import BaconIcon from "./assets/bacon.svg?react";

import "./App.css";

function AppV2() {
  const [data, setData] = useState({
    meal: "",
    bread: "",
    side: "",
    beverage: "",
  });

  const onChange = (name) => (value) => setData({ ...data, [name]: value });

  const meals = [
    { value: "small", label: "Small: $5.99" },
    { value: "medium", label: "Medium: $7.99" },
    { value: "large", label: "Large: $9.99" },
  ];
  const breads = [
    { value: "bagel", label: "Bagel" },
    { value: "roll", label: "Roll" },
    { value: "croissant", label: "Croissant", isPopular: true },
  ];
  const sides = [
    { value: "avocado", label: "Avocado", icon: AvocadoIcon },
    { value: "bacon", label: "Bacon", icon: BaconIcon },
  ];

  const beverages = [
    { value: "orangejuice", label: "Orange Juice" },
    {
      value: "coffee",
      label: "Coffee",
      details: (
        <select name="coffee_size">
          <option>Small</option>
          <option>Medium</option>
          <option>Large</option>
        </select>
      ),
    },
  ];

  return (
    <main>
      <h1>Breakfast order form</h1>
      <h2>Meal</h2>
      <RadioGroupV2 name="meal" options={meals} onChange={onChange("meal")} />
      <h2>Bread</h2>
      <RadioGroupV2 name="meal" options={breads} onChange={onChange("bread")} />
      <h2>Side</h2>
      <RadioGroupV2 name="side" options={sides} onChange={onChange("side")} />
      <h2>Beverage</h2>
      <RadioGroupV2
        name="beverage"
        options={beverages}
        onChange={onChange("beverage")}
      />
    </main>
  );
}

export default AppV2;
