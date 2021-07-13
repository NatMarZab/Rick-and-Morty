import React from "react";

const FilterGender = (props) => {
  const handleChange = (ev) => {
    props.handleFilter({
      value: ev.target.value,
      key: "gender",
    });
  };

  return (
    <>
      <label className="labelSelect"></label>
      <select
        className="input-select"
        name="filterselect"
        id=""
        value={props.filteredGender}
        onChange={handleChange}
      >
        <option>Selecciona</option>
        <option value="Female">Female</option>
        <option value="Male">Male</option>
      </select>
    </>
  );
};
export default FilterGender;
