import { useState } from "react";
import LoginForm from "./Components/LoginForm";
import TodoList from "./Components/TodoList";
import "./index.css";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <LoginForm />
      <hr />
      <TodoList />
    </>
  );
}

export default App;
