import React from "react";
import styled from "styled-components";

import Roads from "../Roads";
import Button from "../common/Button";
import Background from "./Background";
import Logotypes from "./Logotypes";

import i18n from "../../constants/i18n";
import data from "../../data.json";

const Start = () => {
  const roads = React.useMemo(() => data.roads, []);
  const [started, setStarted] = React.useState(false);
  const [finished, setFinished] = React.useState(false);

  const handleStartClick = () => {
    setStarted(true);
    setFinished(false);
  }

  return (
    <Wrapper>
      <Background finished={finished} />
      <Panel>
        {started
          ? <Roads roads={roads} />
          : (
            <>
              <Question>{i18n["start-screen-label"]}</Question>
              <Button onClick={handleStartClick}>
                {i18n.start}
              </Button>
            </>
          )
        }
      </Panel>
      <Logotypes />
    </Wrapper>
  )
}

export default Start

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
`;

const Panel = styled.div`
  position: absolute;
  min-height: 50vh;
  width: 100%;
  left: 0;
  bottom: 0;
  
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(15px);
`;

const Question = styled.div`
  color: #333;
  font-size: 26px;
  
  padding: 20px;
  margin-bottom: 20px;
`;
