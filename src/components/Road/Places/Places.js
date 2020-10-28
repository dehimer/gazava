import React from "react";
import styled from "styled-components";

import Label from "../../common/Label";

import Place from "./Place";
import End from "./End";
import AdditionalPlacesSelect from "./AdditionPlacesSelect";

import {VIDEO_ENDED_EVENT, VIDEO_TIME_UPDATE_EVENT} from "../../../constants/events";

const ATTEMPTS_ALLOWED = 2;

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

  const timeForNextAppear = React.useRef(-1);
  const [leftAttempt, setLeftAttempt] = React.useState(ATTEMPTS_ALLOWED);

  React.useEffect(() => {
    if (places.length) {
      timeForNextAppear.current = places[0].timing;
    }
  }, [places])

  React.useEffect(() => {
    const handleTimeupdate = () => {
      // console.log(`handleTimeupdate ${videoRef.currentTime} > ${timeForNextAppear.current}`);
      if (timeForNextAppear.current > 0 && videoRef.currentTime > timeForNextAppear.current) {
        // console.log("pause");
        timeForNextAppear.current = -1;
        videoRef.pause();
      }
    }
    const handleEnded = () => {
      videoRef.currentTime = 0;
      onFinish();
    }

    videoRef.addEventListener(VIDEO_ENDED_EVENT, handleEnded);
    videoRef.addEventListener(VIDEO_TIME_UPDATE_EVENT, handleTimeupdate, false);

    return () => {
      videoRef.removeEventListener(VIDEO_ENDED_EVENT, handleEnded);
      videoRef.removeEventListener(VIDEO_TIME_UPDATE_EVENT, handleTimeupdate, false);
    }
  }, [onFinish, videoRef])

  const handleNextClick = () => {
    const [place, ...leftPlaces] = places;
    setPlaces(leftPlaces);
    setVisitedPlaces([...visitedPlaces, place]);
    setUnvisitedPlaces(unvisitedPlaces.filter(unvisitedPlace => unvisitedPlace.id !== place.id));
    if (leftPlaces.length > 0) {
      const placeIndex = allPlaces.map(place => place.id).indexOf(leftPlaces[0].id);
      // console.log(`placeIndex ${placeIndex}`);
      // console.log("allPlaces[placeIndex - 1]");
      // console.log(allPlaces[placeIndex - 1]);
      if (placeIndex >= 1) {
        videoRef.currentTime = allPlaces[placeIndex - 1].timing;
      }
      videoRef.play();
    }
  }

  const handleAdditionalPlacesSelect = (additionalPlaces) => {
    setUnvisitedPlaces(unvisitedPlaces.filter(({ id }) =>
      !additionalPlaces.map(place => place.id).includes(id)
    ));
    setPlaces(additionalPlaces);
    setLeftAttempt(leftAttempt - 1);

    // console.log("additionalPlaces");
    // console.log(additionalPlaces);
    const placeIndex = allPlaces.map(place => place.id).indexOf(additionalPlaces[0].id);
    // console.log(`placeIndex ${placeIndex}`);
    // console.log("allPlaces[placeIndex - 1]");
    // console.log(allPlaces[placeIndex - 1]);
    videoRef.currentTime = placeIndex >= 1 ? allPlaces[placeIndex - 1].timing : 0;
    videoRef.play();
  }

  const handleFinishClick = () => {
    videoRef.play();
  }

  return (
    <Wrapper>
      {
        places.length === 0
          ? (
            unvisitedPlaces.length === 0 || leftAttempt === 0
              ? (
                <End
                  caption={road.question4}
                  onFinishClick={handleFinishClick}
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
                  onFinishClick={handleFinishClick}
                />
              )
          )
          : (
            <>
              <StyledLabel>
                {places[0].name}
              </StyledLabel>
              <Place
                place={places[0]}
                onNext={handleNextClick}
              />
            </>
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
