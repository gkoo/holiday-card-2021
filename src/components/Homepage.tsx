import React from 'react';
import { useLocation } from 'react-router-dom';

import { styled } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';

import Layout from './Layout';
import vaccineImg from '../images/vaccine.jpg';
import './Homepage.css';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

// A custom hook that builds on useLocation to parse
// the query string for you.
function useQuery() {
  const { search } = useLocation();

  return React.useMemo(() => new URLSearchParams(search), [search]);
}

const Homepage = () => {
  const query = useQuery();
  const page = query.get('page');

  if (!page) {
    return (
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={6} md={8}>
            <Item>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</Item>
          </Grid>
          <Grid item xs={6} md={4}>
            <Item id='photo-1' className='photo'/>
          </Grid>
          <Grid item xs={6} md={4}>
            <Item id='photo-2' className='photo'/>
          </Grid>
          <Grid item xs={6} md={8}>
            <Item>Here is another thing</Item>
          </Grid>
        </Grid>
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
