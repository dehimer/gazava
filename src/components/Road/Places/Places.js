import React from "react";
import styled from "styled-components";

import i18n from "../../../constants/i18n";

import Header from "../../common/Header";
import Button from "../../common/Button";
import Label from "../../common/Label";

const Places = ({
  initiallyLeftPlaces,
  allPlaces
}) => {
  const [currentPlaceIndex, setCurrentPlaceIndex] = React.useState(0);
  const [visitedPlaces, setVisitedPlaces] = React.useState([]);
  const [leftPlaces, setLeftPlaces] = React.useState(initiallyLeftPlaces);
  const currentPlace = leftPlaces[currentPlaceIndex];

  const handleNextClick = () => {
    if (currentPlaceIndex === leftPlaces.length) {

    } else {
      setCurrentPlaceIndex(currentPlaceIndex + 1);
    }
  }

  return (
    <Wrapper>
      <StyledLabel>
        {currentPlace.name}
      </StyledLabel>
      <StyledHeader dangerouslySetInnerHTML={{__html: currentPlace.description}} />
      <Button onClick={handleNextClick}>
        {i18n.next}
      </Button>
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

const StyledHeader = styled(Header)`
  font-size: 10px;

  
  h1 {
    font-size: 32px;
    font-weight: normal;
  }
  
  h2 {
    font-size: 28px;
    font-weight: normal;
  }
  
  h3 {
    font-size: 20px;
    font-weight: normal;
  }
  b {
    color: #a40023;
    font-weight: normal;
  }
`;
