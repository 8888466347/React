import React from 'react'



import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';


import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';


import { pink } from '@mui/material/colors';
import Checkbox from '@mui/material/Checkbox';

 

// import Pagination from '@mui/material/Pagination';
// import PaginationItem from '@mui/material/PaginationItem';
 
// import ArrowBackIcon from '@mui/icons-material/ArrowBack';
// import ArrowForwardIcon from '@mui/icons-material/ArrowForward';



// import Stack from '@mui/material/Stack';
// import Button from '@mui/material/Button';


const AboutUs = () => {

 

 
  
  
  
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

 
  return (
  
 
 




    <div className='container'>
    <h1>About us</h1>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled 
      it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
      It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.<br></br><br></br>
      
    <br></br>

 

 
 
    <br></br>

 
    <Stack direction="row" spacing={2}>
      <Button variant="contained">Contained</Button>
      <Button variant="contained" disabled>
        Disabled
      </Button>
      <Button variant="contained" href="#contained-buttons">
        Link
      </Button>
    </Stack>

 <br></br>
     
      <Checkbox {...label} defaultChecked />
      <Checkbox {...label} defaultChecked color="secondary" />
      <Checkbox {...label} defaultChecked color="success" />
      <Checkbox {...label} defaultChecked color="default" />
      <Checkbox
        {...label}
        defaultChecked
        sx={{
          color: pink[800],
          '&.Mui-checked': {
            color: pink[600],
          },
        }}
      />

 


<Stack spacing={2} direction="row">
    <Button variant="text">Text</Button>
    <Button variant="contained">Contained</Button>
    <Button variant="outlined">Outlined</Button>
  </Stack>



    </div>
  )
}

export default AboutUs
