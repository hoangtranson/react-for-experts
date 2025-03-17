import { useContext } from "react";
import { RadioGroupContext, RadioOptionContext } from "./contexts";
import PopularIcon from "../../assets/popular.svg?react";

export function Option({ value, icon, isPopular, children }) {
  const { name, selectedValue, onChange } = useContext(RadioGroupContext);
  const isSelected = selectedValue === value;
  return (
    <label style={isPopular ? { border: "1px dashed red" } : null}>
      {icon && <span><icon style={{ marginLeft: "4px", height: "16px", width: "16px" }}></icon> </span>}
      <input
        type="radio"
        value={value}
        name={name}
        checked={isSelected}
        onChange={() => onChange(value)}
      />
      <RadioOptionContext.Provider value={isSelected}>
        {children}
      </RadioOptionContext.Provider>
      {isPopular ? <strong><PopularIcon style={{ marginLeft: "4px", height: "16px" }} /> Popular!</strong> : null}
    </label>
  );
}
