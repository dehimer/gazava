import React from "react";
import styled from "styled-components";

const CLICK_DELAY = 100;

const Button = ({
  onClick,
  selected = false,
  children,
  className,
  disabled = false
}) => {
  const [clicked, setClicked] = React.useState(false);
  const timeoutF = React.useRef(0);
  const handleClick = () => {
    if (disabled) {
      return;
    }
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
      disabled={disabled}
      className={className}
    >
      {children}
    </Wrapper>
  );
}

export default Button;

const Wrapper = styled.div`
  cursor: ${({ disabled }) => disabled ? "cursor" : "pointer"};
  opacity: ${({ disabled }) => disabled ? "0.5" : "1"};
  padding: 20px;
  background-color: ${({ selected }) => selected ? "#a40023" : "#445565"};
  width: 140px;
  text-align: center;
  color: white;
  font-size: 20px;
  user-select: none;
`;
