import React, { lazy, Suspense } from "react";
import { Outlet, useRoutes } from "react-router-dom";
import ConstructionLayout from "../Layout/Nav-Bar/Layout.jsx";
import Home from "../Pages/Home.jsx";
import ComparisonPage from "../Components/Product Card/ComparisonPage.jsx";


function Router() {
  const routes = useRoutes([
    {
      path: "/",
      element: (
        
          <ConstructionLayout>
          <Suspense>
            <Outlet />
          </Suspense>
        </ConstructionLayout>
       
      ),
      children: [ 
        {
          index: true, // This makes it the default route for "/"
          element: <Home />
        },
        {
          path: '/compare', // This makes it the default route for "/"
          element: <ComparisonPage />
        },
        
      ],
    },
  ]);

  return routes;
}

export default Router;
