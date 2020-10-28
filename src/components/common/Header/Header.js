import styled from "styled-components";

const Header = styled.div`
  color: #333;
  font-size: 45px;
  
  padding: 20px;
  
  max-width: 100%;
  text-align: center;
  user-select: none;
  
  @media (max-width: 850px) {
    font-size: 30px;
    padding: 20px;
  }
`

export default Header;
