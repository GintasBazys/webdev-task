import React, { useEffect, useState } from "react";
import {
  Container,
  FlexWrapper,
  TextBaseBold,
  CustomSelect,
  Button,
  TextBase,
} from "components";
import { fetchTopPasswords } from "apis/fetchPasswords";
import { teal, white, lightGrey } from "styles/colors";
import styled from "styled-components";
import Password from "./PasswordListItem";
import { useQuery } from "styles/breakpoints";

const PasswordTable = () => {
  const [sortCriteria, setSortCriteria] = useState("Count");
  const [passwords, setPasswords] = useState([]);
  const [showAll, setShowAll] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const { isSmMobile } = useQuery();

  useEffect(() => {
    fetchTopPasswords().then((data) => {
      const initialSort = data.passwords.sort(
        ({ count: a }, { count: b }) => parseInt(b) - parseInt(a)
      );
      setPasswords(initialSort);
      setIsLoading(!isLoading);
    });
  }, []);

  const handleSort = (event) => {
    if (event.target.value !== sortCriteria) {
      setSortCriteria(event.target.value);

      if (event.target.value === "Count") {
        passwords.sort(
          ({ count: a }, { count: b }) => parseInt(b) - parseInt(a)
        );
      } else {
        passwords.sort(({ value: a }, { value: b }) => a.localeCompare(b));
      }
    }
  };

  const handlePasswordShow = () => {
    setShowAll(!showAll);
  };

  return (
    <Container>
      <FlexWrapper alignItems="center">
        <TextBaseBold fontSize="1.25rem">Password</TextBaseBold>
        <CustomSelect
          width={isSmMobile ? "10rem" : "14rem"}
          value={sortCriteria}
          onChange={handleSort}
        >
          <option>Count</option>
          <option>ABC</option>
        </CustomSelect>
      </FlexWrapper>
      <Line />
      {isLoading && <TextBase textAlign="center">Loading...</TextBase>}
      {!isLoading && (
        <>
          <OrderedList>
            {showAll
              ? passwords?.map(({ value, count }) => {
                  return <Password key={value} value={value} count={count} />;
                })
              : passwords?.slice(0, 10).map(({ value, count }) => {
                  return <Password key={value} value={value} count={count} />;
                })}
          </OrderedList>
          <Button
            onClick={handlePasswordShow}
            display="block"
            margin="0 auto 6rem"
            background={teal}
          >
            <TextBaseBold color={white}>
              {showAll ? `Show less` : `Show all (${passwords.length})`}
            </TextBaseBold>
          </Button>
        </>
      )}
    </Container>
  );
};

export default PasswordTable;

const Line = styled.div`
  width: 100%;
  background: ${lightGrey};
  height: 1px;
  margin: 1.5rem 0;
`;

const OrderedList = styled.ol`
  padding-left: 1.5rem;
`;
