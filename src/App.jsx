import React from 'react' ;
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Navbar } from './components/Navbar';
import { styled } from '@mui/material/styles';
import {Body} from './components/Body' ;
import {Footer} from './components/Footer'
import { About } from './components/About';
import { Error } from './components/Error';


export const PageContainer = styled('div')(() => ({
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  gap:'1.2rem',
   padding: '0 3.2rem',
}));

function AppLayout() {

  return (
    <PageContainer>
    <Navbar/>
    <Body/>
    <Footer/>
    
    </PageContainer>
  )
}

const appRouter = createBrowserRouter([
  {
    path : "/",
    element : <AppLayout/>,
    errorElement: <Error/>,
  },
  {
    path:'/about',
    element:<About/>,
    errorElement: <Error/>,
  },
])

export default function App() {
  return <RouterProvider router={appRouter} />;
}
