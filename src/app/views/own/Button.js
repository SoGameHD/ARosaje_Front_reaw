import { Button } from '@mui/material'
import React from 'react'
import { PropTypes } from 'prop-types'

const ButtonOwn = ({ onClick, icon, children, ...props }) => {
  return (
    <Button
      onClick={onClick}
      sx={{
        '& .MuiButton-startIcon': { margin: '0px' },
        textTransform: 'unset !important',
        color: '#386A20',

        ':hover': {
          backgroundColor: 'transparent'
        }
      }}
      startIcon={icon}
      variant="text"
      style={{
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      {children}
    </Button>
  )
}

ButtonOwn.propTypes = {
  onClick: PropTypes.func,
  icon: PropTypes.element,
  children: PropTypes.node
}

export default ButtonOwn
