import React from 'react'
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import blogs from '../../../blogs.json';

export const CatetoryButton = () => {
  return (
    <ButtonGroup 
      variant="contained" 
      aria-label="Basic button group"
      sx={{
        marginLeft: '30px',
        marginTop: '20px',
        backgroundColor: 'white',
        color: 'black',
        "button": {
          backgroundColor: "#224452"
        },
        // TODO: Add hover effect & Background color change to white
      }}
    >
      <Button>ALL</Button>
      {blogs.map((blog, index) => (
        <Button key={index}>{blog.category}</Button>
      ))}
    </ButtonGroup>
  )
}
