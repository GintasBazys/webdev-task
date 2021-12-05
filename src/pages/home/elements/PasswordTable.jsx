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
import { teal, white, lightGrey, darkestGrey, darkGrey } from "styles/colors";
import styled from "styled-components";

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
      setIsLoading(false);
    });
  }, [isLoading]);

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

  const orderedList = showAll ? passwords : passwords.slice(0, 10);

  return (
    <Container>
      <FlexWrapper
        justifyContent="space-between"
        margin="0 0 1.5rem 0"
        alignItems="center"
      >
        <TextBaseBold fontSize="1.25rem">Password</TextBaseBold>
        <SelectContainer>
          <CustomSelect
            width={isSmMobile ? "10rem" : "14rem"}
            value={sortCriteria}
            onChange={handleSort}
          >
            <option>Count</option>
            <option>ABC</option>
          </CustomSelect>
        </SelectContainer>
      </FlexWrapper>

      {isLoading && <TextBase textAlign="center">Loading...</TextBase>}
      {!isLoading && (
        <>
          <Table>
            <tbody>
              {orderedList.map(({ value, count }, index) => {
                return (
                  <tr key={value}>
                    <td>
                      <TextBase color={darkGrey}>{index + 1}.</TextBase>
                    </td>
                    <td>
                      <TextBaseBold wordBreak="break-word" color={darkGrey}>
                        {value}
                      </TextBaseBold>
                    </td>
                    <td>
                      <TextBase color={darkestGrey}>{count}</TextBase>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
          <Button
            onClick={handlePasswordShow}
            display="block"
            margin="2.25rem auto 6rem"
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

const Table = styled.table`
  border-top: ${lightGrey} 1px solid;
  width: 100%;
  border-spacing: 0;
  border-collapse: collapse;
  tr {
    border-bottom: ${lightGrey} 1px solid;
  }
  tr td {
    padding: 1.5rem 0;
    &:first-child {
      width: 1.5rem;
      padding-right: 1rem;
    }
    &:last-child {
      padding-left: 1rem;
      text-align: end;
    }
  }
`;

const SelectContainer = styled.div`
  position: relative;
  &::after {
    content: "";
    display: block;
    position: absolute;
    width: 0.5rem;
    height: 0.313rem;
    background-image: url("./html-images/select_icon.svg");
    top: 50%;
    transform: translateY(-50%);
    right: 1.188rem;
  }
`;
