import React, { useState } from "react";

export default function useStateDemo2() {
  const initialState = { username: "", password: "" };
  const [account, setAccount] = useState(initialState);
  const [accountList, setAccountList] = useState([]);
  return (
    <div>
      {/* <p>#debug {JSON.stringify(account)}</p> */}
      <p>#debug {JSON.stringify(accountList)}</p>
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
            //alert(JSON.stringify(account));
            setAccountList([
              ...accountList,
              { ...account, index: accountList.length },
            ]);
          }}
        >
          SUBMIT
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            setAccount(initialState);
          }}
        >
          RESET
        </button>
      </form>
      <ul>
        {accountList.map((item) => (
          <li key={item.index}>
            Username: {item.username}, Password: {item.password}
          </li>
        ))}
      </ul>
    </div>
  );
}
