import React from 'react'
import AcUnitIcon from '@mui/icons-material/AcUnit';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';

import Switch from '@mui/material/Switch';

import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


 
function ContactUs() {
 
    const [value, setValue] = React.useState(2);

    const label = { inputProps: { 'aria-label': 'Switch demo' } };


    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
      setExpanded(isExpanded ? panel : false);
    };



    
  return (

     <div className='container'>
    <h1>Contact us</h1>
    <AcUnitIcon/><AccessAlarmIcon/>
    <Box/><Rating/>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled 
      it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
      It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

    <Stack sx={{ width: '100%' }} spacing={2}>
      <Alert severity="error">This is an error alert — check it out!</Alert>
      <Alert severity="warning">This is a warning alert — check it out!</Alert>
      <Alert severity="info">This is an info alert — check it out!</Alert>
      <Alert severity="success">This is a success alert — check it out!</Alert>
    </Stack>

 
 
    <Box
      sx={{
        '& > legend': { mt: 2 },
      }}
    >
      <Typography component="legend">Controlled</Typography>
      <Rating
        name="simple-controlled"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      />
      <Typography component="legend">Read only</Typography>
 
    </Box>



    <Switch {...label} defaultChecked />
      <Switch {...label} />
      <Switch {...label} disabled defaultChecked />
      <Switch {...label} disabled />



      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
    <AccordionSummary
      expandIcon={<ExpandMoreIcon />}
      aria-controls="panel1bh-content"
      id="panel1bh-header"
    >
      <Typography sx={{ width: '33%', flexShrink: 0 }}>
        General settings
      </Typography>
      <Typography sx={{ color: 'text.secondary' }}>I am an accordion</Typography>
    </AccordionSummary>
    <AccordionDetails>
      <Typography>
        Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.
        Aliquam eget maximus est, id dignissim quam.
      </Typography>
    </AccordionDetails>
  </Accordion>
  <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
    <AccordionSummary
      expandIcon={<ExpandMoreIcon />}
      aria-controls="panel2bh-content"
      id="panel2bh-header"
    >
      <Typography sx={{ width: '33%', flexShrink: 0 }}>Users</Typography>
      <Typography sx={{ color: 'text.secondary' }}>
        You are currently not an owner
      </Typography>
    </AccordionSummary>
    <AccordionDetails>
      <Typography>
        Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus,
        varius pulvinar diam eros in elit. Pellentesque convallis laoreet
        laoreet.
      </Typography>
    </AccordionDetails>
  </Accordion>
  <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
    <AccordionSummary
      expandIcon={<ExpandMoreIcon />}
      aria-controls="panel3bh-content"
      id="panel3bh-header"
    >
      <Typography sx={{ width: '33%', flexShrink: 0 }}>
        Advanced settings
      </Typography>
      <Typography sx={{ color: 'text.secondary' }}>
        Filtering has been entirely disabled for whole web server
      </Typography>
    </AccordionSummary>
    <AccordionDetails>
      <Typography>
        Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
        amet egestas eros, vitae egestas augue. Duis vel est augue.
      </Typography>
    </AccordionDetails>
  </Accordion>
  <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
    <AccordionSummary
      expandIcon={<ExpandMoreIcon />}
      aria-controls="panel4bh-content"
      id="panel4bh-header"
    >
      <Typography sx={{ width: '33%', flexShrink: 0 }}>Personal data</Typography>
    </AccordionSummary>
    <AccordionDetails>
      <Typography>
        Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
        amet egestas eros, vitae egestas augue. Duis vel est augue.
      </Typography>
    </AccordionDetails>
  </Accordion>




    </div>
 
  );
}

export default ContactUs
