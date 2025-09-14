import React, { useState } from "react";
import Counter from "./components/Counter";
import Text from "./components/Text";
import Input from "./components/Input";
import Form from "./components/Form";
import List from "./components/List";
import RandomBackground from "./components/RandomBackground";
import LightSwitch from "./components/LightSwitch";

const App = () => {
  return (
    <div>
      <Counter />
      {/* <Text /> */}
      <Input />
      <Form />
      <List />
      <RandomBackground />
      <LightSwitch />
    </div>
  );
};

export default App;
