import React from "react";
import styled from "styled-components";

import PlacesSelect from "../../PlacesSelect";
import i18n from "../../../../constants/i18n";
import Button from "../../../common/Button";
import Header from "../../../common/Header";

const AdditionalPlacesSelect = ({
  caption,
  unvisitedPlaces,
  hideFinish = false,
  onFinishClick,
  onSelect
}) => {
  const [showPreview, setShowPreview] = React.useState(true);
  const handlePlacesSelect = (places) => {
    onSelect(places);
  }

  const handleAnotherOptionButton = () => {
    setShowPreview(false);
  }

  if (showPreview) {
    return (
      <>
        <StyledHeader>{caption}</StyledHeader>
        <Controls>
          <StyledButton onClick={handleAnotherOptionButton}>
            {i18n["select-another-options"]}
          </StyledButton>
          {!hideFinish && (
            <Button onClick={onFinishClick}>
              {i18n["to-finish"]}
            </Button>
          )}
        </Controls>
      </>
    );
  }

  return (
    <PlacesSelect
      caption={
        <StyledHeader>
          <div>
            {i18n["additional-places-select_caption"]}
          </div>
          <div>
            {i18n["additional-places-select_caption-second"]}
          </div>
        </StyledHeader>
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
  
  @media (max-width: 850px) {
    margin-top: 25px;
  }
`;

const StyledHeader = styled(Header)`
  @media (max-width: 850px) {
    font-size: 22px;
  }
`;

const StyledButton = styled(Button)`
  margin-right: 100px;
  
  @media (max-width: 850px) {
    margin-right: 50px;
  }
`;
