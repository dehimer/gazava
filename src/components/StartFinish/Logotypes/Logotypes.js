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
  
  @media(max-width: 850px) {
    top: -40px;
    right: -40px;
    max-height: 250px;
    max-width: 250px;
  }
  
  @media(max-width: 700px) {
    right: -50px;
  }
`;

const LogoBottom = styled.img`
  position: absolute;
  right: 60px;
  bottom: 20px;
  max-height: 130px;
  max-width: 130px;
  
  @media(max-width: 850px) {
    right: 35px;
    bottom: 10px;
    max-height: 65px;
    max-width: 65px;
  }
  
  @media(max-width: 700px) {
    right: 35px;
    bottom: 5px;
  }
`;
