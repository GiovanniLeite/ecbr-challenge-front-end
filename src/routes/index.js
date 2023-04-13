import React from 'react';
import { Routes, Route } from 'react-router-dom';

// import PrivateRoute from './PrivateRoute';

import Home from '../pages/Home';

export default function Routers() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
    </Routes>
  );
}
