import React, { Component, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./reset.css";
import LoginModal from "./modal/login";
import {
  Header,
  Main,
  Report,
  Application,
  Result,
  CheckApplication,
  Attendance,
} from "./components/index";
import Alert from "./modal/alert";
import Send from "./modal/send";

const App = () => {
  const [login, setLogin] = useState(false);
  const [alert, setAlert] = useState([false, false]);
  const [send, setSend] = useState(false);
  return (
    <div className="App">
      <BrowserRouter>
        {login && <LoginModal state={setLogin} />}
        {alert[0] && <Alert state={setAlert} />}
        {send && <Send state={setSend} />}
        <Header state={setLogin} alert={setAlert} send={setSend} />
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/report" element={<Report />}></Route>
          <Route path="/application" element={<Application />}></Route>
          <Route path="/result" element={<Result />}></Route>
          <Route
            path="/check/applications"
            element={<CheckApplication />}
          ></Route>
          <Route path="/attendance" element={<Attendance />}></Route>
          <Route path="*" element={<Main />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
