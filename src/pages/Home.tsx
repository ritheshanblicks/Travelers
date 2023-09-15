import { Grid } from '@material-ui/core';
import React from 'react';

const Home: React.FC = () => {
  return (
    <>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        style={{ marginTop: '5%' }}
      >
        <Grid container justifyContent="center">
          <p className="home-title font-extra-bold bold text-nc-3 ">
            Task Muse Application
          </p>
        </Grid>
        <Grid item xs={6} md={4} style={{ margin: '10px' }}>
          <p>This Application is:</p>
          <div style={{ border: '1px solid', padding: '20px' }}>
            <li>A Tool to create user stories & tasks</li>
            <li>Capable of incorporating your technology stack</li>
          </div>
        </Grid>
        <Grid item xs={6} md={4} style={{ margin: '10px' }}>
          <p>This Application is Not:</p>
          <div style={{ border: '1px solid', padding: '20px' }}>
            <li>A Tool to create user stories & tasks</li>
            <li>Capable of incorporating your technology stack</li>
          </div>
        </Grid>
      </Grid>
    </>
  );
};

export default Home;
