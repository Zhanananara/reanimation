import React from "react";
import { Route, Routes } from "react-router-dom";
import Add from "./components/admin/Add";
import Form from "./components/Form/Form";
import List from "./components/List/List";
import MainLayout from "./layout/MainLayout";
import Home from "./pages/Home/Home";
import Register from "./pages/Register/Register";
import Specialist from "./pages/Specialist/Specialist";

const MyRoutes = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/specialist" element={<Specialist />} />

        <Route path="/add" element={<Add />} />
        <Route path="/form" element={<Form />} />
        <Route path="/list" element={<List />} />
        {/* <Route path="/register" element={<Register />} /> */}
      </Route>
    </Routes>
  );
};

export default MyRoutes;
