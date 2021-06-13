import React, { useState, useEffect } from "react";
import TodoItem from "../TodoItem/TodoItem";
const Todos = (props) => {
  const [count, setCount] = useState(0);
  /*
        componentDidMount
        componentDidUpdate
    */
  //   const data = [
  //     {
  //       id: 1,
  //       title: "Meeting with team at evening",
  //       status: true,
  //     },
  //     {
  //       id: 2,
  //       title: "Meeting with students at village",
  //       status: false,
  //     },
  //   ];

  const data = props.todos; //receive props

  /* set todos */
  const [todos, setTodos] = useState(data);

  //   const numbers = [1, 2, 3, 4, 5];
  //   const temp = numbers.map((item) => {
  //     item = item + 10;
  //     return item;
  //   });

  //   const [temperature, setTemp] = useState(30);

  //   useEffect(() => {
  //     console.log("hook called.....");
  //     console.log(count);
  //   }, [count, temperature]);

  return (
    <div style={{ textAlign: "center" }}>
      {/* <button onClick={() => setTemp(temperature + 1)}>
        update temperature {temperature}
      </button>
      <button onClick={() => setCount(count + 1)}>update count {count}</button> */}
      Todos
      <div>
        {todos.map((todo) => (
          <TodoItem todo={todo} />
        ))}
      </div>
    </div>
  );
};

export default Todos;
