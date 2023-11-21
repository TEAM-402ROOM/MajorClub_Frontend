import React, { Component, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./reset.css";
import LoginModal from "./components/main/modal/login";
import { Header, Main, Report, Application } from "./components/index";

const App = () => {
  const [login, setLogin] = useState(false);
  return (
    <div className="App">
      <BrowserRouter>
        {login && <LoginModal state={setLogin} />}
        <Header state={setLogin} />
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
