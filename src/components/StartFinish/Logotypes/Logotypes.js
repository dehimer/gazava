import styled from "styled-components";

const Logotypes = () => (
  <>
    <LogoTop src="./images/logo2.png" />
    <LogoBottom src="./images/logo.png" />
  </>
)

export default Logotypes;

const LogoTop = styled.img`
  position: absolute;
  top: -80px;
  right: -80px;
  max-height: 400px;
  max-width: 400px;
`;

const LogoBottom = styled.img`
  position: absolute;
  right: 60px;
  bottom: 20px;
  max-height: 130px;
  max-width: 130px;
`;
