import styled from "styled-components";

const Background = ({
  finished
}) => (
  <Wrapper>
    <Image
      src={`/images/${
        finished
          ? "bg-finish.jpg"
          : "bg-start.jpg"
      }`}
    />
    <LogoTop src="/images/logo2.png" />
    <LogoBottom src="/images/logo.png" />
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

const LogoTop = styled.img`
  position: absolute;
  top: -40px;
  right: -10px;
  max-height: 250px;
  max-width: 250px;
`;

const LogoBottom = styled.img`
  position: absolute;
  right: 60px;
  bottom: 20px;
  max-height: 80px;
  max-width: 80px;
`;
