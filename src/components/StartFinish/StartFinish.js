import React from "react";
import styled from "styled-components";

import data from "../../data.json";
import i18n from "../../constants/i18n";

import Roads from "../Roads";
import Button from "../common/Button";
import Background from "./Background";
import Logotypes from "./Logotypes";

import Panel from "../common/Panel";
import Header from "../common/Header";

const StartFinish = () => {
  const roads = React.useMemo(() => data.roads, []);
  const [started, setStarted] = React.useState(false);
  const [finished, setFinished] = React.useState(false);

  const handleStartClick = () => {
    setStarted(true);
    setFinished(false);
  }

  const handleFinishClick = () => {
    setFinished(true);
  }

  const handleRestartClick = () => {
    setStarted(false);
    setFinished(false);
  }

  return (
    <Wrapper>
      <Background finished={finished} />

        {started
          ? (
            <Roads
              roads={roads}
              finished={finished}
              onFinish={handleFinishClick}
              onRestart={handleRestartClick}
            />
          )
          : (
            <>
              <TopPanel>
                <Question>
                  {i18n["start-screen-label"]}
                </Question>
              </TopPanel>
              <BottomPanel>
                <Button onClick={handleStartClick}>
                  {i18n.start}
                </Button>
              </BottomPanel>
            </>
          )
        }
      <Logotypes />
    </Wrapper>
  )
}

export default StartFinish

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
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

const Question = styled(Header)`
  text-align: center;
  margin-bottom: 20px;
  width: 700px;
`;
