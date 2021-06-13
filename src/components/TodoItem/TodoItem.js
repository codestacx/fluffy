import React from "react";

const TodoItem = (props) => {
  const item = props.todo;
  return (
    <div>
      <h1>{item.id}</h1>
      <p>{item.title}</p>
    </div>
  );
};

export default TodoItem;
