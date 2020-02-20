import React from "react";
import { useState } from "react";

const useInputvalue = initialValue => {
  const [value, setValue] = useState(initialValue);
  return {
    value,
    onChange: e => setValue(e.target.value)
  };
};

export default ({ onSubmit }) => {
  const text = useInputvalue("");

  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        onSubmit(text.value);
      }}
    >
      <input {...text} />
    </form>
  );
};
