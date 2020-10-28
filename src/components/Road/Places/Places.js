import React from "react";
import styled from "styled-components";

import Label from "../../common/Label";

import Place from "./Place";
import End from "./End";
import AdditionalPlacesSelect from "./AdditionPlacesSelect";

const ATTEMPTS_ALLOWED = 2;

const Places = ({
  road,
  selectedPlaces,
  allPlaces,
  onFinish
}) => {
  const [visitedPlaces, setVisitedPlaces] = React.useState([]);
  const [unvisitedPlaces, setUnvisitedPlaces] = React.useState(
    allPlaces.filter(({ id }) =>
      !selectedPlaces.map(place => place.id).includes(id)
    )
  );

  const [places, setPlaces] = React.useState(selectedPlaces);
  const [lastPlace, setLastPlace] = React.useState(places[0]);

  const [leftAttempt, setLeftAttempt] = React.useState(ATTEMPTS_ALLOWED);

  React.useEffect(() => {
    if (places.length) {
      setLastPlace(places[0]);
    }
  }, [places])

  const handleNextClick = () => {
    const [place, ...leftPlaces] = places;
    setPlaces(leftPlaces);
    // setLastPlace(place);
    setVisitedPlaces([...visitedPlaces, place]);
    setUnvisitedPlaces(unvisitedPlaces.filter(unvisitedPlace => unvisitedPlace.id !== place.id));
  }

  const handleAdditionalPlacesSelect = (additionalPlaces) => {
    setUnvisitedPlaces(unvisitedPlaces.filter(({ id }) =>
      !additionalPlaces.map(place => place.id).includes(id)
    ));
    setPlaces(additionalPlaces);
    // setLastPlace(additionalPlaces[0]);
    setLeftAttempt(leftAttempt - 1);
  }

  return (
    <Wrapper>
      <StyledLabel>
        {lastPlace.name}
      </StyledLabel>
      {
        places.length === 0
          ? (
            unvisitedPlaces.length === 0 || leftAttempt === 0
              ? (
                <End
                  caption={road.question4}
                  onFinishClick={onFinish}
                />
              )
              : (
                <AdditionalPlacesSelect
                  caption={
                    leftAttempt === 2
                      ? road.question2
                      : road.question3
                  }
                  unvisitedPlaces={unvisitedPlaces}
                  onSelect={handleAdditionalPlacesSelect}
                  onFinishClick={onFinish}
                />
              )
          )
          : (
            <Place
              place={places[0]}
              onNext={handleNextClick}
            />
          )
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
