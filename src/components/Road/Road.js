import React from "react";
import styled from "styled-components";

import PlacesSelect from "./PlacesSelect";
import Places from "./Places";

const Road = ({
  road,
  onFinish,
  videoRef
}) => {
  const [driving, setDriving] = React.useState(false);
  const [stoppingPlaces, setStoppingPlaces] = React.useState([]);
  const places = road.stages;
  const [disabled, setDisabled] = React.useState(true);

  const handlePlacesSelect = (places) => {
    videoRef.play();
    setStoppingPlaces(places);
    setDriving(true);
  };

  React.useEffect(() => {
    const handleCanPlay = () => {
      videoRef.style.opacity = 1;
      setDisabled(false);
    };
    videoRef.addEventListener("canplaythrough", handleCanPlay);

    if (road) {
      videoRef.setAttribute("src", `./videos/${road.src}`);
    }

    return () => {
      videoRef.pause();
      videoRef.removeEventListener("canplaythrough", handleCanPlay);
      videoRef.style.opacity = 0;
    }
  }, [road, videoRef]);

  return (
    <Wrapper>
      {
        driving
          ? (
            <Places
              road={road}
              allPlaces={places}
              selectedPlaces={stoppingPlaces}
              onFinish={onFinish}
            />
          )
          : (
            <PlacesSelect
              caption={road.question1}
              places={places}
              onSelect={handlePlacesSelect}
              disabled={disabled}
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
