// import React from "react";
import "../App.css";
export default function TodoList() {
  return (
    <div className="container">
      <h1 className="heading-primary">ToDo List</h1>

      <ul>
        <li>
          learn react <button type="button">Delete</button>
        </li>
        <li>
          learn react <button type="button">Delete</button>
        </li>
        <li>
          learn react <button type="button">Delete</button>
        </li>
        <li>
          learn react <button type="button">Delete</button>
        </li>
        <li>
          learn react <button type="button">Delete</button>
        </li>
      </ul>

      <div>
        <input type="input"></input> <button>Add</button>
      </div>
    </div>
  );
}
