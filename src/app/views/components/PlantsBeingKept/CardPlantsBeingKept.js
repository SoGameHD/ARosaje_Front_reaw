import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import AddIcon from '@mui/icons-material/Add';

const CardPlantsBeingKept = ({image, dateStart, dateEnd}) => {
  return (
    <Card sx={{ 
      maxWidth: 345,
      borderRadius: '12px',
      backgroundColor: "#F1F3E8",
    }}>
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
        title="green iguana"
      />
      <CardContent sx={{
        textAlign: "start",
      }}>
        <Typography gutterBottom sx={{
          fontSize: {
            xs: "14px",
            sm: "16px",
            md: "18px",
          },
          fontWeight: 500,
        }}
        component="div">
          Orchidées
        </Typography>
        <Typography sx={{ 
          fontSize: {
            xs: "10px",
            sm: "14px",
            md: "16px",
          },
          }}
          color="text.secondary">
          Du {dateStart} Au {dateEnd}.
        </Typography>
      </CardContent>
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
        <Button size="small" variant="contained" startIcon={<AddIcon color='#FFFFFF' />}
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
        Ajouter un conseil
        </Button>
      </CardActions>
    </Card>
  );
}

export default CardPlantsBeingKept