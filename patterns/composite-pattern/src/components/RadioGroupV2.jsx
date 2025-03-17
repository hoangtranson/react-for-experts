import { useState } from "react";
import PopularIcon from "../assets/popular.svg?react";

export function RadioGroupV2({ name, options, onChange }) {
  const [selectedValue, setSelectedValue] = useState("");
  const handleChange = (e) => {
    setSelectedValue(e.target.value);
    if (onChange) {
      onChange(e.target.value);
    }
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
      }}
    >
      {options.map((option, index) => (
        <label
          key={index}
          style={option.isPopular ? { border: "1px dashed red" } : undefined}
        >
          {option.icon && <span><option.icon style={{ marginLeft: "4px", height: "16px", width: "16px" }}></option.icon> </span>}
          <input
            type="radio"
            name={name}
            value={option.value}
            checked={selectedValue === option.value}
            onChange={handleChange}
          />
          {option.label}
          {option.postfix && <em> {option.postfix}</em>}
          {selectedValue === option.value && option.details}
          {option.isPopular ? (
            <strong>
              <PopularIcon style={{ marginLeft: "4px", height: "16px" }} /> Popular!
            </strong>
          ) : null}
        </label>
      ))}
    </div>
  );
}
