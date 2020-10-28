import React from "react";
import styled from "styled-components";

import i18n from "../../../../constants/i18n";

import Button from "../../../common/Button";
import Header from "../../../common/Header";

const Place = ({ place, onNext }) => {
  return (
    <Wrapper>
      <StyledHeader dangerouslySetInnerHTML={{__html: place.description}} />
      <Button onClick={onNext}>
        {i18n.next}
      </Button>
    </Wrapper>
  )
};

export default Place;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
