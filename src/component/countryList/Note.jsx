import React from "react";
import { useState } from "react";

// const useInputvalue = initialValue => {
//   const [value, setValue] = useState(initialValue);
//   return {
//     value,
//     onChange: e => setValue(e.target.value)
//   };
// };

export default ({ message, id, deleteNotes }) => {
  return (
    <div className="Note">
      <p>
        {message} | ID: {id}
      </p>
      <div>
        <button onClick={() => deleteNotes(id)}>Delete this note</button>
      </div>
    </div>
  );
};
