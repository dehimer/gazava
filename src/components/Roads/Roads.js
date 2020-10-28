import React from "react";
import styled from "styled-components";

import Header from "../common/Header";
import RoadSelect from "./RoadSelect";
import Road from "../Road";

import i18n from "../../constants/i18n";

const Roads = ({ roads }) => {
  const [road, setRoad] = React.useState(null);
  const [stages, setStages] = React.useState(null);

  const handleRoadSelect = (road) => {
    setRoad(road);
  }

  return (
    <Wrapper>
      {
        road
          ? <Road road={road} />
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
