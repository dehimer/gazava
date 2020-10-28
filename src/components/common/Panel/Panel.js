import styled from "styled-components";

const Panel = ({ className, children }) => {
  return (
    <Wrapper className={className}>
      {children}
    </Wrapper>
  )
}

export default Panel;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(10px);
  background-color: rgba(255, 255, 255, 0.5);
  padding-bottom: 10px;  
`;
