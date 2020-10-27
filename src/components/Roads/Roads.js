import React from "react";
import styled from "styled-components";

import Header from "../common/Header";
import RoadSelect from "./RoadSelect";

import i18n from "../../constants/i18n";

const Roads = ({ roads }) => {
  console.log("Roads");
  console.log(roads);
  // const [drive, setDrive] = React.useState(false);
  const [road, setRoad] = React.useState(null)

  const handleRoadSelect = (road) => {
    setRoad(road);
  }

  return (
    <Wrapper>
      <StyledHeader>{i18n["select-road-label"]}</StyledHeader>
      {
        road
          ? <div>Video</div> :
          <RoadSelect
            roads={roads}
            onSelect={handleRoadSelect}
          />
      }
    </Wrapper>
  );
}

export default Roads;

const StyledHeader = styled(Header)`
  margin-bottom: 20px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
