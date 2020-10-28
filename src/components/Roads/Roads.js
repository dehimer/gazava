import React from "react";
import styled from "styled-components";

import Panel from "../common/Panel";

import Finish from "../Finish";
import Road from "../Road";
import RoadSelect from "./RoadSelect";


const Roads = ({
  roads,
  finished,
  onFinish,
  onRestart,
  videoRef
}) => {
  const [road, setRoad] = React.useState(null);

  const handleRoadSelect = (road) => {
    setRoad(road);
  }

  if (finished) {
    return (
      <Finish road={road} onRestart={onRestart} />
    );
  }

  return (
    <StyledPanel>
      <Wrapper>
        {
          road
            ? (
              <Road
                road={road}
                onFinish={onFinish}
                videoRef={videoRef}
              />
            )
            : (
              <RoadSelect
                roads={roads}
                onSelect={handleRoadSelect}
              />
            )
        }
      </Wrapper>
    </StyledPanel>
  );
}

export default Roads;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const StyledPanel = styled(Panel)`
  position: absolute;
  min-height: 80vh;
  width: 100%;
  left: 0;
  bottom: 0;
`;
