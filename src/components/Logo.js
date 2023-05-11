import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { flexCenter } from 'themes/commonStyles';

const Logo = () => {
  return (
    <Box sx={flexCenter}>
      <Typography
        sx={{
          ml: 1,
          color: 'blue', // alterado para 'blue'
          fontSize: '20px',
          fontWeight: 'bold',
        }}
        component="h3"
      >
        Aluga-ce
      </Typography>
    </Box>
  );
};

export default Logo;