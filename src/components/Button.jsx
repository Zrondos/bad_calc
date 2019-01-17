import React from "react";
import ReactDom from "react-dom";
import "./Button.css";

const isOperator = val => {
  return !isNaN(val) || val === "." || val === "=";
  //return true if input is not a number, decimal or equals sign
};

export const Button = props => (
  <div
    className={`button-wrapper ${
      isOperator(props.children) ? null : "operator"
    }`}
    onClick={() => props.handleClick(props.children)}
  >
    {props.children}
  </div>
);
