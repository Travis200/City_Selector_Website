import React, { ReactNode, useState } from "react";

interface Props {
  children: ReactNode;
  color?: "primary" | "secondary" | "danger";
  onClick: () => void;
}

const Button = ({ children, onClick, color = "primary" }: Props) => {
  const [counter, setCounter] = useState(0);

  const handleClick = () => {
    setCounter(counter + 1);
  };

  return (
    <button
      type="button"
      className={"btn btn-" + color}
      onClick={() => {
        onClick();
        handleClick();
      }}
    >
      {children} {counter}
    </button>
  );
};

export default Button;
