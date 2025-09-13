import React, { useState } from "react";
import Counter from "./components/Counter";
import Text from "./components/Text";
import Input from "./components/Input";
import Form from "./components/Form";

const App = () => {
  return (
    <div>
      <Counter />
      {/* <Text /> */}
      <Input />
      <Form />
    </div>
  );
};

export default App;
