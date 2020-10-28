import styled from "styled-components";

import i18n from "../../constants/i18n";

import Header from "../common/Header";
import Button from "../common/Button";
import Panel from "../common/Panel";

const Finish = ({ road, onRestart }) => (
  <Wrapper>
    <TopPanel>
      <Header>{road.finish}</Header>
      <Addition dangerouslySetInnerHTML={{__html: road.finishAddition}} />
    </TopPanel>
    <BottomPanel>
      <Button onClick={onRestart}>
        {i18n["select-another-patient"]}
      </Button>
    </BottomPanel>
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

const TopPanel = styled(Panel)`
  position: absolute;
  width: 100%;
  left: 0;
  top: 22vh;
`;

const BottomPanel = styled(Panel)`
  position: absolute;
  width: 100%;
  left: 0;
  bottom: 0;
  min-height: 120px;
  padding-top: 10px;
`;
