import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import AddIcon from '@mui/icons-material/Add';
import { Link, useNavigate } from 'react-router-dom';

const CardUserKeptPlants = ({path, plantName, image, username, date1, date2, action, icon}) => {
  const navigate = useNavigate();

  return (
    <Card sx={{ 
        maxWidth: 345,
        borderRadius: '12px',
        backgroundColor: "#F1F3E8",
      }}
    >
      <Link to={path} onClick={() => navigate(path)} className='no-underline'>
        <CardMedia
          sx={{ 
            height: {
              xs: 150,
              sm: 194,
              md: 230,
              xl: 260,
            },
            borderRadius: "12px",
          }}
          image={image}
          title="image plante"
        />
        <CardContent sx={{
          textAlign: "start",
        }}>
          <Typography gutterBottom sx={{
            fontSize: "18px",
            fontWeight: 500,
          }}
          component="div">
            {plantName}
          </Typography>
          <Typography
            sx={{
              fontSize: "14px",
            }}
            color="text.secondary">
            Gardée par {username}
          </Typography>
          <Typography
            sx={{
              fontSize: "12px",
              mt: '4%'
            }}
            color="text.primary">
            Du {date1} Au {date2}
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
      <Button size="small" variant="contained" startIcon={icon}
        onClick={() => navigate(path)}
        sx={{
          color: "#FFFFFF",
          backgroundColor: "#386A20",
          borderRadius: 100,
          ":hover": {
            backgroundColor: '#FFFFFA',
            color: '#386A20',
          },
        }}
      >
      {action}
      </Button>
      </CardActions>
    </Card>
  );
}

export default CardUserKeptPlants