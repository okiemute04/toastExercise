import React, {useState} from 'react';

import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

import { createMockFormSubmission, fetchLikedFormSubmissions, onMessage, saveLikedFormSubmission } from './service/mockServer';
import { useEffect } from 'react';
import Toast from './Toast';

export default function Header({setLikedSubmissions}) {

  const [formData, setFormData] = useState(null)
  const [showToast, setShowToast] = useState(false)
  const [status, setStatus] = useState('idle')

  const onClose = () => {
    setShowToast(false)
  }

  const handleLike = (formData) => {
    setStatus('saving')
    saveLikedFormSubmission(formData).then((res) => {
      setShowToast(false)
      fetchLikedFormSubmissions().then(res => {
        setLikedSubmissions(res.formSubmissions)
        localStorage.setItem("likedSubmissions", JSON.stringify(res.formSubmissions))
      })
    }).finally(() => setStatus("idle"))
  }

  useEffect(() => {
    onMessage(data => {
      setFormData(data)
      setShowToast(true)
    })
  }, [])

  return (
    <Box sx={{flexGrow: 1}}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{marginRight: 2}}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" sx={{flexGrow: 1}}>
            Toast Exercise
          </Typography>
          <Button
            variant="contained"
            size="small"
            color="secondary"
            onClick={() => {
              createMockFormSubmission()
            }}
          >
            New Submission
            </Button>
        </Toolbar>
      </AppBar>

      <Toast open={showToast} onClose={onClose} formData={formData} handleLike={handleLike} status={status} />
    </Box>
  );
}

