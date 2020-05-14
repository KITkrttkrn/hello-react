import React from "react";

export default function destructuring(props) {
  //Destructuring
  let { usernameHint, passwordHint, submitHandle } = props;

  return (
    <div>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          submitHandle();
        }}
      >
        <label htmlFor="username">Username</label>
        <input
          type="text"
          name="username"
          id="username"
          placeholder={usernameHint}
        />
        <br />
        <label htmlFor="password">Password</label>
        <input
          type="text"
          name="password"
          id="password"
          placeholder={passwordHint}
        />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
