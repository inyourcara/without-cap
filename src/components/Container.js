import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Block1 from './Block1';

export default function SimpleContainer() {
  return (
    <React.Fragment>
      <CssBaseline />
    
        <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '100vh' }} />
   
      
    </React.Fragment>
  );
}
