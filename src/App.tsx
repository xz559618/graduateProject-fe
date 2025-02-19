import React from 'react';
import {Route, Routes,Navigate } from 'react-router-dom';
import Login from './View/Login/login.tsx';
import Register from './View/Register/register.tsx'; // 假设你有一个注册页面
import Home from './View/Home/home.tsx';
import Header from './common/Header/header.tsx';
import PersonInfo from './View/PersonInfo/personInfo.tsx';
import PersonSpace from './View/PersonSpace/personSpace.tsx';
import ResumeDesign from './View/ResumeDesign/resumeDesign.tsx';
import ReviewLog from './View/ReviewLog/reviewLog.tsx';
import ApplicationTrack from './View/ApplicationTrack/applicationTrack.tsx';

function App() {
  return (
    <>
    <Header/>
      <Routes>
        <Route path="/login" Component={Login} />
        <Route path="/register" Component={Register} />
        <Route path="/home" Component={Home} />
        <Route path="/personInfo" Component={PersonInfo} />
        <Route path="/personSpace" Component={PersonSpace} />
        <Route path="/resumeDesign" Component={ResumeDesign} />
        <Route path="/reviewLog" Component={ReviewLog} />
        <Route path="/applicationTrack" Component={ApplicationTrack} />
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>  
    </>
  );
}

export default App;