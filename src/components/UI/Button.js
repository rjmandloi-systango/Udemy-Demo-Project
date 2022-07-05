import React from "react";

export default function Button(props) {
  return (
    <div>
      <button
        type={props.type || "button"}
        className="btn btn-primary  mx-auto mb-2"
        onClick={props.onClick}
      >
        {props.buttonTitle}
      </button>
    </div>
  );
}
