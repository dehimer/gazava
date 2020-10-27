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
  padding: 20px;
  background-color: crimson;
  width: 140px;
  text-align: center;
  color: white;
  font-size: 20px;
`;
