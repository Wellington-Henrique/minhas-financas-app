import { Routes } from 'react-router-dom';
import { PublicRoutes } from './publicRoutes';

export function AppRoutes() {
  return (
    <Routes>
      {PublicRoutes()}
    </Routes>
  )
}