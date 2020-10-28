import React from "react";
import styled from "styled-components";

import Header from "../../common/Header";
import Button from "../../common/Button"
import Checkbox from "../../common/Checkbox";

import i18n from "../../../constants/i18n";

const StoppingPlacesSelect = ({ caption, places, onSelect }) => {
  const [selected, setSelected] = React.useState([]);
  const disabled = React.useMemo(() => selected.length === 0, [selected]);
  const handleSelect = (index) => () => {
    console.log(`handleSelect ${index}`);
    setSelected((prevSelected) => {
      if (prevSelected.includes(index)) {
        return prevSelected.filter(idx => idx !== index);
      } else {
        return [...prevSelected, index];
      }
    });
  }
  const handleStartClick = () => {
    onSelect(selected.map(index => places[index]));
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
      <Button onClick={handleStartClick} disabled={disabled}>
        {i18n["start"]}
      </Button>
    </Wrapper>
  );
}

export default StoppingPlacesSelect;

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
