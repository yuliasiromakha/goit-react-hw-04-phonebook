import React from "react";
import PropTypes from "prop-types";

const FilterContact = ({ filter, onFilterChange }) => {
  const handleInputChange = (event) => {
    const { value } = event.target;
    onFilterChange(value.toLowerCase());
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search contacts"
        value={filter}
        onChange={handleInputChange}
      />
    </div>
  );
};

FilterContact.propTypes = {
  filter: PropTypes.string.isRequired,
  onFilterChange: PropTypes.func.isRequired
};

export default FilterContact;
