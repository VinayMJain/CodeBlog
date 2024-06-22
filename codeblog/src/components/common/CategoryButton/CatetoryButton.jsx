import React from 'react'
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import blogs from '../../../blogs.json';

export const CatetoryButton = () => {
  const [alignment, setAlignment] = React.useState('web');

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  return (
    <ToggleButtonGroup
    color="primary"
    value={alignment}
    exclusive
    onChange={handleChange}
    aria-label="Platform"
    sx={{
      marginLeft: '30px',
      marginTop: '20px',
      backgroundColor: 'white',
      color: "white",
      "button": {
        backgroundColor: "#508ba3"
      },
    }}
  >
    <ToggleButton value="all">All</ToggleButton>
    {blogs.map((blog, index) => (
      <ToggleButton key={index} value={blog.category}>{blog.category}</ToggleButton>
    ))}
  </ToggleButtonGroup>
  )
}


// <ButtonGroup 
// variant="contained" 
// aria-label="Basic button group"
// sx={{
//   marginLeft: '30px',
//   marginTop: '20px',
//   backgroundColor: 'white',
//   color: 'black',
//   "button": {
//     backgroundColor: "#224452"
//   },
//   // TODO: Add hover effect & Background color change to white
// }}
// >
// <Button>ALL</Button>
// {blogs.map((blog, index) => (
//   <Button key={index}>{blog.category}</Button>
// ))}
// </ButtonGroup>