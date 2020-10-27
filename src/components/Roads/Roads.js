import React from "react";
import styled from "styled-components";

import RoadSelect from "./RoadSelect";

const Roads = ({ roads }) => {
  console.log("Roads");
  console.log(roads);

  return (
    <Wrapper>
      {roads.map((road, roadIndex) => <RoadSelect key={roadIndex} />)}
    </Wrapper>
  );
}

export default Roads;

const Wrapper = styled.div`
  background-color: red;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
