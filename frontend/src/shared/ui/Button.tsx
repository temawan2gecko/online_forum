import React from "react";

interface ButtonProps {
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ children }) => {
  return (
    <>
      <h1>Hello from Button</h1>
      <button>{children}</button>
    </>
  );
};
