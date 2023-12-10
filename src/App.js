import React, { Component, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./reset.css";
import LoginModal from "./components/main/modal/login";
import { Header, Main, Report, Application, Result } from "./components/index";
import Alert from "./components/main/modal/alert";

const App = () => {
  const [login, setLogin] = useState(false);
  const [alert, setAlert] = useState([false, false]);
  return (
    <div className="App">
      <BrowserRouter>
        {login && <LoginModal state={setLogin} />}
        {alert[0] && <Alert state={setAlert} />}
        <Header state={setLogin} alert={setAlert} />
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/report" element={<Report />}></Route>
          <Route path="/application" element={<Application />}></Route>
          <Route path="/result" element={<Result />}></Route>
          <Route path="*" element={<>404</>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
