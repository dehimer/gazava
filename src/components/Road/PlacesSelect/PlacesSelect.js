import React from "react";
import styled from "styled-components";

import Header from "../../common/Header";
import Button from "../../common/Button"
import Checkbox from "../../common/Checkbox";

import i18n from "../../../constants/i18n";

const PlacesSelect = ({
  caption,
  places,
  onSelect,
  buttonText = i18n.start,
  children,
  buttonDisabled = false
}) => {
  const [selected, setSelected] = React.useState([]);
  const disabled = React.useMemo(
    () => selected.length === 0 || buttonDisabled,
    [selected, buttonDisabled]
  );
  const handleSelect = (index) => () => {
    setSelected((prevSelected) => {
      if (prevSelected.includes(index)) {
        return prevSelected.filter(idx => idx !== index);
      } else {
        return [...prevSelected, index];
      }
    });
  }
  const handleStartClick = () => {
    onSelect(selected.map(index => places[index]).sort((a, b) => a.id - b.id));
  }

  return (
    <Wrapper>
      <SmallerHeader>{caption}</SmallerHeader>
      <CheckboxesWrapper>
        {
          places.map((place, index) => (
            <StyledCheckbox
              key={index}
              onClick={handleSelect(index)}
              selected={selected.includes(index)}
            >
              {place.name}
            </StyledCheckbox>
          ))
        }
      </CheckboxesWrapper>
      <Controls>
        <Button
          onClick={handleStartClick}
          disabled={disabled}
        >
          {buttonText}
        </Button>
        {children}
      </Controls>
    </Wrapper>
  );
}

export default PlacesSelect;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 800px;
`;

const SmallerHeader = styled(Header)`
  font-size: 30px;
  text-align: center;
  
  @media(max-width: 850px) {
    font-size: 20px;
    padding-right: 100px;
  }
  
  @media(max-width: 700px) {
    font-size: 18px;
    padding-right: 130px;
  }
`;

const CheckboxesWrapper = styled.div`
  margin-bottom: 20px;
  display: flex;
  justify-content: flex-start;
  
  max-width: 650px;
  flex-wrap: wrap;
  
  @media (max-width: 650px) {
    justify-content: center;
    width: 350px;
  }
`;

const StyledCheckbox = styled(Checkbox)`
  width: 300px;
`;

const Controls = styled.div`
  display: flex;
`;
