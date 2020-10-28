import styled from "styled-components";

import TriangleIcon from "./TriangleIcon";

const Label = ({ children, className }) => (
  <Wrapper className={className}>
    <Text>{children}</Text>
    <Triangle />
  </Wrapper>
)

export default Label;

const Wrapper = styled.div`
  display: flex;
  user-select: none;
`;

const Text = styled.div`
  color: white;
  background-color: crimson;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  font-size: 30px;
`;

const Triangle = styled(TriangleIcon)`
  object-fit: contain;
  
  svg {
    fill: crimson;
    height: 60px;
    width: 60px;
  }
`;
