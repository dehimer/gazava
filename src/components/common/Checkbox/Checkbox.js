import styled from "styled-components";

const Checkbox = ({
  selected,
  children,
  className,
  onClick
}) => (
  <Wrapper className={className} onClick={onClick}>
    <Square selected={selected} />
    <Label>{children}</Label>
  </Wrapper>
);

export default Checkbox;

const Wrapper = styled.div`
  display: flex;
  cursor: pointer;
  
  align-items: center;
  padding: 5px;
  user-select: none;
`;

const Square = styled.div`
  box-sizing: border-box;
  border: 4px solid crimson;
  background-color: ${({ selected }) => selected ? "crimson" : "none"};
  width: 20px;
  height: 20px;
`;

const Label = styled.div`
  margin-left: 10px;
`;
