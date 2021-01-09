import React, { useState, useEffect } from "react";
import Context from "./Context";

let defaultCoords = localStorage.getItem("coords") as any;

if (defaultCoords) {
  defaultCoords = JSON.parse(defaultCoords);
} else {
  defaultCoords = { lat: 0, lng: 0 };
}

const Provider = ({ children }: any) => {
  const [coords, setCoords] = useState(defaultCoords);

  useEffect(() => {
    localStorage.setItem("coords", JSON.stringify(coords));
  }, [coords]);

  const value = {
    coords,
    setCoords,
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export default Provider;
