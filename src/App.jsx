import React from "react";
import Menu from "./components/Menu";
import Labels from "./components/Labels";
import { PassengerContext, useBill } from "./context/PassengerContext";
import Home from "./components/Home";

const App = () => {
  // const {totalPrice}=useBill()
  return (
    <PassengerContext>
      <>
        <Home />
      </>
    </PassengerContext>
  );
};

export default App;
