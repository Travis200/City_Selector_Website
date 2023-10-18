import React, { ReactNode, useState } from "react";

interface Props {
  children: ReactNode;
}

const Button = ({ children }: Props) => {
  const [counter, setCounter] = useState(0);

  const handleClick = () => setCounter(counter + 1);

  return (
    <button type="button" className="btn btn-primary" onClick={handleClick}>
      {children} {counter}
    </button>
  );
};

export default Button;
