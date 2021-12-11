import React from 'react';
import { useLocation } from 'react-router-dom';

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';

import Layout from './Layout';
import './Homepage.css';

// A custom hook that builds on useLocation to parse
// the query string for you.
function useQuery() {
  const { search } = useLocation();

  return React.useMemo(() => new URLSearchParams(search), [search]);
}

function Item(props: any) {
  const { sx, ...other } = props;
  return (
    <Paper
      sx={{
        bgcolor: 'background.paper',
        color: 'black',
        p: 0.25,
        m: 0.25,
        borderRadius: 0,
        textAlign: 'center',
        fontSize: '1rem',
        fontWeight: '700',
        ...sx,
      }}
      {...other}
    />
  );
}

const Homepage = () => {
  const query = useQuery();
  const code = query.get('code');

  let msg;

  switch (code) {
    case 'gordon':
      msg = 'You suck!';
      break;
    default:
      msg = 'Wishing a happy holiday season and amazing new year to you and your family!';
  }

  return (
    <Container sx={{ mt: 6 }}>
      <Box className='holiday-card-row' sx={{
        bgcolor: 'background.paper',
      }}>
        <Item id='photo-1' sx={{ flexGrow: 1 }} className='photo'/>
        <Item id='photo-2' sx={{ flexGrow: 1 }} className='photo'/>
        <Item id='photo-3' sx={{ flexGrow: 1 }} className='photo'/>
        <Item id='photo-4' sx={{ flexGrow: 1 }} className='photo'/>
      </Box>
      <Box className='holiday-card-row' sx={{
        bgcolor: 'background.paper',
      }}>
        <Item sx={{ flexGrow: 2 }} id='greeting'>
          <h2 className='greeting-header'>HAPPY HOLIDAYS</h2>
          <p className='handwriting'>
            {msg}
          </p>
        </Item>
        <Item id='photo-5' sx={{ flexGrow: 1 }} className='photo'/>
      </Box>
      <Box className='holiday-card-row' sx={{
        bgcolor: 'background.paper',
      }}>
        <Item id='photo-6' sx={{ flexGrow: 1 }} className='photo'/>
        <Item id='photo-7' sx={{ flexGrow: 1 }} className='photo'/>
        <Item id='photo-8' sx={{ flexGrow: 1 }} className='photo'/>
        <Item id='photo-9' sx={{ flexGrow: 1 }} className='photo'/>
      </Box>
    </Container>
  );
};

export default Homepage;
