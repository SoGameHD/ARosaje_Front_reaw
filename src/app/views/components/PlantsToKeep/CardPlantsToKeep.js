import { useState } from "react";
import { Avatar, Button, Card, CardActions, CardContent, CardHeader, CardMedia, IconButton, Menu, MenuItem, Typography } from "@mui/material"
import MoreVertIcon from '@mui/icons-material/MoreVert';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Link, useNavigate } from "react-router-dom";

const CardPlantsToKeep = ({path, username, date1, date2, title, description, image, actionBtn1, iconBtnAction2, actionBtn2}) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [isKept, setIsKept] = useState(false);
  const open = Boolean(anchorEl);
  const navigate = useNavigate();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleKeepIt = () => {
    isKept ? setIsKept(false) : setIsKept(true);
  };

  return (
    <>
      <Card sx={{ 
        maxWidth: 345,
        borderRadius: '12px',
        backgroundColor: "#F1F3E8",
      }}>
        <CardHeader
          sx={{
            display: {
              xs: "none",
              sm: "none",
              md: "flex",
              xl: "flex",
            },
          }}
          avatar={
            <Avatar sx={{ bgcolor: "#D0E6C3" }} aria-label="recipe">
              R
            </Avatar>
          }
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
          subheader={'Du ' + date1 + ' au ' + date2}
        />
        <Menu
          id="long-menu"
          MenuListProps={{
            'aria-labelledby': 'long-button',
          }}
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          PaperProps={{
            style: {
              width: '20ch',
            },
        }}>
          <MenuItem onClick={() => navigate(path)}>
            {iconBtnAction2}
            {actionBtn2}
          </MenuItem>
        </Menu>
        <Link to={path} key={title} onClick={() => navigate(path)} className='no-underline'>
          <CardMedia
            sx={{ 
              height: {
                xs: 180,
                sm: 194,
                md: 230,
                xl: 260,
              },
              borderRadius: {
                xs: '12px',
                sm: '12px',
                md: 0
              },
            }}
            image={image}
            title="green flower"
          />
          <CardContent sx={{
            textAlign: "start",
          }}>
            <Typography gutterBottom sx={{
              fontSize: "18px",
              fontWeight: 500,
            }}
            component="div">
              {title}
            </Typography>
            <Typography sx={{ 
              fontSize: "16px",
              }}
              color="text.secondary">
              {description}
            </Typography>
          </CardContent>
        </Link>
        <CardActions sx={{
          display: {
            xs: "none",
            sm: "none",
            md: "flex",
            xl: "flex",
          },
          justifyContent: "end",
          p: 2,
        }}>
          <Button onClick={handleKeepIt} size="small" variant="outlined" startIcon={isKept ? <FavoriteIcon sx={{ color: 'red', }} /> : <FavoriteBorderIcon /> } 
          sx={{
            color: "#43493E",
            borderColor: '#386A20',
            backgroundColor: "#F1F3E8",
            borderRadius: 100,
            ":hover": {
              borderColor: '#386A20',
              backgroundColor: '#FFFFFA',
            },
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