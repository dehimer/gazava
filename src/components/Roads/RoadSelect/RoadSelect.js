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
  margin-top: -80px;
  
  @media (max-width: 700px) {
    margin-top: 0;
  }
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
  
  @media(max-width: 850px) {
    margin-bottom: 0;
  }
`;

const RoadButton = styled(Button)`
  margin: 10px;
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 280px;
  
  @media(max-width: 850px) {
    margin: 5px;
    padding: 10px;
  }
`;

const Name = styled.div`
  font-size: 18px;
  font-weight: bold;
  
  @media(max-width: 850px) {
    font-size: 14px;
  }
`;

const NameAddition = styled.div`
  font-size: 14px;
  margin-top: 0;
  
  @media(max-width: 850px) {
    font-size: 12px;
    margin-top: 5px;
  }
`;
