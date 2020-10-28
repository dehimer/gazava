import styled from "styled-components";

const Background = ({
  finished
}) => (
  <Wrapper>
    <Image
      src={`./images/${
        finished
          ? "bg-finish.jpg"
          : "bg-start.jpg"
      }`}
    />
  </Wrapper>
)

export default Background;

const Wrapper = styled.div`
  position: absolute;
  height: 100vh;
  width: 100vw;
`;

const Image = styled.img`
  object-fit: cover;
  height: 100%;
  width: 100%;
`;
