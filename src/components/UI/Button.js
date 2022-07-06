import React from "react";
import Wrapper from "../wrapper/Wrapper";

export default function Button(props) {
  return (
    <Wrapper>
    {/* // <div> */}
      <button
        type={props.type || "button"}
        className="btn btn-primary  mx-auto mb-2"
        onClick={props.onClick}
      >
        {props.buttonTitle}
      </button>
    {/* // </div> */}
    </Wrapper>
  );
}
