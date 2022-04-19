import React from 'react';
import Box from '@mui/material/Box';
import { Stack, Typography } from '@mui/material';

export default function Content({likedSubmissions, fetchState}) {

 
  return (
    <Box sx={{marginTop: 3}}>
      <Stack variant="h2">Liked Form Submissions</Stack>

      {
        fetchState === 'loading' && <Typography>...loading</Typography>
      }

      {
        fetchState === 'error' && <Typography color="red">An error occured, please refresh</Typography>
      }

      {
        likedSubmissions && fetchState === 'idle' && (
          <Stack component="ol" spacing={2} sx={{ marginTop: 1}}>
        {
          likedSubmissions.map((submission) => (
            <Stack key={submission.id} component="li" spacing={1}>
            <span>
              {submission.data.firstName} {submission.data.lastName}
            </span>
            <span>
              {submission.data.email}
            </span>
          </Stack>
          ))
        }
      </Stack>
        )
      }
    </Box>
  );
}
