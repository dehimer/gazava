import React from "react";
import styled from "styled-components";

import Panel from "../common/Panel";

import Finish from "../Finish";
import Road from "../Road";
import RoadSelect from "./RoadSelect";

import { VIDEO_PAUSE_EVENT, VIDEO_PLAY_EVENT } from "../../constants/events";

const Roads = ({
  roads,
  finished,
  onFinish,
  onRestart,
  videoRef
}) => {
  const [road, setRoad] = React.useState(null);
  const [videoOnly, setVideoOnly] = React.useState(false);

  const handleRoadSelect = (road) => {
    setRoad(road);
    window.ym(
      68806243,
      "hit",
      `./route${road.id}`
    );
  }

  React.useEffect(() => {
    const handlePause = () => {
      setVideoOnly(false)
    };

    const handlePlay = () => {
      setVideoOnly(true)
    };

    videoRef.addEventListener(VIDEO_PAUSE_EVENT, handlePause);
    videoRef.addEventListener(VIDEO_PLAY_EVENT, handlePlay);


    return () => {
      videoRef.removeEventListener(VIDEO_PAUSE_EVENT, handlePause);
      videoRef.removeEventListener(VIDEO_PLAY_EVENT, handlePlay);
    }
  }, [videoRef]);

  if (finished) {
    return (
      <Finish road={road} onRestart={onRestart} />
    );
  }

  return (
    <StyledPanel videoOnly={videoOnly}>
      <Wrapper>
        {
          road
            ? (
              <Road
                road={road}
                onFinish={onFinish}
                videoRef={videoRef}
              />
            )
            : (
              <RoadSelect
                roads={roads}
                onSelect={handleRoadSelect}
              />
            )
        }
      </Wrapper>
    </StyledPanel>
  );
}

export default Roads;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const StyledPanel = styled(Panel)`
  position: absolute;
  min-height: 80vh;
  width: 100%;
  left: 0;
  bottom: 0;
  
  visibility: ${({ videoOnly }) => videoOnly ? "hidden" : "visible"};
`;
