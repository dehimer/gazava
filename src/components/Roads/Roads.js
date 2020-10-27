import React from "react";
import styled from "styled-components";

import RoadSelect from "./RoadSelect";
import Header from "../common/Header";

import i18n from "../../constants/i18n";

const Roads = ({ roads }) => {
  console.log("Roads");
  console.log(roads);

  return (
    <Wrapper>
      <Header>{i18n["select-road-label"]}</Header>
      {roads.map((road, roadIndex) => <RoadSelect key={roadIndex} />)}
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
