import React from "react";

const Button = ({text}: {text: String}) => {
  return <button className="h-12 font-bold px-5 border-solid border-2 rounded-xl hover:border-dotted">{text}</button>;
};

export default Button;