import React from "react";
import { Link } from "react-router-dom";
import "./button.css";

export const Button = ({
  buttons,
  ico,
  href = "#",
  onClick,
  type = "button",
}) => {
  // If this button is meant to submit a form or does not navigate, render a plain
  // <button> element instead of a react-router <Link>. Using Link for submit
  // buttons prevents the form's onSubmit from firing because the navigation
  // happens first.
  const isSubmit = type === "submit";
  const shouldUseLink = !isSubmit && href && href !== "#";

  const content = (
    <button className="fancy-btn" type={type} onClick={onClick}>
      <span className="label">{buttons}</span>
      <span className="icon" aria-hidden="true">
        <i className={`fas ${ico}`} />
      </span>
    </button>
  );

  if (shouldUseLink) {
    return (
      <Link to={href} className="no-underline" onClick={onClick}>
        {content}
      </Link>
    );
  }

  return content;
};
