import { useState } from "react";
import "../App.css";
export default function LoginForm() {
  const [data, getData] = useState("");

  let username = "";
  let password = "";

  function displayUsername(val) {
    username = val.target.value;
    console.log(username);
  }

  function displayPassword(val) {
    password = val.target.value;
  }
  function submit() {
    getData(` your username is: ${username} 
    and your password is: ${password}`);

    alert(` your username is: ${username} 
    and your password is: ${password}`);
  }

  return (
    <>
      <fieldset style={{ width: "100px", padding: "30px" }}>
        <legend style={{ textAlign: "center" }}>LOGIN FORM</legend>
        <div>
          <input
            onChange={displayUsername}
            placeholder="User name"
            className="input"
            type="text"
          ></input>
        </div>

        <div>
          <input
            placeholder="Password"
            className="input"
            type="password"
            onChange={displayPassword}
          ></input>
        </div>

        <button onClick={submit} type="submit">
          Submit
        </button>
        <p>{data}</p>
      </fieldset>
    </>
  );
}
