import React from 'react';
import { Button } from '@chakra-ui/button';
import { Container } from '@chakra-ui/react';
import { Route, Routes } from 'react-router-dom';
import UserPage from './pages/UserPage';
import PostPage from './pages/PostPage';
import HomePage from './pages/HomePage';
import Header from './components/Header';
import AuthPage from './pages/AuthPage';
const App = () => {
  return (
    <Container maxW="620px">
      <Header/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path='/auth' element={<AuthPage/>}/>
        <Route path="/:username" element={<UserPage />} />
        <Route path="/:username/post/:pid" element={<PostPage />}/>
      </Routes>
      </Container>
  )
}

export default App