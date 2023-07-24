import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import VisibilityRoundedIcon from '@mui/icons-material/VisibilityRounded';
import { useNavigate } from 'react-router-dom';
import { useLang } from '../../../contexts/lang-context';

const CardPlantsBeingKept = ({path, image, dateStart, dateEnd}) => {
  const navigate = useNavigate()
	const lgCommon = useLang('common.root')
	const lgPlant = useLang('plant')
	const lgAdvice = useLang('advice')

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
          {lgPlant('orchidea')}
        </Typography>
        <Typography sx={{ 
          fontSize: {
            xs: "10px",
            sm: "14px",
            md: "16px",
          },
          }}
          color="text.secondary">
          {lgCommon('prefix.from')} {dateStart} {lgCommon('prefix.at')} {dateEnd}.
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
        <Button onClick={() => navigate(path)} size="small" variant="contained" startIcon={<VisibilityRoundedIcon color='#FFFFFF' />}
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
        {lgAdvice('viewAdvice')}
        </Button>
      </CardActions>
    </Card>
  );
}

export default CardPlantsBeingKept