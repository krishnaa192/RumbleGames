import * as React from 'react';
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';

export default function CircularColor() {
  return (
    <div className='loader' style={{
      display: 'flex',
          alignContent: 'center',
          justifyContent: 'center',
          alignItems: 'center',
          flexWrap: 'wrap',
          height: '100vh'
    }}>
    <Stack sx={{ color: 'grey.500' }} spacing={2} direction="row">
   
      <CircularProgress color="success" />
     
    </Stack>
    </div>
  );
}
