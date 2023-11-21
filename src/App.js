import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./reset.css";
import { Header, Main, Report, Application } from "./components/index";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/report" element={<Report />}></Route>
          <Route path="/application" element={<Application />}></Route>
          <Route path="*" element={<>404</>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
