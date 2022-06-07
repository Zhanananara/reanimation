import React, {useEffect, useState} from "react";
import { Route, Routes } from "react-router-dom";
import Add from "./components/admin/Add";
import Form from "./components/Form/Form";
import List from "./components/List/List";
import MainLayout from "./layout/MainLayout";
import Home from "./pages/Home/Home";
import Register from "./pages/Register/Register";
import Specialist from "./pages/Specialist/Specialist";
import {getNode} from "./Firebase";


const MyRoutes = () => {
// Данные прокидываються
    // 1. через props !!!!!!
    // 2. через context
    // 3. создаешь store и импортируешь из 

    const [dataTable, setDataTable ] = useState(false)
    
    useEffect(() => {
        getNode("users").then((result) => {
            setDataTable( result)
            console.log(result);
        });
    }, [])
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/specialist" element={<Specialist />} />

        <Route path="/add" element={<Add />} />
        <Route path="/form" element={<Form />} />
        <Route path="/list" element={<List dataTable = {dataTable} />} />
        {/* <Route path="/register" element={<Register />} /> */}
      </Route>
    </Routes>
  );
};

export default MyRoutes;
