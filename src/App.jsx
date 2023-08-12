import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";

import Sidebar from "./Components/Sidebar";
import Dashboard from "./Pages/Dashboard";
import Goals from "./Pages/Goals";
import Tasks from "./Pages/Tasks";
import Habits from "./Pages/Habits";

const App = () => {
  const location = useLocation();

  return (
    <div className="bg-gray-800 flex-1 flex flex-col space-y-5 lg:space-y-0 lg:flex-row lg:space-x-10 h-full">
      <Routes location={location}>
        <Route to="/" element={<Sidebar />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/" element={<Goals />} />
          <Route path="/" element={<Tasks />} />
          <Route path="/" element={<Habits />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
