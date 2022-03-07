import { Container } from "./generic/Container";
import { H4 } from "./generic/typography";
import { CardList } from "./CardList";
import { useUsers } from "../hooks/useUsers";
import styled from "styled-components";

const FlexContainer = styled(Container)`
  display: flex;
  flex-direction: column;
`;

export const App = (): JSX.Element => {
  const users = useUsers(10);
  return (
    <FlexContainer>
      <H4>Test Solution</H4>
      <CardList users={users} />
    </FlexContainer>
  );
};
