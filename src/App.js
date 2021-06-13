import logo from "./logo.svg";
import "./App.css";
import Todos from "./components/Todos/Todos";
import axios from "axios";
import { useState } from "react";
function App() {
  let apiResponseData = [
    {
      id: 1,
      title: "Meeting with team at evening",
      status: true,
    },
    {
      id: 2,
      title: "Meeting with students at village",
      status: false,
    },
  ];

  const [data, setApiData] = useState(apiResponseData);

  /*
  Get todos from api 
  */
  return (
    <div>
      <Todos todos={data} />
    </div>
  );
}

export default App;
