
import React from 'react'
import { Button, IconButton, Snackbar, Stack } from '@mui/material';
import { Box } from '@mui/system';


const Toast = ({open, onClose, formData, handleLike, status}) => {
    return (
      <Snackbar open={open} autoHideDuration={5000} onClose={onClose} anchorOrigin={{vertical: 'bottom', horizontal: "right"}} sx={{backgroundColor: "#333", color: '#f2f2f2', padding: '1rem', borderRadius: '8px'}}>
        <Box display="flex" justifyContent="between" alignItems="center">
          <Box flexBasis="70%" marginRight="2rem">
            {formData && (
              <Stack spacing="0.2rem">
                <span>
                  {formData.data.firstName} {formData.data.lastName}
                </span>
                <span>
                  {formData.data.email}
                </span>
              </Stack>
            )}
          </Box>
          <Stack direction="row" spacing={1}>
            <Button variant='text' onClick={() => handleLike(formData)}>{ status === 'idle' ? 'Like' : '...loading'}</Button>
            <IconButton size="small" aria-label="close" sx={{color: "#fff" }}onClick={onClose} >X</IconButton>
          </Stack>
        </Box>
      </Snackbar>
    )
  }

  export default Toast