import React from "react";
import styled from "styled-components";

import StoppingPlacesSelect from "./StoppingPlacesSelect";

const RoadSelect = ({ road }) => {
  const [driving, setDriving] = React.useState(false);
  const [stoppingPlaces, setStoppingPlaces] = React.useState([]);

  const handleStoppingPlacesSelect = (places) => {
    console.log("handleStoppingPlacesSelect");
    console.log(places);
    setStoppingPlaces(places);
    setDriving(true);
  }

  return (
    <Wrapper>
      {
        driving
          ? <div>Video</div>
          : (
            <StoppingPlacesSelect
              places={road.stages}
              onSelect={handleStoppingPlacesSelect}
            />
          )
      }
    </Wrapper>
  );
}

export default RoadSelect;

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
`;
