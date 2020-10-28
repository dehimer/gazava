import styled from "styled-components";

import i18n from "../../../../constants/i18n";

import Header from "../../../common/Header";
import Button from "../../../common/Button";

const End = ({ caption, onFinishClick }) => (
  <>
    <Header>{caption}</Header>
    <StyledButton onClick={onFinishClick}>{i18n["to-finish"]}</StyledButton>
  </>
)

export default End;

const StyledButton = styled(Button)`
  margin-top: 20px;
`;
