import React from "react";
import PropTypes from "prop-types";
export default function ex_props(props) {
  return (
    <div>
      {props.showLabel && <h1>Counter: </h1>}
      <h1 style={{ color: props.color }}>{props.count}</h1>
    </div>
  );
}

ex_props.propTypes = {
  count: PropTypes.number,
  showLabel: PropTypes.bool,
};

ex_props.defaultProps = {
  showLabel: false,
};
