import React from "react";

export default function ex_images(props) {
  return (
    <div>
      <img src="/logo512.png" height="100" />
      {props.image && <img src={props.image} height={props.height} />}
    </div>
  );
}
