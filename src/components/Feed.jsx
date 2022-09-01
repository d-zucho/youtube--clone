// import { useState, useEffect } from 'react'
import { Box, Stack, Typography } from '@mui/material'
import SideBar from './SideBar'

const Feed = () => {
  return (
    <Stack sx={{ flexDirection: { sx: 'column', md: 'row' } }}>
      {/* This means that usually it is a column, but at MEDIUM DEVICES and up, 
      it will be set to row */}

      {/* For SIDEBAR component */}
      <Box
        sx={{
          height: { sx: 'auto', md: '92vh' },
          borderRight: '1px solid #3d3d3d',
          px: { sx: 0, md: 2 },
        }}
      >
        <SideBar />
        <Typography
          className='copyright'
          variant='body2'
          sx={{ mt: 1.5, color: '#fff' }}
        >
          Copyright 2022 Zukko Media
        </Typography>
      </Box>

      {/* For VIDEOLIST  */}
      <Box>
        <Typography variant='h4' fontWeight='bold' mb={2}>
          <span
            style={{
              color: '#F31503',
            }}
          >
            videos
          </span>
        </Typography>
      </Box>
    </Stack>
  )
}

export default Feed
