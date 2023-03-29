import react, {useState} from 'react'
import { styled } from '@mui/material/styles'
import MuiDrawer from '@mui/material/Drawer'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import YardOutlinedIcon from '@mui/icons-material/YardOutlined';
import PlantIcon from './svg/PlantIcon'
import HomeIcon from './svg/HomeIcon'
import { Button, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { logout } from '../../services/auth.service'

const drawerWidth = 240

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen
  }),
  overflowX: 'hidden'
})

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(6)})`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(11)})`
  }
})

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: 'nowrap',
  boxSizing: 'border-box',
  ...(open && {
    ...openedMixin(theme),
    '& .MuiDrawer-paper': openedMixin(theme)
  }),
  ...(!open && {
    ...closedMixin(theme),
    '& .MuiDrawer-paper': closedMixin(theme)
  })
}))

// Composant Menu Exporté
const DesktopMenu = () => {
  const navigate = useNavigate();

  return (
    <Drawer variant="permanent" sx={{ width: "88px", }} PaperProps={{ sx: {
      backgroundColor: '#EBEFE2',
    } }}>
      <List sx={{  py: 5 }}>
        {['Accueil', 'Mes Plantes', 'Plantes gardées'].map((text, index) => (
          <ListItem key={text} disablePadding sx={{ display: 'block' }}>
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: 'center',
                px: 2.5,
                mb: 4,
                ':hover': {
                  backgroundColor: 'transparent',
                  color: 'transparent',
                }
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: 'auto',
                  justifyContent: 'center',
                }}
              >
                {
                index === 0 ?
                <Button
                  onClick={()=>navigate("/")}
                  sx={{ 
                    "& .MuiButton-startIcon": { margin: "0px" },
                    textTransform: 'unset !important',
                    color: '#386A20',
                    ':hover': {
                      backgroundColor: 'transparent',
                    },
                  }}
                  startIcon={<HomeIcon fontSize="small" sx={{ color: '#43493E' }} />}
                  variant="text"
                  // onClick={handleClickOpen} 
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                }}>
                  <Typography sx={{ fontSize: '12px', color: '#43493E', mt: '8px' }}>
                    Accueil
                  </Typography>
                </Button> : 
                index === 1 ? 
                <Button
                  onClick={()=>navigate("/mes-plantes")}
                  sx={{ 
                    "& .MuiButton-startIcon": { margin: "0px" },
                    textTransform: 'unset !important',
                    color: '#386A20',
                    ':hover': {
                      backgroundColor: 'transparent',
                    },
                  }}
                  startIcon={<PlantIcon fontSize="small" sx={{ color: '#43493E' }} />}
                  variant="text"
                  // onClick={handleClickOpen} 
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                }}>
                  <Typography sx={{ fontSize: '12px', color: '#43493E', mt: '8px' }}>
                    Mes
                  </Typography>
                  <Typography sx={{ fontSize: '12px', color: '#43493E' }}>
                    Plantes
                  </Typography>
                </Button>
                : 
                <Button
                  onClick={()=>navigate("/plantes-gardees")}
                  sx={{ 
                    "& .MuiButton-startIcon": { margin: "0px" },
                    textTransform: 'unset !important',
                    color: '#386A20',
                    ':hover': {
                      backgroundColor: 'transparent',
                    },
                  }}
                  startIcon={<YardOutlinedIcon fontSize="small" sx={{ color: '#43493E' }} />}
                  variant="text"
                  // onClick={handleClickOpen} 
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                }}>
                  <Typography sx={{ fontSize: '12px', color: '#43493E', mt: '8px' }}>
                    Plantes
                  </Typography>
                  <Typography sx={{ fontSize: '12px', color: '#43493E' }}>
                    gardées
                  </Typography>
                </Button>
                }
              </ListItemIcon>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <div style={{position: "fixed", bottom: '5%', textAlign: "center", paddingBottom: 10}}>
        <Button variant="text" sx={{fontSize: '12px', color: '#43493E'}} onClick={logout}>Déconnexion</Button>
      </div>
      <div style={{position: "fixed", bottom: 0, textAlign: "center", paddingBottom: 10}}>
        <Button variant="text" sx={{fontSize: '12px', color: '#43493E'}}>CGV</Button>
      </div>
      
    </Drawer>
  )
}

export default DesktopMenu