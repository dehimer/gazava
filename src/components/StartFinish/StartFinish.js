import React from "react";
import styled from "styled-components";

import data from "../../data.json";
import i18n from "../../constants/i18n";

import Roads from "../Roads";
import Button from "../common/Button";
import Background from "./Background";
import Logotypes from "./Logotypes";

import Panel from "../common/Panel";
import Header from "../common/Header";

import {
  VIDEO_PAUSE_EVENT, VIDEO_PLAY_EVENT
} from "../../constants/events";

const RESIZE_EVENT = "resize";

const StartFinish = () => {
  const roads = React.useMemo(() => data.roads, []);
  const [started, setStarted] = React.useState(false);
  const [finished, setFinished] = React.useState(false);

  const [portraitView, setPortraitView] = React.useState(false);
  const [hideLogo, setHideLogo] = React.useState(false);

  React.useEffect(() => {
    const handleResize = () => {
      const aspectRatio = window.innerHeight/window.innerWidth;
      setPortraitView(aspectRatio > 1);
    }

    handleResize();

    window.addEventListener(RESIZE_EVENT, handleResize);

    return () => {
      window.removeEventListener(RESIZE_EVENT, handleResize);
    }
  }, []);

  const [videoRef, setVideoRef] = React.useState(null);

  React.useEffect(() => {
    const handlePlay = () => {
      setHideLogo(true);
    };
    const handlePause = () => {
      setHideLogo(false);
    };

    if (videoRef) {
      videoRef.addEventListener(VIDEO_PLAY_EVENT, handlePlay);
      videoRef.addEventListener(VIDEO_PAUSE_EVENT, handlePause);
    }

    return () => {
      if (videoRef) {
        videoRef.removeEventListener(VIDEO_PLAY_EVENT, handlePlay);
        videoRef.removeEventListener(VIDEO_PAUSE_EVENT, handlePause);
      }
    };
  }, [videoRef]);

  const handleStartClick = () => {
    setStarted(true);
    setFinished(false);
  }

  const handleFinishClick = () => {
    setFinished(true);
  }

  const handleRestartClick = () => {
    setStarted(false);
    setFinished(false);
  }

  return (
    <Wrapper>
      <Background finished={finished} />
      <VideoWrapper>
        <video ref={setVideoRef} playsInline muted />
      </VideoWrapper>
      <Version>M-RU-00001112 октябрь 2020</Version>
      { portraitView && (
        <FullScreenPanel>
          <Header>
            {i18n["please-change-orientation"]}
          </Header>
        </FullScreenPanel>
      )}
        {started
          ? (
            <Roads
              roads={roads}
              finished={finished}
              onFinish={handleFinishClick}
              onRestart={handleRestartClick}
              videoRef={videoRef}
            />
          )
          : (
            <>
              <TopPanel>
                <Question>
                  <div dangerouslySetInnerHTML={{__html: i18n["start-screen-label"]}} />
                </Question>
              </TopPanel>
              <BottomPanel>
                <Button onClick={handleStartClick}>
                  {i18n.start}
                </Button>
              </BottomPanel>
            </>
          )
        }
      {!hideLogo && <Logotypes/>}
    </Wrapper>
  )
}

export default StartFinish

const Version = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  color: white;
  font-size: 10px;
  z-index: 1;
`;

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
`;

const TopPanel = styled(Panel)`
  position: absolute;
  width: 100%;
  left: 0;
  top: 22vh;
`;

const BottomPanel = styled(Panel)`
  position: absolute;
  width: 100%;
  left: 0;
  bottom: 0;
  min-height: 120px;
  padding-top: 10px;
  
  @media(max-width: 850px) {
    min-height: 80px;
  }
  
  @media(max-width: 700px) {
    min-height: 50px;
  }
`;

const Question = styled(Header)`
  text-align: center;
  margin-bottom: 20px;
  width: 700px;
  max-width: 100%;
  
  @media(max-width: 850px) {
    margin-bottom: 0;
    font-size: 14px;
  }
`;

const FullScreenPanel = styled(Panel)`
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  z-index: 1;
`;

const VideoWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  
  video {
    object-fit: cover;
    height: 100%;
    width: 100%;
    
    opacity: 0;
    transition: opacity 1s;
  }
`;
