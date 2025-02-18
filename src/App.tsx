import React from 'react';
import {Route, Routes,Navigate} from 'react-router-dom';
import Login from './Login/login.tsx';
import Register from './Register/register'; // 假设你有一个注册页面
import Home from './Home/home.tsx';

function App() {
  return (
      <Routes>
        <Route path="/login" Component={Login} />
        <Route path="/register" Component={Register} />
        <Route path="/home" Component={Home} />
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
  );
}

export default App;