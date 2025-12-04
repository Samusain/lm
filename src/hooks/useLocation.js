// src/hooks/useLocation.js
import { useLocation as useRouterLocation } from 'react-router-dom';

export const useLocation = () => {
  return useRouterLocation();
};