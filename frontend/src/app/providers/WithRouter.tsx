import { BrowserRouter } from "react-router-dom";
import { type ReactNode } from "react";

interface WithRouterProps {
  children: ReactNode;
}

export const WithRouter: React.FC<WithRouterProps> = ({ children }) => {
  return <BrowserRouter>{children}</BrowserRouter>;
};
