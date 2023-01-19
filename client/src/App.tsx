import { FC } from "react";

import NavBar from "./components/NavBar";

import { GlobalStyles } from "./App.style";

const App: FC = () => {
  return (
    <>
      <GlobalStyles />
      <NavBar />
    </>
  );
};

export default App;
