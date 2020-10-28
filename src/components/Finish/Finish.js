import styled from "styled-components";

import i18n from "../../constants/i18n";

import Header from "../common/Header";
import Button from "../common/Button";

const Finish = ({ road, onRestart }) => (
  <Wrapper>
    <div>
      <Header>{road.finish}</Header>
      <Addition dangerouslySetInnerHTML={{__html: road.finishAddition}} />
    </div>
    <StyledButton onClick={onRestart}>
      {i18n["select-another-patient"]}
    </StyledButton>
  </Wrapper>
)

export default Finish;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Addition = styled(Header)`
  font-size: 25px;
`;

const StyledButton = styled(Button)`
  margin-top: 20px;
`;
