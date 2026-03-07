import React, { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { styled } from "@mui/material/styles";
import { Body } from "./components/Body";
import { Footer } from "./components/Footer/Footer";
import { Error } from "./components/Error";
import { Contact } from "./components/Contact";
import { Restaurant } from "./components/Restaurant";
import { Shimmer } from "./components/Shimmer";
import { Box, CircularProgress } from "@mui/material";

export const PageContainer = styled("div")(() => ({
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  gap: "1.2rem",
  padding: "0 3.2rem",
}));

const Hotels = lazy(() => import("./components/Hotels"));

const About = lazy(() => import("./components/About"));

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
        element: 
          <Suspense
            fallback={
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "start",
                  height: "100vh",
                }}
              >
                <CircularProgress />
              </Box>
            }
          >
            <About />
          </Suspense>
        ,
        errorElement: <Error />,
      },
      {
        path: "/contact",
        element: <Contact />,
        errorElement: <Error />,
      },
      {
        path: "/restaurant/:resId",
        element: <Restaurant />,
        errorElement: <Error />,
      },
      {
        path: "/hotels",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Hotels />
          </Suspense>
        ),
        errorElement: <Error />,
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={appRouter} />;
}
