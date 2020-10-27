import React from "react";

import Button from "../../common/Button";
import styled from "styled-components";

const RoadSelect = ({ roads, onSelect }) => {
  const handleSelect = (road) => () => {
    onSelect(road);
  }

  return (
    <Wrapper>
      {
        roads.map(road => (
          <RoadButton
            key={road.id}
            onClick={handleSelect(road)}
          >
            <Name>{road.name}</Name>
            <NameAddition>{road.nameAddition}</NameAddition>
          </RoadButton>
        ))
      }
    </Wrapper>
  );
}

export default RoadSelect;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 10px;
  min-width: 1000px;
  max-width: 100vw;
`;

const RoadButton = styled(Button)`
  margin: 10px;
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 240px;
`;

const Name = styled.div`
  font-size: 18px;
`;

const NameAddition = styled.div`
  font-size: 14px;
  margin-top: 10px;
`;
