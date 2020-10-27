import styled from "styled-components";

const Logotypes = () => (
  <>
    <LogoTop src="/images/logo2.png" />
    <LogoBottom src="/images/logo.png" />
  </>
)

export default Logotypes;

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
