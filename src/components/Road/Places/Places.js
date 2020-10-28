import React from "react";
import styled from "styled-components";

import Label from "../../common/Label";

import Place from "./Place";
import End from "./End";
import AdditionalPlacesSelect from "./AdditionPlacesSelect";

const ATTEMPTS_ALLOWED = 2;
const TIME_UPDATE_EVENT = "timeupdate";

const Places = ({
  road,
  selectedPlaces,
  allPlaces,
  onFinish,
  videoRef
}) => {
  const [visitedPlaces, setVisitedPlaces] = React.useState([]);
  const [unvisitedPlaces, setUnvisitedPlaces] = React.useState(
    allPlaces.filter(({ id }) =>
      !selectedPlaces.map(place => place.id).includes(id)
    )
  );

  const [places, setPlaces] = React.useState(selectedPlaces);
  const [lastPlace, setLastPlace] = React.useState(places[0]);

  const [timeForNextAppear, setTimeForNextAppear] = React.useState(-1);
  const [leftAttempt, setLeftAttempt] = React.useState(ATTEMPTS_ALLOWED);

  React.useEffect(() => {
    if (places.length) {
      setLastPlace(places[0]);
      setTimeForNextAppear(places[0].timing);
    }
  }, [places])

  React.useEffect(() => {
    const handleTimeupdate = () => {
      // console.log(`handleTimeupdate ${videoRef.currentTime} === ${timeForNextAppear}`);
      if (Math.abs(videoRef.currentTime - timeForNextAppear) < 0.100) {
        // console.log("pause");
        videoRef.pause();
      }
    }
    videoRef.addEventListener(TIME_UPDATE_EVENT, handleTimeupdate, false);

    return () => {
      videoRef.removeEventListener(TIME_UPDATE_EVENT, handleTimeupdate, false);
    }
  }, [timeForNextAppear, videoRef])

  const handleNextClick = () => {
    const [place, ...leftPlaces] = places;
    setPlaces(leftPlaces);
    setVisitedPlaces([...visitedPlaces, place]);
    setUnvisitedPlaces(unvisitedPlaces.filter(unvisitedPlace => unvisitedPlace.id !== place.id));
    videoRef.play();
  }

  const handleAdditionalPlacesSelect = (additionalPlaces) => {
    setUnvisitedPlaces(unvisitedPlaces.filter(({ id }) =>
      !additionalPlaces.map(place => place.id).includes(id)
    ));
    setPlaces(additionalPlaces);
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
