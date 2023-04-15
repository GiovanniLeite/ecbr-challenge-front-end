import React from 'react';
import { Routes, Route } from 'react-router-dom';

// import PrivateRoute from './PrivateRoute';

import Offers from '../pages/Offers';

export default function Routers() {
  return (
    <Routes>
      <Route path="/" element={<Offers />}></Route>
    </Routes>
  );
}
