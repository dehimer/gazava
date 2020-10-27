import styled from "styled-components";

const Button = ({
  children,
  onClick
}) => (
  <Wrapper onClick={onClick}>
    {children}
  </Wrapper>
)

export default Button;

const Wrapper = styled.div`
  cursor: pointer;
  padding: 10px;
  background-color: crimson;
  width: 100px;
  text-align: center;
  color: white;
`;
