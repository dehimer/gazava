import React from "react";
import styled from "styled-components";

import Panel from "../common/Panel";

import Finish from "../Finish";
import Road from "../Road";
import RoadSelect from "./RoadSelect";

const PAUSE_VIDEO_EVENT = "pause";
const PLAY_VIDEO_EVENT = "play";

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
  }

  React.useEffect(() => {
    const handlePause = () => {
      console.log("handlePause");
      setVideoOnly(false)
    };

    const handlePlay = () => {
      console.log("handlePlay");
      setVideoOnly(true)
    };

    videoRef.addEventListener(PAUSE_VIDEO_EVENT, handlePause);
    videoRef.addEventListener(PLAY_VIDEO_EVENT, handlePlay);


    return () => {
      videoRef.removeEventListener(PAUSE_VIDEO_EVENT, handlePause);
      videoRef.removeEventListener(PLAY_VIDEO_EVENT, handlePlay);
    }
  }, [videoRef]);

  if (finished) {
    return (
      <Finish road={road} onRestart={onRestart} />
    );
  }

  console.log(`videoOnly ${videoOnly}`);

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
