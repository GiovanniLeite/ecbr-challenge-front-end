import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Offers from '../pages/Offers';
import Page404 from '../pages/Page404';

export default function Routers() {
  return (
    <Routes>
      <Route path="/" element={<Offers />} />
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
}
