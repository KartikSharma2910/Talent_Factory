import React from "react";
import { ParadoxLayer } from "../../common";
import Home from "./Home";
import Register from "./Register";
import Team from "./Team";
import Working from "./Working";

const UIFlexer = () => {
  return (
    <ParadoxLayer
      home={<Home />}
      team={<Team />}
      working={<Working />}
      register={<Register />}
    />
  );
};

export default UIFlexer;
