import React, { type JSX } from "react";
import { Route, Routes } from "react-router-dom";

const App: React.FC = (): JSX.Element => {
  return (
    <Routes>
      <Route path="/" />
      <Route path="/login" />
      <Route path="/register" />
      <Route path="*" />
    </Routes>
  );
};

export default App;
