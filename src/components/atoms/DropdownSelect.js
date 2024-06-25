import React, { useState } from 'react';

export default function DropdownSelect({choices}) {
  const [selectedValue, setSelectedValue] = useState('');
  const options = [];

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    <select value={selectedValue} onChange={handleChange}>
      <option value="">Select {choices}</option>
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
}