import React from 'react'
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import blogs from '../../../blogs.json';

export const CatetoryButton = ({ selectedCategory, setSelectedCategory }) => {

  const handleChange = (event, newCategory) => {
    if (newCategory !== null) {
      setSelectedCategory(newCategory);
    }
  };

  return (
    <ToggleButtonGroup
      aria-label="Platform"
      color="primary"
      exclusive
      onChange={handleChange}
      value={selectedCategory}
      sx={{
        backgroundColor: 'white',
        color: "white",
        "button": {
          backgroundColor: "#508ba3"
        },
      }}
    >
    <ToggleButton value="all"  >All</ToggleButton>
    {blogs.map((blog, index) => (
      <ToggleButton 
        key={index} 
        value={blog.category}
      >{blog.category}</ToggleButton>
    ))}
  </ToggleButtonGroup>
  )
}