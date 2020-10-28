import React from "react";
import styled from "styled-components";

import PlacesSelect from "./PlacesSelect";
import Places from "./Places";

const Road = ({ road }) => {
  const [driving, setDriving] = React.useState(false);
  const [stoppingPlaces, setStoppingPlaces] = React.useState([]);
  const places = road.stages;

  const handlePlacesSelect = (places) => {
    setStoppingPlaces(places);
    setDriving(true);
  }

  return (
    <Wrapper>
      {
        driving
          ? (
            <Places
              allPlaces={places}
              selectedPlaces={stoppingPlaces}
            />
          )
          : (
            <PlacesSelect
              caption={road.question1}
              places={places}
              onSelect={handlePlacesSelect}
            />
          )
      }
    </Wrapper>
  );
}

export default Road;

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
`;
