import React from "react";

import { useRoutes } from "react-router-dom";

import Homepage  from "./Pages/Homepage";
import Merge from "./Pages/Merge";
import MergeVideo from "./Pages/Editor/Merge";

const Routings = () => {
    const routes = useRoutes([
        { path: '/', element: <Homepage /> },
        { path: 'merge', element: <Merge /> },
        { path: 'merge-video', element: <MergeVideo /> },
    ]); 
    return routes;  
}
export default Routings;