import React from "react";
import styled from "styled-components";

import Label from "../../common/Label";

import Place from "./Place";

const ATTEMPTS_ALLOWED = 2;

const Places = ({
  selectedPlaces,
  allPlaces
}) => {
  const [visitedPlaces, setVisitedPlaces] = React.useState([]);
  const [unvisitedPlaces, setUnvisitedPlaces] = React.useState(allPlaces.map(({ id }) => id));

  const [places, setPlaces] = React.useState(selectedPlaces);
  const [lastPlace, setLastPlace] = React.useState(places[0]);

  const [leftAttempt, setLeftAttempt] = React.useState(ATTEMPTS_ALLOWED);

  const [showPlacesSelect, setShowPlacesSelect] = React.useState(false);

  const handleNextClick = () => {
    console.log("handleNextClick");
    console.log(places);
    if (places.length === 0) {
      // if (unvisitedPlaces.length > 0 && attempt < ATTEMPTS_ALLOWED) {
      //   setShowPlacesSelect(true);
      //   // setAttempt(attempt + 1);
      // }
    } else {
      const [place, ...leftPlaces] = places;
      setPlaces(leftPlaces);
      setLastPlace(place);
      setVisitedPlaces([...visitedPlaces, place.id]);
      setUnvisitedPlaces(unvisitedPlaces.filter(id => id !== place.id));
    }
  }

  return (
    <Wrapper>
      <StyledLabel>
        {lastPlace.name}
      </StyledLabel>
      {
        places.length === 0
          ? <>SELECT MORE</>
          : <Place place={places[0]} onNext={handleNextClick} />
      }
    </Wrapper>
  );
}

export default Places;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100%;
`;

const StyledLabel = styled(Label)`
  position: absolute;
  left: 0;
  top: 0;
`;
