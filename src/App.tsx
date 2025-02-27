import React, { useState } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import AI from "./common/AI/AI.tsx";
import Login from "./View/Login/login.tsx";
import Register from "./View/Register/register.tsx"; // 假设你有一个注册页面
import Home from "./View/Home/home.tsx";
import Header from "./common/Header/header.tsx";
import PersonInfo from "./View/PersonInfo/personInfo.tsx";
import PersonSpace from "./View/PersonSpace/personSpace.tsx";
import ResumeDesign from "./View/ResumeDesign/resumeDesign.tsx";
import ReviewLog from "./View/ReviewLog/reviewLog.tsx";
import ApplicationTrack from "./View/ApplicationTrack/applicationTrack.tsx";
import HeaderNoLogin from "./common/Header/headerNologin.tsx";
import "./App.css";

function App() {
  const [isLogin, setIsLogin] = useState(false);

  // 定义更新登录状态的方法
  const handleLogin = (status: boolean) => {
    setIsLogin(status);
  };

  return (
    <>
      {isLogin ? <Header /> : <HeaderNoLogin />}
      <div className="container" style={{ top: 46, position: "relative" }}>
        <Routes>
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
          <Route path="/register" Component={Register} />
          <Route path="/home" Component={Home} />
          <Route path="/personInfo" Component={PersonInfo} />
          <Route path="/personSpace" Component={PersonSpace} />
          <Route path="/resumeDesign" Component={ResumeDesign} />
          <Route path="/reviewLog" Component={ReviewLog} />
          <Route path="/applicationTrack" Component={ApplicationTrack} />
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      </div>
      <AI></AI>
    </>
  );
}

export default App;
