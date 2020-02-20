import React, { useState } from "react";
import Form from "./Form";



export default () => {
    const [todos, setTodos] = useState([]);

    return (
        <div>
            <Form onSubmit={(text) => { setTodos([{ text, complete: false }, ...todos]) }
            } />
            <div>
                {
                    todos.map(
                        ({ text }) => (<div key={text}>{text}</div>)
                    )
                }
            </div>
        </div>
    );
};