import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "reset.css";
import Header from "./Header";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<>메인</>}></Route>
          <Route path="/product/*" element={<>ㅈ희성</>}></Route>
          <Route path="*" element={<>404</>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
