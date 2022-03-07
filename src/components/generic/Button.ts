import styled from "styled-components";
import theme from "../../theme";

const Button = styled.button`
  border-radius: ${theme.borderRadius};
  padding: ${theme.spacing(1)};
  margin-top: ${theme.spacing(2)};
  border: 1px solid ${theme.palette.secondary};
  text-transform: uppercase;
  ${theme.typography.h6}
  &:hover {
    background: ${theme.palette.attention};
  }
  &:active {
    background: ${theme.palette.attention};
  }
`;

export default Button;
