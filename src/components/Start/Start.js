import React from "react";
import styled from "styled-components";

import Roads from "../Roads";
import Button from "../common/Button";
import Background from "./Background";

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
      {started
        ? <Roads roads={roads} />
        : (
          <Button onClick={handleStartClick}>
            {i18n.start}
          </Button>
        )
      }
    </Wrapper>
  )
}

export default Start

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  height: 100%;
  width: 100%;
`;
