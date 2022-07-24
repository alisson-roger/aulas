import React from "react"
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import { Dashboard, Login } from "../pages"

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/pagina-inicial' element={<Dashboard />} />
        <Route path='/entrar' element={<Login />} />

        <Route path='/*' element={<Navigate to="/pagina-inicial" />} />
      </Routes>
    </BrowserRouter>
  )
}