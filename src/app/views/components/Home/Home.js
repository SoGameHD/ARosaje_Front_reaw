import { Box, CssBaseline } from '@mui/material'
import Dashboard from '../Dashboard/Dashboard'
import Menu from '../Menu/Menu'
import PlantPhotoTaker from '../Photo/Photo'

const Home = () => {
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Menu />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Dashboard />
      </Box>
      <PlantPhotoTaker />
    </Box>
  )
}

export default Home
