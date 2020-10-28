import React from "react";

import Button from "../../common/Button";
import styled from "styled-components";
import i18n from "../../../constants/i18n";
import Header from "../../common/Header";

const RoadSelect = ({ roads, onSelect }) => {
  const handleSelect = (road) => () => {
    onSelect(road);
  }

  return (
    <Wrapper>
      <StyledHeader>{i18n["select-road-label"]}</StyledHeader>
      <RoadsWrapper>
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
      </RoadsWrapper>
    </Wrapper>
  );
}

export default RoadSelect;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const RoadsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 10px;
  width: 1000px;
  max-width: 100%;
  
  @media (max-width: 700px) {
    flex-direction: column;
    align-items: center;
  }
`;

const StyledHeader = styled(Header)`
  margin-bottom: 20px;
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
