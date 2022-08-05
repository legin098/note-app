import React from 'react'
import { Navigate, Route, Routes } from "react-router-dom";
import { ArchivedPage } from '../pages/ArchivedPage';
import { Homepage } from '../pages/Homepage';

export const NoteRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Homepage />} />
      <Route path='/archived-notes' element={<ArchivedPage />} />

      <Route path='/*' element={ <Navigate to='/' />} />
    </Routes>
  )
}
