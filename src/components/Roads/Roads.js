import React from "react";
import styled from "styled-components";

import RoadSelect from "./RoadSelect";
import Road from "../Road";


const Roads = ({ finished, onFinish, roads }) => {
  const [road, setRoad] = React.useState(null);

  const handleRoadSelect = (road) => {
    setRoad(road);
  }

  if (finished) {
    return (
      <div>
        FINISHED
      </div>
    )
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
