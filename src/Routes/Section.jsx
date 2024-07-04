import React, { lazy, Suspense } from "react";
import { Outlet, useRoutes } from "react-router-dom";
import Layout from "../Layout/Nav-Bar/NavBar";
import Home from "../Pages/Home/Home";
import NotFound from "../Pages/404 Error/NotFound";

function Router() {
  const routes = useRoutes([
    {
      path: "/",
      element: (
        <Layout>
          <Suspense fallback={<div>Loading...</div>}>
            <Outlet />
          </Suspense>
        </Layout>
      ),
      children: [
        { path: "/", element: <Home /> },
        { path: "home", element: <Home /> },
        { path: "*", element: <NotFound /> },
      ],
    },
  ]);

  return routes;
}

export default Router;
