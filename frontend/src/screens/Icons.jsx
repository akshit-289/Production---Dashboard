import React from 'react'
import Navbar from '../components/Navbar'
import Box from '@mui/material/Box';
import Sidenav from '../components/Sidenav'

function Icons() {
  return (
    <div>
      <Navbar />
          <Box height={30}>
              <Box sx={{ display: "flex" }}>
                  <Sidenav />
                  <Box component="main" sx={{ flexGrow: 1, pl: 2, pt: 9, pr: 2, pb: 2, }}>
                      <h1 className='mt-10'>Icons</h1>
                  </Box>
              </Box>
          </Box>
    </div>
  )
}

export default Icons;