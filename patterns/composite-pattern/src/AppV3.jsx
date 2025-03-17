import { useState } from "react";
import RadioGroup from "./components/RadioGroupV3";
import AvocadoIcon from "./assets/avocado.svg?react";
import BaconIcon from "./assets/bacon.svg?react";

import "./App.css";

function AppV3() {
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
      <h1>Breakfast order form 3</h1>
      <h2>Meal</h2>
      <RadioGroup name="meal" onChange={onChange("meal")}>
        {meals.map((meal) => (
          <RadioGroup.Option key={meal.value} value={meal.value}>
            {meal.label}
          </RadioGroup.Option>
        ))}
      </RadioGroup>
      <h2>Bread</h2>
      <RadioGroup name="bread" onChange={onChange("bread")}>
        {breads.map((bread) => (
          <RadioGroup.Option key={bread.value} value={bread.value} isPopular={bread.isPopular}>
            {bread.label}
          </RadioGroup.Option>
        ))}
      </RadioGroup>
      <h2>Side</h2>
      <RadioGroup name="side" onChange={onChange("side")}>
        {sides.map((side) => (
          <RadioGroup.Option key={side.value} value={side.value} icon={side.icon}>
            {side.label}
          </RadioGroup.Option>
        ))}
      </RadioGroup>
      <h2>Beverage</h2>
      <RadioGroup name="beverage" onChange={onChange("beverage")}>
        {beverages.map((beverage) => (
          <RadioGroup.Option key={beverage.value} value={beverage.value}>
            {beverage.label}
            {beverage.details && <RadioGroup.Details>{beverage.details}</RadioGroup.Details>}
          </RadioGroup.Option>
        ))}
      </RadioGroup>
    </main>
  );
}

export default AppV3;
