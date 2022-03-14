import React from "react";
import styled from "styled-components";
import theme from "../theme";
import { User } from "../hooks/useUsers";
import { H6 } from "./generic/typography";
import { FlipCard } from "./FlipCard";

const Grid = styled.div`
  display: grid;
  margin: auto;
  grid-template-columns: 1fr 1fr;
  column-gap: ${theme.spacing(2)};
  row-gap: ${theme.spacing(2)};
`;

/** Renders user cards in 2 columns */
export const CardList = ({ users }: { users: Array<User> }): JSX.Element => {
  return (
    <Grid>
      {users.map((v) => (
        <FlipCard front={createFront(v)} back={createBack(v)} />
      ))}
    </Grid>
  );
};

const createFront = (user: User): JSX.Element => (
  <>
    <img
      style={{ display: "block", margin: "5px auto 10px auto" }}
      src={user.avatar}
      alt={"robo"}
    />
    <H6>{user.name}</H6>
    <span>{user.job}</span>
  </>
);

const createBack = (user: User): JSX.Element => (
  <>
    <H6>{user.name}</H6>
    <p>more info about {user.name}</p>
  </>
);
