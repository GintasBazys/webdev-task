import React, { useState } from "react";
import styled from "styled-components";

import { ContainerSmall, GridWrapper, Box, TextBaseBold } from "components";

import { white, lightestGrey } from "styles/colors";

import { CollapsibleItem } from "../elements/CollapsibleItem";

const FAQ_ASSETS = [
  {
    id: 1,
    title: "Why should you use a password manager for business?",
    description: (
      <>
        Running a business comes with managing a lot of different devices and
        accounts. The easiest way to keep track of their login credentials is to
        use a password manager.
        <br />
        <br />
        With a password manager, your employees can store all their logins in
        one place, share them with coworkers, and access them on multiple
        devices with one password only. No excuse for forgetting passwords after
        a long vacation or for sharing passwords via email!
      </>
    ),
  },
  {
    id: 2,
    title: "How to choose the best password manager for business?",
    description: (
      <>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam
        doloribus excepturi quo ullam eligendi. Placeat vero aut enim suscipit
        velit aliquam obcaecati esse nisi sequi, architecto veniam totam qui
        fugiat?
      </>
    ),
  },
  {
    id: 3,
    title: "How can I get a business password manager?",
    description: (
      <>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste nihil cum
        saepe dolor modi nemo sit explicabo quidem ab! Nam neque ullam inventore
        non ducimus, facilis ab voluptatum sint quaerat.
      </>
    ),
  },
];

export const Faq = () => {
  const [selected, setSelected] = useState(null);

  const handleCollapse = (questionId) => {
    if (questionId === selected) setSelected(null);
    else setSelected(questionId);
  };

  return (
    <Box background={lightestGrey}>
      <TextBaseBold
        padding="6rem 0 3.75rem"
        fontSize="2.5rem"
        textAlign="center"
      >
        Frequently asked questions
      </TextBaseBold>
      <ContainerSmall>
        <GridWrapper gap="0.75rem" margin="0 0 3rem">
          {FAQ_ASSETS?.map(({ id, title, description }) => {
            return (
              <DropdownWrapper key={id}>
                <CollapsibleItem
                  title={title}
                  onClick={() => handleCollapse(id)}
                  isSelected={selected === id}
                >
                  {description}
                </CollapsibleItem>
              </DropdownWrapper>
            );
          })}
        </GridWrapper>
      </ContainerSmall>
    </Box>
  );
};

const DropdownWrapper = styled.div`
  padding: 1rem;
  background-color: ${white};
  border-radius: 0.5rem;
  border: 0.063rem solid rgba(33, 33, 33, 0.08);
`;
