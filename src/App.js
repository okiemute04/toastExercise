import React from 'react';
import Container from '@mui/material/Container';

import Header from './Header';
import Content from './Content';

import { useEffect } from 'react';
import { fetchLikedFormSubmissions } from './service/mockServer';
import { useState } from 'react';

function App() {
  const fromLocalStorage = localStorage.getItem("likedSubmissions")
  const parsedLocalStorage = fromLocalStorage ? JSON.parse(fromLocalStorage) : null

  const [likedSubmissions, setLikedSubmissions] = useState(parsedLocalStorage)
  const [fetchState, setFetchState] = useState("idle")

  useEffect(() => {
    setFetchState("loading")
    fetchLikedFormSubmissions().then(res => {
      setLikedSubmissions(res.formSubmissions)
      setFetchState('idle')
    }).catch(() => {
      setFetchState("error")
    })
  }, [])

  return (
    <>
      <Header setLikedSubmissions={setLikedSubmissions} />
      <Container>
        <Content likedSubmissions={likedSubmissions} fetchState={fetchState} />
      </Container>
    </>
  );
}

export default App;
