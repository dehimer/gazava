import React from "react";
import styled from "styled-components";

import PlacesSelect from "../../PlacesSelect";
import i18n from "../../../../constants/i18n";
import Button from "../../../common/Button";
import Header from "../../../common/Header";

const AdditionalPlacesSelect = ({
  caption,
  leftAttempt,
  unvisitedPlaces,
  onFinishClick
}) => {
  const [showPreview, setShowPreview] = React.useState(true);
  const handlePlacesSelect = (places) => {
    console.log("handlePlacesSelect");
    console.log(places);
  }

  const handleAnotherOptionButton = () => {
    setShowPreview(false);
  }

  if (showPreview) {
    return (
      <>
        <Header>{caption}</Header>
        <Controls>
          <StyledButton onClick={handleAnotherOptionButton}>
            {i18n["select-another-options"]}
          </StyledButton>
          <Button onClick={onFinishClick}>
            {i18n["to-finish"]}
          </Button>
        </Controls>
      </>
    );
  }

  return (
    <PlacesSelect
      caption={
        <Header>
          <div>
            {i18n["additional-places-select_caption"]}
          </div>
          <div>
            {i18n["additional-places-select_caption-second"]}
          </div>
        </Header>
      }
      places={unvisitedPlaces}
      onSelect={handlePlacesSelect}
      buttonText={i18n.continue}
    >
      <FinishButton onClick={onFinishClick}>
        {i18n["to-finish-fast"]}
      </FinishButton>
    </PlacesSelect>
  )
}

export default AdditionalPlacesSelect;

const FinishButton = styled(Button)`
  margin-left: 100px;
`;

const Controls = styled.div`
  display: flex;
  margin-top: 30px;
`;

const StyledButton = styled(Button)`
  margin-right: 100px;
`;
