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
  padding: 20px 40px;
  
  h1 {
    font-size: 32px;
    font-weight: normal;
    
    @media (max-width: 850px) {
      font-size: 12px;
    }
    
    @media (max-width: 700px) {
      font-size: 10px;
    }
  }
  
  h2 {
    font-size: 28px;
    font-weight: normal;
    
    @media (max-width: 850px) {
      font-size: 10px;
    }
    
    @media (max-width: 700px) {
      font-size: 7px;
    }
  }
  
  h3 {
    font-size: 20px;
    font-weight: normal;
    
    @media (max-width: 850px) {
      font-size: 8px;
    }
    
    @media (max-width: 700px) {
      font-size: 4px;
    }
  }

  b {
    color: #a40023;
    font-weight: normal;
  }
`;
