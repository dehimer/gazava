import React from "react";
import styled from "styled-components";

import PlacesSelect from "../../PlacesSelect";
import i18n from "../../../../constants/i18n";
import Button from "../../../common/Button";
import Header from "../../../common/Header";

const AdditionalPlacesSelect = ({
  leftAttempt,
  unvisitedPlaces,
  onFinishClick
}) => {
  const handlePlacesSelect = (places) => {
    console.log("handlePlacesSelect");
    console.log(places);
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
