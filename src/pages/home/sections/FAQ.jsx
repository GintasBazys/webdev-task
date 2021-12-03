import React, { useState } from "react";
import styled from "styled-components";

import { ContainerSmall, GridWrapper, Box, TextBaseBold } from "components";

import { white, lightestGrey } from "styles/colors";

import { CollapsibleItem } from "../elements/CollapsibleItem";
import { FAQ_ASSETS } from "../elements/utils";
import { useQuery } from "styles/breakpoints";

export const Faq = () => {
  const [selected, setSelected] = useState(null);

  const { isSmMobile } = useQuery();

  const handleCollapse = (questionId) => {
    if (questionId === selected) setSelected(null);
    else setSelected(questionId);
  };

  return (
    <Box background={lightestGrey}>
      <TextBaseBold
        padding="6rem 0 3.75rem"
        fontSize={isSmMobile ? "1.5rem" : "2.5rem"}
        textAlign="center"
      >
        Frequently asked questions
      </TextBaseBold>
      <ContainerSmall>
        <GridWrapper padding="0 0 6rem" gap="0.75rem" margin="0 0 3rem">
          {FAQ_ASSETS?.map(({ id, title, description }) => {
            return (
              <DropdownWrapper key={id}>
                <CollapsibleItem
                  title={title}
                  description={description}
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
