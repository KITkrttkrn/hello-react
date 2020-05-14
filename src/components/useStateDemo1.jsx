import React, { useState } from "react";

export default function useStateDemo1() {
  const [account, setAccount] = useState({ username: "", password: "" });
  return (
    <div>
      <p>#debug {JSON.stringify(account)}</p>
      <form>
        <input
          type="text"
          placeholder="Username"
          value={account.username}
          onChange={(e) => {
            //...  คือการทำ Destructuring
            setAccount({ ...account, username: e.target.value });
          }}
        />
        <br />
        <input
          type="text"
          placeholder="Password"
          value={account.password}
          onChange={(e) => {
            setAccount({ ...account, password: e.target.value });
          }}
        />
        <br />
        <button
          onClick={(e) => {
            e.preventDefault();
            alert(JSON.stringify(account));
          }}
        >
          SUBMIT
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            setAccount({ username: "", password: "" });
          }}
        >
          RESET
        </button>
      </form>
    </div>
  );
}
