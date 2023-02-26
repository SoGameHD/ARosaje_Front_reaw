import { Fab } from "@mui/material"
import AddAPhotoOutlinedIcon from '@mui/icons-material/AddAPhotoOutlined';

const BtnTakePicture = () => {
  return (
    <>
    <Fab color="primary" aria-label="add" variant="extended"
    sx={{
      position: 'fixed',
      right: '8%',
      bottom: '8%',
      background: "linear-gradient(0deg, rgba(245, 245, 245, 0.12), rgba(245, 245, 245, 0.12)), #B8F397",
      ":hover": {
        backgroundColor: '#386A20',
        color: '#FFFFFA',
      },
      color: '#000000',
      elevation: 5,
      width: "74px",
      height: "74px",
    }}>
      <AddAPhotoOutlinedIcon fontSize="large" />
    </Fab>
    </>
  )
}

export default BtnTakePicture