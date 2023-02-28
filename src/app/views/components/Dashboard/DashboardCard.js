import { Card, CardContent, CardMedia, Typography } from "@mui/material"
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const DashboardCard = ({path, title, description, image}) => {
  const [hover, setHover] = useState(false)
  const navigate = useNavigate();

  return (
    <>
    <Link to={path} key={title} onClick={() => navigate(path)} className='no-underline'>
      <Card
      raised={hover ? true : false}
      onMouseEnter={()=> setHover(true)}
      onMouseLeave={()=> setHover(false)}
      sx={{
        cursor: 'pointer',
        backgroundColor: '#F8FAFD',
        borderRadius: "24px",
        ":hover": {
          backgroundColor: '#D9E7CB',
        },
        width: {
          xs: "auto",
          sm: 350,
          md: 380
        },
        height: "auto"
      }}>
        <CardMedia
          component="img"
          alt="illustration mes plantes"
          image={image}
          sx={{
            height: 165,
            borderRadius: "24px",
          }}
        />
        <CardContent>
          <Typography gutterBottom variant="h4" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </Card>
    </Link>
    </>
  )
}

export default DashboardCard