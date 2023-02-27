import { Card, CardContent, CardMedia, Typography } from "@mui/material"

const DashboardCard = ({title, description, image}) => {
  return (
    <>
      <Card
      sx={{
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
    </>
  )
}

export default DashboardCard