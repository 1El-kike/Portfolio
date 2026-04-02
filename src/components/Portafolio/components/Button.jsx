import React from "react";
import { Link } from "react-router-dom";
import "./button.css";

export const Button = ({
  buttons,
  ico,
  href = "#",
  onClick,
  type = "button",
  isLoading = false,
}) => {
  // If this button is meant to submit a form or does not navigate, render a plain
  // <button> element instead of a react-router <Link>. Using Link for submit
  // buttons prevents the form's onSubmit from firing because the navigation
  // happens first.
  const isSubmit = type === "submit";
  const shouldUseLink = !isSubmit && href && href !== "#";

  const content = (
    <button 
      className={`fancy-btn ${isLoading ? "loading" : ""}`} 
      type={type} 
      onClick={onClick}
      disabled={isLoading}
    >
      <span className="label">{buttons}</span>
      <span className={`icon ${isLoading ? "spinner" : ""}`} aria-hidden="true">
        <i className={`fas ${ico} ${isLoading ? "fa-spin" : ""}`} />
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
