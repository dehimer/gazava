import React from "react";
import styled from "styled-components";

const CLICK_DELAY = 100;

const Button = ({
  onClick,
  selected = false,
  children,
  className
}) => {
  const [clicked, setClicked] = React.useState(false);
  const timeoutF = React.useRef(0);
  const handleClick = () => {
    setClicked(true);

    clearTimeout(timeoutF.current);

    timeoutF.current = setTimeout(() => {
      onClick();
    }, CLICK_DELAY)
  }

  return (
    <Wrapper
      onClick={handleClick}
      selected={selected || clicked}
      className={className}
    >
      {children}
    </Wrapper>
  );
}

export default Button;

const Wrapper = styled.div`
  cursor: pointer;
  padding: 20px;
  background-color: ${({ selected }) => selected ? "crimson" : "#333"};
  width: 140px;
  text-align: center;
  color: white;
  font-size: 20px;
  user-select: none;
`;
