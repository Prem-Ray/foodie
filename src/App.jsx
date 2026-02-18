import React from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { styled } from "@mui/material/styles";
import { Body } from "./components/Body";
import { Footer } from "./components/Footer";
import { About } from "./components/About";
import { Error } from "./components/Error";
import { Contact } from "./components/Contact";
import { Restaurant } from "./components/Restaurant";

export const PageContainer = styled("div")(() => ({
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  gap: "1.2rem",
  padding: "0 3.2rem",
}));

function AppLayout() {
  return (
    <PageContainer>
      <Navbar />
      <Outlet />
      <Footer />
    </PageContainer>
  );
}

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
        errorElement: <Error />,
      },

      {
        path: "/about",
        element: <About />,
        errorElement: <Error />,
      },
      {
        path: "/contact",
        element: <Contact />,
        errorElement: <Error />,
      },
      {
        path:"/restaurant/:resId",
        element:<Restaurant/>,
        errorElement:<Error/>,
      }
    ],
  },
]);

export default function App() {
  return <RouterProvider router={appRouter} />;
}
