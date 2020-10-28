import React from "react";
import styled from "styled-components";

import Header from "../common/Header";

import Finish from "../Finish";
import Road from "../Road";
import RoadSelect from "./RoadSelect";


const Roads = ({
  roads,
  finished,
  onFinish,
  onRestart
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
    <Wrapper>
      {
        road
          ? <Road road={road} onFinish={onFinish} />
          : (
            <RoadSelect
              roads={roads}
              onSelect={handleRoadSelect}
            />
          )
      }
    </Wrapper>
  );
}

export default Roads;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
