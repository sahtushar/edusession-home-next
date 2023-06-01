import { Cities } from "./../../utils/data/cities";
import { FixedSizeList as List } from "react-window";
import React from "react";
import Select from "react-select";

const VirtualMenuList = ({ children, maxHeight }) => {
  const height = 40; // Height of each option in pixels
  const itemCount = children.length; // Total number of options

  const itemSize = () => height; // Return the fixed height value directly

  const getItem = (index) => {
    return children[index];
  };

  return (
    <List
      height={maxHeight}
      itemCount={itemCount}
      itemSize={itemSize()} // Call the itemSize function to get the height value
      width="100%"
    >
      {({ index, style }) => <div style={style}>{getItem(index)}</div>}
    </List>
  );
};

const CitiesDropdown = ({ id, name, handleFeedbackChange }) => {
  const options = Cities.map((city) => ({
    label: `${city.city}, ${city.state}`,
    value: city.id,
  }));

  const handleOnChange = (selectedOption) => {
    // Do something with the selected option
    console.log("Selected Option:", selectedOption);
    // const { name, value } = event.target;
    // const [category, subCategory] = name.split(".");
    let e = {
      target: {
        name: name,
        value: selectedOption.label,
      },
    };
    handleFeedbackChange(e);
  };

  return (
    <Select
      options={options}
      components={{ MenuList: VirtualMenuList }}
      closeMenuOnSelect
      isSearchable
      id
      name
      onChange={(e) => {
        handleOnChange(e);
      }}
    />
  );
};

export default CitiesDropdown;
