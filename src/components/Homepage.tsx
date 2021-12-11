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
  const page = query.get('page');

  if (!page) {
    return (
      <Container>
        <Box className='holiday-card-row' sx={{
          p: 1,
          bgcolor: 'background.paper',
        }}>
          <Item id='photo-1' sx={{ flexGrow: 1 }} className='photo'/>
          <Item id='photo-2' sx={{ flexGrow: 1 }} className='photo'/>
          <Item id='photo-3' sx={{ flexGrow: 1 }} className='photo'/>
          <Item id='photo-4' sx={{ flexGrow: 1 }} className='photo'/>
        </Box>
        <Box className='holiday-card-row' sx={{
          p: 1,
          bgcolor: 'background.paper',
        }}>
          <Item sx={{ flexShrink: 2 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</Item>
          <Item id='photo-5' className='photo'/>
        </Box>
        <Box className='holiday-card-row' sx={{
          p: 1,
          bgcolor: 'background.paper',
        }}>
          <Item id='photo-6' sx={{ flexGrow: 1 }} className='photo'/>
          <Item id='photo-7' sx={{ flexGrow: 1 }} className='photo'/>
          <Item id='photo-8' sx={{ flexGrow: 1 }} className='photo'/>
          <Item id='photo-9' sx={{ flexGrow: 1 }} className='photo'/>
        </Box>
      </Container>
    );
  }

  return (
    <Layout>
      <Container>
        <h1>Location is: {query.get('page')}</h1>
      </Container>
    </Layout>
  );
};

export default Homepage;
