import React, { lazy, Suspense } from "react";
import { Outlet, useRoutes } from "react-router-dom";
import Layout from "../Layout/Nav-Bar/Sidebar.jsx";
import Home from "../Pages/Home/Home.jsx";
import Dashboard from "../Pages/Dashboard/Dashboard.jsx";

function Router() {
  const routes = useRoutes([
    {
      path: "/",
      element: (
        
          <Suspense>
            <Outlet />
          </Suspense>
       
      ),
      children: [ 
        { path: "/", element: <Home /> },
        { path: "/batch-transfer", element: <Dashboard /> },
        
      ],
    },
  ]);

  return routes;
}

export default Router;
