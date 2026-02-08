import React from 'react' ;
import { Navbar } from './components/Navbar';
import { styled } from '@mui/material/styles';
import {Body} from './components/Body' ;
import {Footer} from './components/Footer'


export const PageContainer = styled('div')(() => ({
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  gap:'1.2rem',
   padding: '0 3.2rem',
}));

function App() {

  return (
    <PageContainer>
    <Navbar/>
    <Body/>
    <Footer/>
    
    </PageContainer>
  )
}

export default App
