import { useState } from 'react'
import { Avatar, Button, Card, CardActions, CardContent, CardHeader, CardMedia, IconButton, Menu, MenuItem, Typography } from '@mui/material'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import FavoriteIcon from '@mui/icons-material/Favorite'
import { Link, useNavigate } from 'react-router-dom'
import { useLang } from '../../../contexts/lang-context'

const CardPlantsToKeep = ({ path, username, date1, date2, title, description, image, actionBtn1, iconBtnAction2, actionBtn2 }) => {
  const [anchorEl, setAnchorEl] = useState(null)
  const [isKept, setIsKept] = useState(false)
  const open = Boolean(anchorEl)
  const navigate = useNavigate()
  const lg = useLang('common.root')

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  const handleKeepIt = () => {
    isKept ? setIsKept(false) : setIsKept(true)
  }

  function stringToColor(string) {
    let hash = 0
    let i

    for (i = 0; i < string.length; i += 1) {
      hash = string.charCodeAt(i) + ((hash << 5) - hash)
    }

    let color = '#'

    for (i = 0; i < 3; i += 1) {
      const value = (hash >> (i * 8)) & 0xff
      color += `00${value.toString(16)}`.slice(-2)
    }

    return color
  }

  function stringAvatar(name) {
    return {
      sx: {
        bgcolor: stringToColor(name)
      },
      children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`
    }
  }

  function cropMessage(message, lengthMax) {
    if (message.length <= lengthMax) {
      return message // Retourne le message tel quel s'il est déjà assez court
    } else {
      return message.slice(0, lengthMax) + '...' // Retourne les premiers caractères jusqu'à la longueur maximale, suivi de "..."
    }
  }

  return (
    <>
      <Card
        sx={{
          maxWidth: 345,
          borderRadius: '12px',
          backgroundColor: '#F1F3E8'
        }}
      >
        <CardHeader
          sx={{
            display: {
              xs: 'none',
              sm: 'none',
              md: 'flex',
              xl: 'flex'
            }
          }}
          avatar={<Avatar {...stringAvatar(username)} aria-label="recipe" alt={username} />}
          action={
            <IconButton
              aria-label="settings"
              id="long-button"
              aria-controls={open ? 'long-menu' : undefined}
              aria-expanded={open ? 'true' : undefined}
              aria-haspopup="true"
              onClick={handleClick}
            >
              <MoreVertIcon />
            </IconButton>
          }
          title={username}
          subheader={lg('prefix.from') + date1 + lg('prefix.at') + date2}
        />
        <Menu
          id="long-menu"
          MenuListProps={{
            'aria-labelledby': 'long-button'
          }}
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          PaperProps={{
            style: {
              width: '20ch'
            }
          }}
        >
          <MenuItem onClick={() => navigate(path)}>
            {iconBtnAction2}
            {actionBtn2}
          </MenuItem>
        </Menu>
        <Link to={path} key={title} onClick={() => navigate(path)} className="no-underline">
          <CardMedia
            sx={{
              height: {
                xs: 180,
                sm: 180,
                md: 230,
                xl: 260
              },
              borderRadius: {
                xs: '12px',
                sm: '12px',
                md: 0
              }
            }}
            image={image}
            title={title}
          />
          <CardContent
            sx={{
              textAlign: 'start'
            }}
          >
            <Typography
              gutterBottom
              sx={{
                fontSize: '18px',
                fontWeight: 500
              }}
              component="div"
            >
              {title}
            </Typography>
            <Typography
              sx={{
                fontSize: '16px'
              }}
              color="text.secondary"
            >
              {cropMessage(description, 85)}
            </Typography>
          </CardContent>
        </Link>
        <CardActions
          sx={{
            display: {
              xs: 'none',
              sm: 'none',
              md: 'flex',
              xl: 'flex'
            },
            justifyContent: 'end',
            p: 2
          }}
        >
          <Button
            onClick={handleKeepIt}
            size="small"
            variant="outlined"
            startIcon={isKept ? <FavoriteIcon sx={{ color: 'red' }} /> : <FavoriteBorderIcon />}
            sx={{
              color: '#43493E',
              borderColor: '#386A20',
              backgroundColor: '#F1F3E8',
              borderRadius: 100,
              ':hover': {
                borderColor: '#386A20',
                backgroundColor: '#FFFFFA'
              }
            }}
          >
            {actionBtn1}
          </Button>
        </CardActions>
      </Card>
    </>
  )
}

export default CardPlantsToKeep
